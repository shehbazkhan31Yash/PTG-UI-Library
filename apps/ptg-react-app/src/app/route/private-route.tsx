import { useAuth0 } from '@auth0/auth0-react';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const isAuthenticatedMSAL = authClass.getToken();
  const { isAuthenticated } = useAuth0();
  return isAuthenticated || isAuthenticatedMSAL ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export default PrivateRoute;
