import React from 'react';
import './CardComponent.css';
import { CardComponentProps } from '@ptg-ui-apps-react-backend/interfaces';
import { Link } from 'react-router-dom';

const CardComponent: React.FC<CardComponentProps> = ({
  key,
  title ,
  content,
  imageUrl,
  viewLink,
  docLink,
}) => {
   const isInternalLink = viewLink?.startsWith('/bestPracticesDocs');
  return (
    <div className="col-md-4">
      <div
        className="card text-dark mb-4"
        style={{
          // Remove background here to allow CSS hover to work
          border: '2px solid black',
          transition: 'transform 0.3s, background-color 0.3s',
          cursor: 'pointer',
        }}
      >
        <div className="text-center py-3">
          <img
            src={imageUrl}
            className="card-img-top"
            alt={title}
            style={{
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
              height: '160px',
              width: '200px',
            }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          
            {isInternalLink ? (
            <Link
              to={viewLink!}
              className="btn btn-warning"
            >
              View
            </Link>
          ) : (
            <a
              href={viewLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning"
            >
              View
            </a>
          )}
          {docLink && (
            <a
              href={docLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light ms-2"
            >
              Documentation
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
