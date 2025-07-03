import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';
import folder_image from '../../assets/images/Folder.jpg';
import { fetchDataFromStrapi } from '@ptg-ui-apps-react-backend/utils/DocumentService';

type BestPracticesDocsProps = {
  searchText: string;
};

const BestPracticesDocs: React.FC<BestPracticesDocsProps> = ({searchText}) => {
  const [data, setData] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const folderTitles = React.useMemo(() => {
    const titles = data.map(item => item.attributes.folder_title?.trim()).filter(Boolean);
    return Array.from(new Set(titles));
  }, [data]);

  useEffect(() => {
    setIsLoading(true);
    fetchDataFromStrapi('best-practice-documents?populate=*').then((data) => {
      setData(data.data);
      setIsLoading(false);
    });
  }, []);

  const getFilteredFiles = (folder: string) => {
    return data
      .flatMap(item => item.attributes.file.data)
      .filter(
        (file: any) =>
          file && file.attributes.name.toLowerCase().includes(folder.toLowerCase())
      );
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
          <span
            style={{ color: "#007bff", cursor: selectedFolder ? "pointer" : "default" }}
            onClick={() => selectedFolder && setSelectedFolder(null)}
          >
            Home
          </span>
          {selectedFolder && (
            <>
              <span style={{ color: "#333" }}>{" / "}</span>
              <span style={{ color: "#333" }}>{selectedFolder}</span>
            </>
          )}
        </div>
        )}

        {/* Breadcrumb navigation */}
        {/* Folder grid as cards */}
        {!selectedFolder && folderTitles.map((item) => (
          <div
            key={item}
            className="col-md-4 d-flex justify-content-center"
            style={{ minHeight: 220 }}
            onClick={() => setSelectedFolder(item)}
            role="button"
            tabIndex={0}
          >
            <CardComponent
              keyName={item}
              title={item}
              content=""
              imageUrl={folder_image}
              viewLink=""
            />
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
                No documents found for {selectedFolder}.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestPracticesDocs;