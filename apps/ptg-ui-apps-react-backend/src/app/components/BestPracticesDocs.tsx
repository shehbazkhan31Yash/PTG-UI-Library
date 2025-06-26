import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';
import folder_image from '../../assets/images/Folder.jpg';
import { fetchDataFromStrapi } from '@ptg-ui-apps-react-backend/utils/DocumentService';

const BestPracticesDocs: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    fetchDataFromStrapi('best-practice-documents?populate=*').then((data) => {
      setData(data.data);
      setIsLoading(false);
    });
  }, []);

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
        {data.map((item, index) => (
          <React.Fragment
            key={item.attributes.file.data[0]?.attributes.name + '' + index}
          >
            {item.attributes.file && item.attributes.file.data?.length > 0 && (
              <CardComponent
                keyName={
                  item.attributes.file.data[0]?.attributes.name + '' + index
                }
                title={item.attributes.file.data[0]?.attributes.name}
                content={''}
                imageUrl={folder_image}
                viewLink={''}
                docLink={''}
                downloadLink={item.attributes.file.data[0]?.attributes.url}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default BestPracticesDocs;
