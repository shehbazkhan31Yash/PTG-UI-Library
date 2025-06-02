import React from 'react';
import { Link } from 'react-router-dom';
import './AppBar.css';
import { tabs } from '@ptg-ui-apps-react-backend/constants/constants';

const AppBar: React.FC = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark appbar-custom shadow">
      <div className="container-fluid d-flex align-items-center gap-4">
        <span className="navbar-brand logo">DevSquad</span>
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
              <Link key={tab.to} to={tab.to} className="tab-button nav-link">
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
