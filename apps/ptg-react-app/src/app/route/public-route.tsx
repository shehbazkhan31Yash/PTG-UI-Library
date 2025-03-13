import { Navigate } from 'react-router-dom';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
import { useAuth0 } from '@auth0/auth0-react';

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth0();
  const auth = authClass.getToken();
  return isAuthenticated || auth ? <Navigate to="/" /> : children;
};

export default PublicRoute;
