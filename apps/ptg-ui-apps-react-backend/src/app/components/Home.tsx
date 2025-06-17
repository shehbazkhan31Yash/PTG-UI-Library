import React, { useEffect } from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import { carouselItems } from '@ptg-ui-apps-react-backend/constants/constants';
import ClientCarousel from './CarouselImageContainer'; // Import the new carousel component
import { environment } from '@ptg-ui-apps-react-backend/environments/environment';
const Home: React.FC = () => {
  return (
    <Container fluid className="bg-dark text-light p-5">
      <section id="about" className="text-center">
        <Row className="mb-5">
          <Col xs={12} md={6} className="mb-4">
            <Image
              src={
                process.env['NODE_ENV'] === 'production'
                  ? `${environment.url}/yash_vision.jpg`
                  : `${environment.localUrl}/assets/images/yash_vision.jpg`
              }
              fluid
              alt="Vision"
            />
          </Col>
          <Col xs={12} md={6}>
            <h2 className="pt-3 pb-2">Vision</h2>
            <p className="lead about-text">
              To create intuitive, accessible, and engaging user experiences
              that empower users and elevate the digital landscape.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={12} md={6} className="mb-4">
            <h2 className="pt-3 pb-2">Mission</h2>
            <p className="lead about-text">
              Our mission is to design and develop high-quality, responsive, and
              user-centric web applications. We strive to leverage the latest
              technologies and best practices in frontend development to deliver
              seamless interactions, foster collaboration, and continuously
              improve our products based on user feedback and evolving industry
              standards.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Image
              src={
                process.env['NODE_ENV'] === 'production'
                  ? `${environment.url}/yash_mission.jpg`
                  : `${environment.localUrl}/assets/images/yash_mission.jpg`
              }
              fluid
              className="shadow rounded"
              alt="Mission"
            />
          </Col>
        </Row>
        <h1 className="section-title mb-4">Our Clients</h1>
        <ClientCarousel items={carouselItems} />{' '}
        {/* Use the new carousel component */}
      </section>
    </Container>
  );
};
export default Home;
