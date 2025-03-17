/**
 * @since March 2022
 * @author Sunil Bhawsar
 * @desc User profile component
 *
 */
import { authClass } from 'apps/ptg-react-animations/src/app/auth/services/auth.service';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './UserProfile.scss';
import './UserProfile.scss';

export default function UserProfile() {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  interface LoggedInUser {
    username?: any;
    shortname?: any;
  }
  const [userData, setUserData] = useState<LoggedInUser>({});
  const navigate = useNavigate();

  const handleLogout = () => {
    authClass.removeToken();
    sessionStorage.clear();
    navigate('/login');
  };

  {
    /*--Start set logged in user data--*/
  }
  const getUserData = JSON.parse(authClass.getToken());
  // if (getUserData === null) {
  //   handleLogout();
  // } else {
  //   useEffect(() => {
  //     getUserData.user.shortname = getUserData.user.username
  //       ?.match(/\b(\w)/g)
  //       ?.join('');
  //     setUserData(getUserData.user);
  //   }, []);
  // }
  useEffect(() => {
    if (getUserData === null) {
      handleLogout();
    } else {
      getUserData.user.shortname = getUserData.user.username
        ?.match(/\b(\w)/g)
        ?.join('');
      setUserData(getUserData.user);
    }

    return () => {
      setUserData({});
    };
  }, []);

  {
    /*--End set logged in user data--*/
  }

  return (
    <div className="user-wrapper mt-1">
      {/*--Display user short name--*/}
      <span
        className="profile-icon text-white"
        onClick={() => setToggle(!toggle)}
        data-testid="profileIcon"
      >
        {userData.shortname}
      </span>
      {toggle && (
        <div className="user-container">
          <div className="triangle-up"></div>
          <div className="list-group">
            {/*--Display user username--*/}
            <a className="list-group-item list-group-item-action bg-info text-white border-top-0">
              {userData.username}
            </a>
            {/* <a className="list-group-item list-group-item-action">
              {/* <Reset /> */}
            {/* </a> */}
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
// function id(id: any): any {
//   throw new Error('Function not implemented.');
// }
