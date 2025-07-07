import React from 'react';
import './CardComponent.css';
import { CardComponentProps } from '@ptg-ui-apps-react-backend/interfaces';
import { Link } from 'react-router-dom';

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
  return (
    <div className="col-md-4" key={keyName}>
      <button
        type="button"
        className="card text-dark mb-4"
        style={{
          border: '2px solid #eee',
          transition: 'transform 0.3s, background-color 0.3s',
          cursor: onClick ? 'pointer' : 'default',
          background: 'none',
          width: '100%',
          textAlign: 'left',
          padding: 0,
        }}
        onClick={onClick}
      >
        <div
          className="text-center py-3"
          style={{ backgroundColor: '#f6f6f6' }}
        >
          {imageUrl === '' && setIcon === true ? (
            <i
              className={'border-bottom bi-folder-fill'}
              style={{
                fontSize: '6.5rem',
                color: '#ffcf01',
              }}
            ></i>
          ) : imageUrl === '' ? (
            <i
              className={`border-bottom bi ${getFileIcon(content)}`}
              style={{
                fontSize: '6.5rem',
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
        <div className="card-body pt-0 " style={{ backgroundColor: '#f6f6f6' }}>
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
            ))}
          {/* Show Download button if downloadLink is present */}
          {downloadLink && (
            <>
              {/* View in browser for PDF */}
              {downloadLink.toLowerCase().endsWith('.pdf') && (
                <a
                  href={downloadLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light ms-2"
                  style={{ marginRight: '8px' }}
                >
                  View PDF
                </a>
              )}
              {/* View in browser for Office files */}
              {(downloadLink.toLowerCase().endsWith('.doc') ||
                downloadLink.toLowerCase().endsWith('.docx') ||
                downloadLink.toLowerCase().endsWith('.xls') ||
                downloadLink.toLowerCase().endsWith('.xlsx') ||
                downloadLink.toLowerCase().endsWith('.ppt') ||
                downloadLink.toLowerCase().endsWith('.pptx')) && (
                <a
                  href={`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
                    downloadLink
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light ms-2"
                  style={{ marginRight: '8px' }}
                >
                  View Online
                </a>
              )}
              {/* Download button */}
              <a
                href={downloadLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                download
              >
                Download
              </a>
            </>
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
      </button>
    </div>
  );
};

export default CardComponent;
