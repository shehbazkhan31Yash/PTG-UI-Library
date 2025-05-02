/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc User profile component
 *
 */
import { authClass } from '../../auth/services/auth.service';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './UserProfile.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { environment } from '../../../environments/environment';

export default function UserProfile() {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const { logout, user, isAuthenticated } = useAuth0();
  interface LoggedInUser {
    username?: string;
    shortname?: string;
  }
  const [userData, setUserData] = useState<LoggedInUser>({});
  const navigate = useNavigate();

  const handleLogout = () => {
    authClass.removeToken();
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: environment.okta_logout_url } });
    }
    sessionStorage.clear();
    navigate('/login');
  };

  /*--Start set logged in user data--*/

  const getUserData = JSON.parse(authClass.getToken());

  useEffect(() => {
    if (getUserData === null && user === null) {
      handleLogout();
    } else {
      if (getUserData?.user) {
        getUserData.user.shortname = getUserData?.user?.username
          ?.match(/\b(\w)/g)
          ?.join('');
        setUserData(getUserData.user);
      }
      if (user) {
        setUserData({ username: user?.nickname, shortname: user?.name });
      }
    }
  }, []);

  {
    /*--End set logged in user data--*/
  }

  return (
    <div className="user-wrapper mt-1">
      {/*--Display user short name--*/}
      <span
        className="profile-icon"
        onClick={() => setToggle(!toggle)}
        data-testid="profileIcon"
      >
        <AccountCircleIcon fontSize="large" />
        {/* note: comment for username */}
        {/* {userData.shortname} */}
      </span>
      {toggle && (
        <div className="user-container">
          <div className="triangle-up"></div>
          <div className="list-group">
            {/*--Display user username--*/}
            <a className="list-group-item list-group-item-action bg-info text-white border-top-0">
              {userData.username}
            </a>
            <a
              className="list-group-item list-group-item-action"
              onClick={handleLogout}
              data-testid="logout"
            >
              {t('LOGOUT')}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
