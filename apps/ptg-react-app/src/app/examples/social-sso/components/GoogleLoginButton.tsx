import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../auth/AuthContext';
import './GoogleLoginButton.css';

interface DecodedGoogleToken {
  name: string;
  email: string;
  picture?: string;
  [key: string]: any;
}

const GoogleLoginButton = () => {
  const { loginWithSocial } = useAuth();

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) return;
    const decoded = jwtDecode<DecodedGoogleToken>(
      credentialResponse.credential
    );
    loginWithSocial({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      provider: 'google',
    });
  };

  return (
    <div className="google-login-wrapper">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.error('Google login failed')}
        theme="filled_black"
        size="large"
        width="100%"
      />
    </div>
  );
};

export default GoogleLoginButton;
