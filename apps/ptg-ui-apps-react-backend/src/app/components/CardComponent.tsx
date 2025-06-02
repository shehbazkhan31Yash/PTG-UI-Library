import React from 'react';
import './CardComponent.css';
import { CardComponentProps } from '@ptg-ui-apps-react-backend/interfaces';

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  content,
  imageUrl,
  viewLink,
  docLink,
}) => {
  return (
    <div className="col-md-4">
      <div
        className="card text-white mb-4"
        style={{
          // Remove background here to allow CSS hover to work
          borderRadius: '15px',
          transition: 'transform 0.3s, background-color 0.3s',
          cursor: 'pointer',
        }}
      >
        <img
          src={imageUrl}
          className="card-img-top"
          alt={title}
          style={{
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            height: '160px',
            objectFit: 'cover',
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a
            href={viewLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-warning"
          >
            View
          </a>
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
