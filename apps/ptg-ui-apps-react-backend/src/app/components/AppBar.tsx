import React from 'react';
import { Link } from 'react-router-dom';
import './AppBar.css';
import { tabs } from '@ptg-ui-apps-react-backend/constants/constants';
import { Badge, Button, Form } from 'react-bootstrap';

import logoImage from '../../assets/images/yash_log_real.svg';

const AppBar: React.FC = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark">
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
              <Link key={tab.to} to={tab.to} className="tab-button nav-link">
                {tab.label}
              </Link>
            ))}
          </div>
          <Badge
            bg="warning"
            text="dark"
            className="rounded-circle justify-content-center align-items-center avatorClass"
          >
            <div className="px-2">
              <span className="avatorText">{'SBK'}</span>
            </div>
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
