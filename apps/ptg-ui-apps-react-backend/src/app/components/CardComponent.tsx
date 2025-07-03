import React from 'react';
import './CardComponent.css';
import { CardComponentProps } from '@ptg-ui-apps-react-backend/interfaces';
import { Link } from 'react-router-dom';

const CardComponent: React.FC<CardComponentProps & { isFolder?: boolean; onClick?: () => void }> = ({
  keyName,
  title,
  content,
  imageUrl,
  viewLink,
  docLink,
  downloadLink,
  isFolder = false,
  onClick,
}) => {
  const isInternalLink = viewLink?.startsWith('/best_practices_docs');
  const getFileIcon = (title: any) => {
    const fileExtension = title.slice((title.lastIndexOf('.') >>> 0) + 1);
    switch (fileExtension) {
      case 'pptx':
        return 'bi-file-earmark-ppt-fill';
      case 'pdf':
        return 'bi-file-earmark-pdf-fill';
      case 'docx':
        return 'bi-file-earmark-word-fill';
      case 'xlsx':
        return 'bi-file-earmark-excel-fill';
      case 'txt':
        return 'bi-file-earmark-text-fill';
      default:
        return 'bi-file-earmark-pdf-fill';
    }
  };
  return (
    <div className="col-md-4" key={keyName}>
      <div
        className="card text-dark mb-4"
        style={{
          border: '2px solid black',
          transition: 'transform 0.3s, background-color 0.3s',
          cursor: onClick ? 'pointer' : 'default',
        }}
        onClick={onClick}
      >
        <div className="text-center py-3">
          {imageUrl === '' ? (
            <i
              className={`bi ${getFileIcon(title)}`}
              style={{
                fontSize: '4.5rem',
                color: '#a1a103',
              }}
            ></i>
          ) : (
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
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          {/* Show View button only if not a folder and no downloadLink */}
          {!isFolder && !downloadLink && viewLink && (
            isInternalLink ? (
              <Link to={viewLink!} className="btn btn-primary">
                View
              </Link>
            ) : (
              <a
                href={viewLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View
              </a>
            )
          )}
          {/* Show Download button if downloadLink is present */}
          {downloadLink && (
            <a
              href={downloadLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light ms-2"
              download
            >
              Download
            </a>
          )}
          {/* Show Documentation button if docLink is present */}
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