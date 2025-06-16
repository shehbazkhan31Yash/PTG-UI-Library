import React from 'react';
import './BestPracticesDocs.css';
import { Link } from 'react-router-dom';

 
const BestPracticesDocs = () => {
 
  return (
    <div className="container pb-5">
      <h1 className="page-header">Best Practices Documents</h1>
      <div className="row pb-5">
         <div className="col-md-4">
          <div className="card">
            <div className="card-body" style={{ minHeight: '120px' }}>
              <h5 className="card-title">Coding Standard Angular</h5>
              <p className="card-text">
                This document explains coding standards of Angular.
              </p>
            </div>
            <div className="card-footer">
              <a
                className="btn btn-primary"
                href={'https://yash-ui-apps.azurewebsites.net/uploads/CodingStandard-Angular.docx'}
                download="CodingStandard-Angular.docx"
              >
                Download
              </a>
            </div>
          </div>
        </div>

         <div className="col-md-4">
          <div className="card">
            <div className="card-body" style={{ minHeight: '120px' }}>
              <h5 className="card-title">Best Practices Frontend</h5>
              <p className="card-text">
                This document explains coding standards of React.
              </p>
            </div>
            <div className="card-footer">
              <a
                content-disposition="attach"
                className="btn btn-primary"
                href={'https://yash-ui-apps.azurewebsites.net/uploads/CodingStandard-React.docx'}
                >Download</a
              >
            </div>
          </div>
        </div>


        <div className="col-md-4">
          <div className="card">
            <div className="card-body" style={{ minHeight: '120px' }}>
              <h5 className="card-title">Best Practices Frontend</h5>
              <p className="card-text">
                This document explains best practices of Frontend.
              </p>
            </div>
            <div className="card-footer">
              <a
                content-disposition="attach"
                className="btn btn-primary"
                href={'https://yash-ui-apps.azurewebsites.net/uploads/BestPractices-FrontEnd.pptx'}
                >Download</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPracticesDocs;
