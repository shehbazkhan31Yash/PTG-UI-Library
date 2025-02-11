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

export interface LayoutProps { }

export function Layout({ }: LayoutProps) {
  return (
    <div className="wrapper">
      {/*--Import Header--*/}
      <Header />
      <div className="main">
        <div className="d-flex h-100">
          <div className="flex-shrink-1 side-nav-wrapper h-100 pt-4">
            <Sidenav />
          </div>
          <div className="main-wrapper">
            <div className="main-conatiner p-2">
              {/*--Start dynamic private routing--*/}
              <Routes>
                {routing.map((route: any, idx: number) => {
                  return (<Route key={idx} path={route.path} element={
                    <PrivateRoute>
                      <Suspense fallback={<div className="tab-panel-placeholder  d-flex justify-content-center align-self-center"><PtgSpinner appearance='secondary'/></div>}>
                        <route.component />
                      </Suspense>
                    </PrivateRoute>} />)
                })}
              <Route path="*" element={<Navigate to="/calendar" />} />
              </Routes>
              {/*--End dynamic private routing--*/}
            </div>
          </div>
        </div>
      </div>
      {/*--import Footer--*/}
      <Footer />
    </div>
  );
}
export default Layout;
