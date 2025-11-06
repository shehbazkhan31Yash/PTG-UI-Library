/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Layout and Routing for reusable components
 */
import { Suspense } from 'react';
import './Layout.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../header/header';
import Sidenav from '../sidenav/Sidenav';
import Footer from '../footer/Footer';
import PrivateRoute from '../../route/private-route';
import routing from '../../route/routing';
import { PtgSpinner } from '@ptg-ui/libs/ptg-ui-web-components-react/src';

export function Layout() {
  return (
    <div className="wrapper">
      <Routes>
        {routing.map((route: any, idx: number) => {
          const routeId = `${idx}-route`;
          const RouteElement = (
            <PrivateRoute>
              <Suspense
                fallback={
                  <div className="tab-panel-placeholder d-flex justify-content-center align-self-center">
                    <PtgSpinner appearance="secondary" />
                  </div>
                }
              >
                <route.component />
              </Suspense>
            </PrivateRoute>
          );

          return (
            <Route
              key={routeId}
              path={route.path}
              element={
                !route.requiresLayout ? (
                  <>
                    {/* Render full layout with Header, Sidenav, and Footer */}
                    <Header />
                    <div className="main">
                      <div className="d-flex h-100">
                        <div className="flex-shrink-1 side-nav-wrapper h-100">
                          <Sidenav />
                        </div>
                        <div className="main-wrapper">
                          <div className="main-container p-2">
                            {RouteElement}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Footer />
                  </>
                ) : (
                  // Render just the component without layout
                  RouteElement
                )
              }
            />
          );
        })}
        {/* Redirect to a default route only if the path is not defined */}
        <Route path="*" element={<Navigate to="/calendar" />} />
      </Routes>
    </div>
  );
}

export default Layout;
