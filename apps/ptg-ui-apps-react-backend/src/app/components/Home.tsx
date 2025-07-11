import React, { useState } from 'react';
import { Col, Row, Image, Container, Spinner } from 'react-bootstrap';
import { carouselItems } from '@ptg-ui-apps-react-backend/constants/constants';
import ClientCarousel from './CarouselImageContainer';
import { environment } from '@ptg-ui-apps-react-backend/environments/environment';

const Home: React.FC = () => {
  const [imageLoading, setImageLoading] = useState({
    vision: true,
    mission: true,
  });

  const handleImageLoad = (imageKey: 'vision' | 'mission') => {
    setImageLoading((prev) => ({
      ...prev,
      [imageKey]: false,
    }));
  };

  const handleImageError = (imageKey: 'vision' | 'mission') => {
    setImageLoading((prev) => ({
      ...prev,
      [imageKey]: false,
    }));
  };

  const ImageWithLoader: React.FC<{
    src: string;
    alt: string;
    imageKey: 'vision' | 'mission';
    className?: string;
    description: string;
  }> = ({ src, alt, imageKey, className = '', description }) => (
    <div
      className="position-relative card-hover-group"
      style={{ display: 'inline-block' }}
    >
      {/* {imageLoading[imageKey] && (
        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ zIndex: 2 }}
        >
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )} */}
      <Image
        src={src}
        fluid
        alt={alt}
        style={{ background: 'none' }}
        className={`${className}`}
        // onLoad={() => handleImageLoad(imageKey)}
        // onError={() => handleImageError(imageKey)}
        // style={{
        //   transition: 'opacity 0.3s ease-in-out',
        //   minHeight: '200px',
        // }}
      />
      <div
        className="position-absolute hoverContainer"
        style={{
          top: 10,
          left: 10,
          zIndex: 2,
          color: '#222',
          background: 'rgba(255,255,255,0)',
          padding: '1rem',
          maxWidth: '90%',
        }}
      >
        <h2 className="pt-3 pb-2 titleCard">{imageKey}</h2>
        <p className="lead about-text text-dark textCard">{description}</p>
      </div>
    </div>
  );

  return (
    <Container fluid className="text-dark p-5">
      <section id="about" className="text-center">
        <Row className="mb-5">
          <Col xs={12} md={6} className="mb-4">
            <ImageWithLoader
              src={
                process.env['NODE_ENV'] === 'production'
                  ? `${environment.url}/yash_vision.jpg`
                  : `${environment.localUrl}/assets/images/yash_vision.jpg`
              }
              alt="Vision"
              imageKey="vision"
              className="shadow "
              description={
                'To create intuitive, accessible, and engaging user experiences that empower users and elevate the digital landscape, it is essential to prioritize user-centered design principles. This involves understanding the diverse needs and preferences of users,ensuring that interfaces are not only visually appealing but also functional and easy to navigate.'
              }
            />
          </Col>
          <Col xs={12} md={6}>
            <ImageWithLoader
              src={
                process.env['NODE_ENV'] === 'production'
                  ? `${environment.url}/yash_mission.jpg`
                  : `${environment.localUrl}/assets/images/yash_mission.jpg`
              }
              alt="Mission"
              imageKey="mission"
              className="shadow"
              description={
                'Our mission is to design and develop high-quality, responsive, and user-centric web applications. We strive to leverage the latest technologies and best practices in frontend development to deliver seamless interactions, foster collaboration, and continuously improve our products based on user feedback and evolving industry standards.'
              }
            />
          </Col>
        </Row>

        <h1 className="section-title mb-4">Our Clients</h1>
        <ClientCarousel items={carouselItems} />
      </section>
    </Container>
  );
};

export default Home;
