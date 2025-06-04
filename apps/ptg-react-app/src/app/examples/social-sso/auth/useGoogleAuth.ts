import { jwtDecode } from 'jwt-decode';
import { useAuth } from './AuthContext';
import { GoogleJwtPayload } from '../interface';

export function useGoogleAuth() {
  const { loginWithSocial } = useAuth();

  const handleSuccess = (res: { credential: string }) => {
    const decoded = jwtDecode<GoogleJwtPayload>(res.credential);
    loginWithSocial({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    });
  };

  const handleError = () => {
    console.error('Google Login Failed');
  };

  return { handleSuccess, handleError };
}
