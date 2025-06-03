import FacebookLogin from 'react-facebook-login';
import { useFacebookAuth } from '../auth/useFacebookAuth';
import './FacebookLoginButton.css';

const FacebookLoginButton = () => {
  const { handleResponse } = useFacebookAuth();

  return (
    <div className="facebook-login-wrapper">
      <FacebookLogin
        appId="1260930645668639"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleResponse}
        cssClass="facebook-button"
        icon="fa-facebook"
        textButton="&nbsp;&nbsp;Continue with Facebook"
      />
    </div>
  );
};

export default FacebookLoginButton;
