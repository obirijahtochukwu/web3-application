import { dAppName } from 'config';
import { TestRoute } from 'pages/TestRoute';
import { RouteType } from 'types';
import { withPageTitle } from './components/PageTitle';
import { Faq } from './pages/Faq';
import {Admin } from './pages/Admin';

import { Dashboard, Home, SignMessage, Statistics } from './pages';

export const routeNames = {
  home: '/',
  dashboard: '/dashboard',
  statistics: '/statistics',
  signMessage: '/sign-message',
  unlock: '/unlock',
  testRoute: '/test-route',
  faq: '/faq',
  admin: '/admin'
};

interface RouteWithTitleType extends RouteType {
  title: string;
}

export const routes: RouteWithTitleType[] = [
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
  {
    path: routeNames.statistics,
    title: 'Statistics',
    component: Statistics,
    authenticatedRoute: true
  },
  {
    path: routeNames.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  },
  {
    path: routeNames.signMessage,
    title: 'Sign Message',
    component: SignMessage,
    authenticatedRoute: true
  },
  {
    path: routeNames.testRoute,
    title: 'Testing Stuff',
    component: TestRoute,
    authenticatedRoute: true
  },
  {
    path: routeNames.faq,
    title: 'Faq Page',
    component: Faq,
    authenticatedRoute: true
  },
  {
    path: routeNames.admin,
    title: 'Admin Page',
    component: Admin,
    authenticatedRoute: true
  }
];

export const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • MultiversX ${dAppName}`
    : `MultiversX ${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});
