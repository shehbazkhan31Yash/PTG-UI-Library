import { technologiesItems } from '@ptg-ui-apps-react-backend/constants/constants';
import React from 'react';
import Image from 'react-bootstrap/Image';

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="text-center text-light mt-5">
      <div>
        <div className="row">
          {technologiesItems.map((item) => (
            <div className="col-md-2" key={item.id}>
              <div
                className="card text-white mb-4 "
                style={{
                  transition: 'transform 0.3s, background-color 0.3s',
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  height: '170px',
                  width: '170px',
                  padding: '10px',
                  border: '2px solid black',
                }}
              >
                <Image
                  src={item.imageUrl}
                  className="card-img-top"
                  alt={item.title}
                  roundedCircle
                  style={{
                    height: '150px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
