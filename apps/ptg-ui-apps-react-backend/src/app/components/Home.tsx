import React from 'react';
import { Carousel, Col, Row, Image } from 'react-bootstrap';
import { CarouselImageContainer } from './CarouselImageContainer';
import visionImage from '../../assets/images/yash_vision.jpg';
import { carouselItems } from '@ptg-ui-apps-react-backend/constants/constants';
import missionImage from '../../assets/images/yash_mission.jpg';

const Home: React.FC = () => {
  return (
    <section id="about" className="text-center text-light mt-5">
      <Row className="visionandmission mb-3">
        <Col xs={5} md={5}>
          <h2 className="section-title">Vision and Mission</h2>
          <p>
            At Yash, we are driven by this vision to deliver top-tier products
            and services to the global power industry, proudly bearing the label
            "Made in India for the World.”
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={6} md={6} className="visionmissioncard">
          <h2 className="pt-3 pb-2">Vision</h2>
          <p className="about-text">
            Inspired by the Honourable Prime Minister’s vision for an
            Atmanirbhar Bharat (Self-Sufficient India), YASH is pioneering
            technological advancements to bolster the resilience and longevity
            of power infrastructure, thereby contributing to our nation's energy
            independence. With a commitment to offering cutting-edge solutions
            to customers, our products embody efficient innovation, delivering
            exceptional performance at competitive costs.
          </p>
        </Col>
        <Col xs={6} md={6}>
          <Image src={visionImage} fluid className="h-100" />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={6} className="visionmissioncard">
          <h2 className="pt-3 pb-2">Mission</h2>
          <p className="about-text">
            We are steadfastly committed to delivering superior quality
            products, highly customised solutions and exceedingly responsive
            services to customers; thus offering benchmark performance and
            customer experience. We shall uphold the highest standards in human
            values and shall invest our best efforts to fulfil the expectations
            of all our stakeholders.
          </p>
        </Col>
        <Col xs={6} md={6}>
          <Image src={missionImage} fluid className="h-100" />
        </Col>
      </Row>
      <h1 className="section-title">Our Clients</h1>
      <Carousel>
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
