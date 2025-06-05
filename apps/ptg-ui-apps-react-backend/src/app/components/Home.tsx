import React from 'react';
import { Carousel, Col, Row, Image } from 'react-bootstrap';
import { CarouselImageContainer } from './CarouselImageContainer';
import visionImage from '../../assets/images/yash_vision.jpg';
import { carouselItems } from '@ptg-ui-apps-react-backend/constants/constants';
import missionImage from '../../assets/images/yash_mission.jpg';
const Home: React.FC = () => {
  return (
    <section id="about" className="text-center text-light mt-5">
      <Row className="p-4 vision">
        <Col xs={12} md={6}>
          <Image src={visionImage} fluid className="shadow" alt="Vision" />
        </Col>
        <Col xs={12} md={6}>
          <h2 className="pt-3 pb-2">Vision</h2>
          <p className="about-text">
            To create intuitive, accessible, and engaging user experiences that
            empower users and elevate the digital landscape.
          </p>
        </Col>
      </Row>

      <Row className="p-4 mission">
        <Col xs={12} md={6} className="mission">
          <h2 className="pt-3 pb-2">Mission</h2>
          <p className="about-text">
            Our mission is to design and develop high-quality, responsive, and
            user-centric web applications. We strive to leverage the latest
            technologies and best practices in frontend development to deliver
            seamless interactions, foster collaboration, and continuously
            improve our products based on user feedback and evolving industry
            standards.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Image src={missionImage} fluid className="shadow" alt="Mission" />
        </Col>
      </Row>

      <h1 className="section-title mb-4">Our Clients</h1>
      <Carousel controls indicators>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index} interval={1000}>
            <CarouselImageContainer imageUrl={item.imageURL ?? ''} />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
export default Home;
