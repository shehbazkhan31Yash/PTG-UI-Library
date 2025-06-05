/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * @since March 2022
 * @author Anmol mathur
 * @Updatedby Ahilyabai Netaji Pawar
 * @Updatedby Harsha Zalawa
 * @desc Header Component
 *
 */

import './header.scss';
import UserProfile from '../userprofile/UserProfile';
import MultiLang from '../multi-lang/multi-lang';
export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark custom-bg-dark-blue">
        <div className="d-flex justify-content-between w-100 align-items-center mx-1">
          <label htmlFor="toggle" className="fa fa-bars" aria-hidden="true">
            <i className="hiddenContent">.</i>
          </label>
          <a className="navbar-brand logo px-2 me-auto" href="#">
            <img
              src="assets/images/yash-logo-new@2x.png"
              aria-label="logo"
              className="header-logo"
            />
          </a>
          <div className="d-flex mt-1">
            <MultiLang />
            <UserProfile />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
