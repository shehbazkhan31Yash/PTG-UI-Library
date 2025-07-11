import React from 'react';

type FileActionButtonsProps = {
  downloadUrl: string;
  className?: string;
  style?: React.CSSProperties;
  buttonSize?: 'sm' | 'md' | 'lg';
};

const getViewUrl = (downloadUrl: string) => {
  const lowerUrl = downloadUrl.toLowerCase();
  if (lowerUrl.endsWith('.pdf')) {
    return downloadUrl;
  }
  if (
    lowerUrl.endsWith('.doc') ||
    lowerUrl.endsWith('.docx') ||
    lowerUrl.endsWith('.xls') ||
    lowerUrl.endsWith('.xlsx') ||
    lowerUrl.endsWith('.ppt') ||
    lowerUrl.endsWith('.pptx')
  ) {
    return `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(downloadUrl)}`;
  }
  // fallback: just download
  return downloadUrl;
};

const FileActionButtons: React.FC<FileActionButtonsProps> = ({
  downloadUrl,
  className = '',
  style = {},
  buttonSize = 'md',
}) => {
  let btnSizeClass = '';
  if (buttonSize === 'sm') {
    btnSizeClass = 'btn-sm';
  } else if (buttonSize === 'lg') {
    btnSizeClass = 'btn-lg';
  }
  return (
    <span className={`file-action-buttons ${className}`} style={style}>
      {/* View button */}
      <a
        href={getViewUrl(downloadUrl)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn-light me-1 ${btnSizeClass}`}
        style={{ fontSize: 13 }}
        onClick={e => e.stopPropagation()}
      >
        View
      </a>
      {/* Download button */}
      <a
        href={downloadUrl}
        download
        className={`btn btn-primary ${btnSizeClass}`}
        style={{ fontSize: 13 }}
        onClick={e => e.stopPropagation()}
      >
        Download
      </a>
    </span>
  );
};

export default FileActionButtons;