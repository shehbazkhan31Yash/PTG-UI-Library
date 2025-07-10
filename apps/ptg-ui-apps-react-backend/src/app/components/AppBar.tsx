import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AppBar.css';
import { tabs } from '@ptg-ui-apps-react-backend/constants/constants';
import logoImage from '../../assets/images/yash_log_real.svg';
import { FaSearch } from 'react-icons/fa'; // Importing a search icon from react-icons
type AppBarProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const AppBar: React.FC<AppBarProps>  = ({ searchText, setSearchText} ) => {
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to the home page if the current path is empty
    if (
      window.location.pathname === '/' ||
      window.location.pathname === '/ptg-ui-apps-react-backend/'
    ) {
      navigate('/home');
    }
  }, [navigate]);
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-0" >
      <div className="container-fluid d-flex align-items-center gap-4">
        <div className="navbar-brand">
          <img
            src={logoImage}
            width="92"
            height="auto"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="tabs d-flex flex-row flex-grow-1 ms-auto">
            {tabs.map((tab) => (
              <Link
                key={tab.to}
                to={tab.to}
                className="tab-button nav-link text-dark"
              >
                {tab.label}
              </Link>
            ))}
          </div>

          <div className="search-container d-flex align-items-center mx-auto">
            <input
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              id="searchInputDocument"
              type="text"
              placeholder="Search for a document"
              className="form-control w-200 m-4"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-secondary search-icon"
              type="button"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default AppBar;
