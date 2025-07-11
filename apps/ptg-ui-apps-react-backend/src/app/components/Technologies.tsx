import { technologiesItems } from '@ptg-ui-apps-react-backend/constants/constants';
import React from 'react';
import Image from 'react-bootstrap/Image';

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="text-center text-light ">
      <div className="container">
        <h2 className="pb-3 mb-0 text-dark" >
          Technologies We Use
        </h2>
        <p className="lead mb-5 text-dark" style={{  fontSize: '16px', fontWeight:400 }}>
          Our reusable design system is powered by a modern and scalable tech stack that ensures consistency, performance, and ease of use across applications. These technologies enable developers to build faster with ready-to-use components, maintain visual and functional uniformity, and accelerate delivery without compromising on quality.
        </p>
      </div>
      <div>
        <div className="row">
          {technologiesItems.map((item) => (
            <div className="col-md-2" key={item.id}>
              <div
                className="card text-white mb-4 "
                style={{
                  transition: 'transform 0.3s, background-color 0.3s',
                  cursor: 'pointer',
                  backgroundColor: 'var(--color-white)',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  height: '120px',
                  width: '120px',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '10px',
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
