/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc Routing for reusable components
 *
 */
import { PtgUiLogin } from '../app/auth/login/Login';
import { PtgUiSignup } from '../app/auth/signup/signup';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './route/private-route';
import PublicRoute from './route/public-route';
import Layout from '../app/common/layout/Layout';
import PtgUiResetPassword from './auth/resetpassword/ResetPassword';
export function App() {
  return (
    <div>
      {/*-----Public routes-----*/}
      <Routes>
        <Route
          path="/ptg-react-app/login"
          element={
            <PublicRoute>
              <PtgUiLogin />
            </PublicRoute>
          }
        />
        <Route path="/ptg-react-app/signup" element={<PtgUiSignup />} />
        <Route
          path="/ptg-react-app/reset-password"
          element={<PtgUiResetPassword />}
        />
        {/*-----Layout in private routes-----*/}
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
