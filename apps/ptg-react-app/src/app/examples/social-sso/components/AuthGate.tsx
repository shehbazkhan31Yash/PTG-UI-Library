import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';
import OtherComponent from './OtherComponent';
import SocialSignupForm from './SocialSignupForm';
import { useAuth } from '../auth/AuthContext';
import './AuthGate.css';

const AuthGate = () => {
  const { isAuthenticated, pendingSocialUser } = useAuth();

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="auth-heading">
          <h2>Welcome to the Portal</h2>
          <p className="auth-subtext">
            Please sign in to continue or use one of the social login options
            below.
          </p>
        </div>

        {!isAuthenticated && !pendingSocialUser && (
          <div className="social-buttons">
            <GoogleLoginButton />
            <FacebookLoginButton />
          </div>
        )}

        {pendingSocialUser && <SocialSignupForm />}
        {isAuthenticated && <OtherComponent />}
      </div>
    </div>
  );
};

export default AuthGate;
