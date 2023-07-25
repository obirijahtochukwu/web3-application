import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'
import {
  AxiosInterceptorContext, // using this is optional
  DappProvider,
  Layout
} from 'components'
import {
  TransactionsToastList,
  NotificationModal,
  SignTransactionsModals
} from 'components'
import {
  apiTimeout,
  walletConnectV2ProjectId,
  sampleAuthenticatedDomains
} from 'config'
import { Auction, Faqs, Login, PageNotFound, Unlock } from 'pages'
import { routeNames } from 'routes'
import { routes } from 'routes'
import { EnvironmentsEnum } from 'types'

export const App = () => {

  if('a' === 'a'){
    return (
            <Router>

          <Routes>
            <Route path={'/'} element={<Navigate to='/auction' />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/faqs'} element={<Faqs />} />
            <Route path={'/auction'} element={<Auction />} />
          </Routes>
        </Router>
    )
  }
  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor
        authenticatedDomanis={sampleAuthenticatedDomains}
        >
        <Router>
           <DappProvider
            environment={EnvironmentsEnum.devnet}
            customNetworkConfig={{
              name: 'customConfig',
              apiTimeout,
              walletConnectV2ProjectId
            }}
          >
            {/* insert web3 context */}
            <Layout>
              <AxiosInterceptorContext.Listener />
              <TransactionsToastList />
              <NotificationModal />
              <SignTransactionsModals className='custom-class-for-modals' />
              <Routes>
                <Route path={routeNames.unlock} element={<Unlock />} />
                {routes.map((route, index) => (
                  <Route
                    path={route.path}
                    key={'route-key-' + index}
                    element={<route.component />}
                  />
                ))}
                {/* <Route path='*' element={<PageNotFound />} /> */}
              </Routes>
            </Layout>
          </DappProvider> 
        </Router>
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  )
}
