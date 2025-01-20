import { authClass } from '@ptg-react-app/auth/services/auth.service';
import { Navigate, useLocation } from 'react-router-dom';
// import { authClass } from '@ptg-react-app/auth/services/auth.service';
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const isAuthenticated = authClass.getToken();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export default PrivateRoute;
