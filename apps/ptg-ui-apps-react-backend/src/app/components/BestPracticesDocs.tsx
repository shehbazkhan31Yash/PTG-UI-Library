import React, { useEffect } from 'react';
import CardComponent from './CardComponent';
import { fetchDataFromStrapi } from '@ptg-ui-apps-react-backend/utils/DocumentService';
import folder_image from '../../assets/images/Folder.jpg';

const BestPracticesDocs: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);
  useEffect(() => {
    fetchDataFromStrapi('best-practice-documents').then((data) =>
      setData(data.data)
    );
  }, []);
  return (
    <section id="projects" className="mt-5">
      <div className="row">
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
