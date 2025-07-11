import React from 'react';
import './CardComponent.css';
import { CardComponentProps } from '@ptg-ui-apps-react-backend/interfaces';
import { Link } from 'react-router-dom';
import FileActionButtons from './FileActionButtons';

const CardComponent: React.FC<
  CardComponentProps & { isFolder?: boolean; onClick?: () => void }
> = ({
  keyName,
  title,
  content,
  imageUrl,
  viewLink,
  docLink,
  downloadLink,
  isFolder = false,
  onClick,
  setIcon,
}) => {
  const isInternalLink = viewLink?.startsWith('/best_practices_docs');
  const getFileIcon = (content: any) => {
    const fileExtension = content.slice((content.lastIndexOf('.') >>> 0) + 1);
    switch (fileExtension) {
      case 'pptx':
        return 'bi-file-earmark-ppt';
      case 'pdf':
        return 'bi-file-earmark-pdf';
      case 'docx':
        return 'bi-file-earmark-word';
      case 'xlsx':
        return 'bi-file-earmark-excel';
      case 'txt':
        return 'bi-file-earmark-text';
      default:
        return 'bi-file-earmark-pdf';
    }
  };
  const renderCardImage = () => {
    if (imageUrl === '' && setIcon === true) {
      return (
        <i
          className={'border-bottom bi-folder-fill'}
          style={{
            fontSize: '6.5rem',
            color: '#ffcf01',
          }}
        ></i>
      );
    } else if (imageUrl === '') {
      return (
        <i
          className={`border-bottom bi ${getFileIcon(content)}`}
          style={{
            fontSize: '6.5rem',
          }}
        ></i>
      );
    } else {
      return (
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
      );
    }
  };

  return (
    <div className="col-md-4" key={keyName}>
      <button
        type="button"
        className="card text-dark mb-4"
        style={{
          border: 'none',
          transition: 'transform 0.3s, background-color 0.3s',
          cursor: onClick ? 'pointer' : 'default',
          background:'none',
          width: '100%',
          textAlign: 'left',
          padding: 0,
          borderRadius: '15px',        
		      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'


          
        }}
        onClick={onClick}
      >
        <div
          className="text-center py-3"
          style={{ background: 'none', borderRadius: '15px'}}
        >
          {renderCardImage()}
        </div>
        <div className="card-body pt-0 " style={{ background: 'none', borderRadius: '15px'}}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ marginLeft: '10px' }}>
            {content}
          </p>
          {/* Show View button only if not a folder and no downloadLink */}
          {!isFolder &&
            !downloadLink &&
            viewLink &&
            (isInternalLink ? (
              <Link to={viewLink!} className="btn btn-primary">
                <i className="bi bi-eye me-2"></i>
                View
              </Link>
            ) : (
              <a
                href={viewLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary "
              >
                <i className="bi bi-eye me-2"></i>
                View
                
              </a>
            ))}
          {/* Show Download button if downloadLink is present */}
          {downloadLink && (
            <FileActionButtons downloadUrl={downloadLink} buttonSize="md" />
          )}
          {/* Show Documentation button if docLink is present */}
          {docLink && (
            <a
              href={docLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light ms-2"
              style={{ border: '1px solid #0d6efd', color: '#0d6efd', background: 'none' }}
            >
              <i className="bi bi-file-earmark-text me-2"></i>
              Documentation
              
            </a>
          )}
        </div>
        <i className="fa-solid fa-arrow-rotate-right"></i>
      </button>
    </div>
  );
};

export default CardComponent;
