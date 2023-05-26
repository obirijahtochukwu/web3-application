import React from 'react';
import {
  faChartSimple,
  faFileSignature,
  faGlasses,
  faHammer,
  faQuestion,
  faUserEdit
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dAppName } from 'config';
import { logout } from 'helpers';
import { useGetAccount, useGetIsLoggedIn } from 'hooks';
import { routeNames } from 'routes';
import { ReactComponent as MultiversXLogo } from '../../../assets/img/multiversx.svg';
import myImage from '../../../assets/img/auction-logo.jpg';
import * as config from '../../../config';

export const Navbar = () => {
  const isLoggedIn = useGetIsLoggedIn();
  const imageStyles: React.CSSProperties = {
    width: '50px',
    height: '50px'
  };

  const { address } = useGetAccount();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  return (
    <div>
      {address === config.adminAddress && (
        <>
          <BsNavbar className='bg-white border-bottom px-3'>
            <div className='container-fluid'>
              <Link
                className='d-flex align-items-center navbar-brand mr-0'
                to={isLoggedIn ? routeNames.dashboard : routeNames.home}
              >
                {/* <MultiversXLogo className='multiversx-logo' /> */}
                <img src={myImage} style={imageStyles} />
                <span className='dapp-name text-muted'>{dAppName}</span>
              </Link>

              <Nav className='ml-auto'>
                {isLoggedIn && (
                  <>
                    <NavItem>
                      <Link to={routeNames.testRoute} className='nav-link'>
                        <FontAwesomeIcon
                          icon={faHammer}
                          className='text-muted me-1'
                        />
                        Auction House
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to={routeNames.faq} className='nav-link'>
                        <FontAwesomeIcon
                          icon={faQuestion}
                          className='text-muted me-1'
                        />
                        FAQ
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to={routeNames.admin} className='nav-link'>
                        <FontAwesomeIcon
                          icon={faUserEdit}
                          className='text-muted me-1'
                        />
                        Admin Panel
                      </Link>
                    </NavItem>
                    <NavItem>
                      <button className='btn btn-secondary ms-2' onClick={handleLogout}>
                        Log Out
                      </button>
                    </NavItem>
                  </>
                )}
              </Nav>
            </div>
          </BsNavbar>
        </>
      )}
      {address != config.adminAddress && (
        <>
          <BsNavbar className='bg-white border-bottom px-3'>
            <div className='container-fluid'>
              <Link
                className='d-flex align-items-center navbar-brand mr-0'
                to={isLoggedIn ? routeNames.dashboard : routeNames.home}
              >
                {/* <MultiversXLogo className='multiversx-logo' /> */}
                <img src={myImage} style={imageStyles} />
                <span className='dapp-name text-muted'>{dAppName}</span>
              </Link>

              <Nav className='ml-auto'>
                {isLoggedIn && (
                  <>
                    <NavItem>
                      <Link to={routeNames.testRoute} className='nav-link'>
                        <FontAwesomeIcon
                          icon={faHammer}
                          className='text-muted me-1'
                        />
                        Auction House
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link to={routeNames.faq} className='nav-link'>
                        <FontAwesomeIcon
                          icon={faQuestion}
                          className='text-muted me-1'
                        />
                        FAQ
                      </Link>
                    </NavItem>
                    <NavItem>
                      <button className='btn btn-secondary ms-2' onClick={handleLogout}>
                        Log Out
                      </button>
                    </NavItem>
                  </>
                )}
              </Nav>
            </div>
          </BsNavbar>
        </>
      )}
    </div>
  );
};


    // <BsNavbar className='bg-white border-bottom px-3'>
    //   <div className='container-fluid'>
    //     <Link
    //       className='d-flex align-items-center navbar-brand mr-0'
    //       to={isLoggedIn ? routeNames.dashboard : routeNames.home}
    //     >
    //       {/* <MultiversXLogo className='multiversx-logo' /> */}
    //       <img src={myImage} style={imageStyles}/>
    //       <span className='dapp-name text-muted'>{dAppName}</span>
    //     </Link>

    //     <Nav className='ml-auto'>
    //       {isLoggedIn && (
    //         <>
    //         <NavItem>
    //             <Link to={routeNames.testRoute} className='nav-link'>
    //               <FontAwesomeIcon
    //                 icon={faHammer}
    //                 className='text-muted me-1'
    //               />
    //               Auction House
    //             </Link>
    //           </NavItem>
    //           <NavItem>
    //             <Link to={routeNames.faq} className='nav-link'>
    //               <FontAwesomeIcon
    //                 icon={faQuestion}
    //                 className='text-muted me-1'
    //               />
    //               FAQ
    //             </Link>
    //           </NavItem>
    //           {/* <NavItem>
    //             <Link to={routeNames.statistics} className='nav-link'>
    //               <FontAwesomeIcon
    //                 icon={faChartSimple}
    //                 className='text-muted'
    //               />
    //             </Link>
    //           </NavItem>
    //           <NavItem>
    //             <Link to={routeNames.signMessage} className='nav-link'>
    //               <FontAwesomeIcon
    //                 icon={faFileSignature}
    //                 className='text-muted'
    //               />
    //             </Link>
    //           </NavItem> */}
    //           <NavItem>
    //             <button className='btn btn-secondary ms-2' onClick={handleLogout}>
    //               Log Out
    //             </button>
    //           </NavItem>
    //         </>
    //       )}
    //     </Nav>
    //   </div>
    // </BsNavbar>