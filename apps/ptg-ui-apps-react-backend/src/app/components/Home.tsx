import React, { useState } from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import { carouselItems } from '@ptg-ui-apps-react-backend/constants/constants';
import ClientCarousel from './CarouselImageContainer';
import { environment } from '@ptg-ui-apps-react-backend/environments/environment';
import ImageWithLoader from './ImageWithLoader';

const Home: React.FC = () => {
  const [imageLoading, setImageLoading] = useState({
    vision: true,
    mission: true,
  });

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
