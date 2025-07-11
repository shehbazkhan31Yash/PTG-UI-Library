import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AppBar.css';
import { tabs } from '@ptg-ui-apps-react-backend/constants/constants';
import logoImage from '../../assets/images/yash_log_real.svg';
import { FaSearch } from 'react-icons/fa'; // Importing a search icon from react-icons
import FileActionButtons from './FileActionButtons';

type AppBarProps = {
  searchText: string;
  setSearchText: (text: string) => void;
  filteredFiles: {
    docId: number;
    folderTitle: string;
    file: any;
  }[];
};

const MAX_FILE_NAME_LENGTH = 30;

const getDisplayName = (name: string) => {
  if (name.length > MAX_FILE_NAME_LENGTH) {
    return name.slice(0, MAX_FILE_NAME_LENGTH) + '...';
  }
  return name;
};

const AppBar: React.FC<AppBarProps> = ({
  searchText,
  setSearchText,
  filteredFiles,
}) => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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

          <div
            className="search-container d-flex align-items-center mx-auto position-relative"
            style={{ width: 320 }}
          >
            <input
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              id="searchInputDocument"
              type="text"
              placeholder="Search for a document"
              className="form-control w-200 m-1"
              aria-label="Search"
              autoComplete="off"
              style={{ minWidth: 220, maxWidth: 320 }}
            />
            <button
              className="btn btn-outline-secondary search-icon"
              type="button"
            >
              <FaSearch />
            </button>
            {/* Dropdown list */}
            {searchText && filteredFiles.length > 0 && (
              <div
                className="search-dropdown-list"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 4px)',
                  left: 0,
                  right: 0,
                  zIndex: 1050,
                  background: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  maxHeight: 300,
                  overflowY: 'auto',
                  padding: 0,
                }}
              >
                {filteredFiles.map(item => (
                    <button
                      key={item.file.id}
                      type="button"
                      className="search-dropdown-item"
                      onMouseEnter={() => setHoveredId(item.file.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      title={item.file.attributes.name}
                      style={{
                        fontSize: 16,
                        padding: '8px 18px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'relative',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ maxWidth: 220, display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', color: '#333' }}>
                        {getDisplayName(item.file.attributes.name)}
                      </span>
                      {hoveredId === item.file.id && (
                        <FileActionButtons downloadUrl={item.file.attributes.url} buttonSize="sm" />
                      )}
                    </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default AppBar;
