import React from 'react';
import { Carousel } from 'react-bootstrap';
import { carouselItems } from '@ptg-ui-apps-react-backend/constants/constants';
import { CarouselImageContainer } from './CarouselImageContainer';

const Home: React.FC = () => {
  return (
    <section id="about" className="text-center text-light mt-5">
      <h2 className="section-title">Mission and Vision</h2>
      <p className="about-text">
        Inspired by the Honourable Prime Minister’s vision for an Atmanirbhar
        Bharat (Self-Sufficient India), YASH is pioneering technological
        advancements to bolster the resilience and longevity of power
        infrastructure, thereby contributing to our nation's energy
        independence. With a commitment to offering cutting-edge solutions to
        customers, our products embody efficient innovation, delivering
        exceptional performance at competitive costs.
      </p>
      <h1 className="section-title">Our Clients</h1>
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index} interval={1000}>
            <CarouselImageContainer imageUrl={item.imageURL ?? ''} />
            {/* <Carousel.Caption>
              <h3>{item.text}</h3>
              <p>{item.caption}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Home;
