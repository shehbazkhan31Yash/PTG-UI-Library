import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';
import { fetchDataFromStrapi } from '@ptg-ui-apps-react-backend/utils/DocumentService';

type BestPracticesDocsProps = {
  searchText: string;
  data: any[];
  isLoading: boolean;
};

const BestPracticesDocs: React.FC<BestPracticesDocsProps> = ({
  searchText,
  data,
  isLoading,
}) => {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const folderTitles = React.useMemo(() => {
    const titles = data
      .map((item) => item.attributes.folder_title?.trim())
      .filter(Boolean);
    return Array.from(new Set(titles));
  }, [data]);

  const getFilteredFiles = (folder: string) => {
    const folderItem = data.find(
      (item) =>
        item.attributes.folder_title?.trim().toLowerCase() ===
        folder.trim().toLowerCase()
    );
    return folderItem?.attributes.file?.data ?? [];
  };

  return (
    <section id="projects" className="mt-5">
      <div className="row">
        {isLoading && (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            please wait it's Loading...
          </button>
        )}
        {!isLoading && (
          <div className="mb-3" style={{ fontSize: 18 }}>
            <button
              type="button"
              className="breadcrumb-home"
              style={{
                color: '#007bff',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: selectedFolder ? 'pointer' : 'default',
                fontSize: 18,
              }}
              disabled={!selectedFolder}
              onClick={() => selectedFolder && setSelectedFolder(null)}
            >
              Home
            </button>
            {selectedFolder && (
              <>
                <span style={{ color: '#333' }}>{' / '}</span>
                <span style={{ color: '#333' }}>{selectedFolder}</span>
              </>
            )}
          </div>
        )}

        {/* Breadcrumb navigation */}
        {/* Folder grid as cards */}
        {!selectedFolder &&
          folderTitles.map((item) => (
            <div
              key={item}
              className="col-md-4 d-flex justify-content-center"
              style={{ minHeight: 220 }}
            >
              <button
                type="button"
                onClick={() => setSelectedFolder(item)}
                className="w-100 h-100 p-0 border-0 bg-transparent"
                style={{ textAlign: 'left', minHeight: 220, cursor: 'pointer' }}
              >
                <CardComponent
                  keyName={item}
                  title={item}
                  content=""
                  imageUrl={''}
                  setIcon={true}
                  viewLink=""
                />
              </button>
            </div>
          ))}

        {/* File cards for selected folder */}
        {selectedFolder && (
          <div className="row">
            {getFilteredFiles(selectedFolder).map((file: any) => (
              <CardComponent
                key={file.id}
                keyName={file.id}
                title=""
                content={file.attributes.name} // You can add description if available
                imageUrl="" // No image for files, will auto-use icon
                downloadLink={file.attributes.url}
                viewLink=""
              />
            ))}
            {getFilteredFiles(selectedFolder).length === 0 && (
              <div className="col-12 text-center mt-4 text-muted">
                No documents found for <strong>{selectedFolder}</strong>.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestPracticesDocs;
