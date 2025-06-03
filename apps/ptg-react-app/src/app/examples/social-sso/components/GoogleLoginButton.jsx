import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../auth/AuthContext';
import './GoogleLoginButton.css';

const GoogleLoginButton = () => {
  const { loginWithSocial } = useAuth();

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
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
        width="100%" // For consistent width
      />
    </div>
  );
};

export default GoogleLoginButton;
