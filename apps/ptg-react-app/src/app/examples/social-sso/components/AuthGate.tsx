import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';
import OtherComponent from './OtherComponent';
import SocialSignupForm from './SocialSignupForm';
import { useAuth } from '../auth/AuthContext';
import './AuthGate.css';
import { useTranslation } from 'react-i18next';

const AuthGate = () => {
  const { isAuthenticated, pendingSocialUser } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="auth-heading">
          <h2> {t('WELCOME-TO-THE-PORTAL')}</h2>
          <p className="auth-subtext">
            {t('PLEASE-SIGN-IN-TO-CONTINUE-OR-USE-ONE-OF-THE-SOCIAL-LOGIN-OPTIONS-BELOW')}
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
