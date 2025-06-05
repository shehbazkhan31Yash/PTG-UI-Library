import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Services: React.FC = () => {
  return (
    <section id="services" className="text-center text-light mt-5">
      <h2 className="section-title">What We Offer</h2>
      <p className="">
        As a UI team, we offer a variety of services to enhance user experience
      </p>

      <ListGroup>
        <ListGroup.Item>
          1. <b>Wireframing & Prototyping </b> : Visualizing layouts and
          functionalities before development.
        </ListGroup.Item>
        <ListGroup.Item>
          2. <b>Visual Design</b> : Crafting the aesthetic elements like color
          schemes and typography.
        </ListGroup.Item>
        <ListGroup.Item>
          3. <b>Responsive Design</b> : Ensuring adaptability across different
          devices and screen sizes.
        </ListGroup.Item>
        <ListGroup.Item>
          4. <b>Interaction Design</b> : Designing interactive elements to boost
          user engagement.
        </ListGroup.Item>
        <ListGroup.Item>
          5. <b>Accessibility Design</b> : Implementing practices for
          inclusivity for all users.
        </ListGroup.Item>
        <ListGroup.Item>
          6. <b>Usability Testing</b> : Evaluating the UI with real users for
          iterative improvements.
        </ListGroup.Item>
        <ListGroup.Item>
          7. <b>Design Systems</b> : Creating style guides for consistency
          across applications.
        </ListGroup.Item>
        <ListGroup.Item>
          8. <b>Collaboration</b> : Working with developers for accurate design
          implementation.
        </ListGroup.Item>
        <ListGroup.Item>
          9. <b>Continuous Improvement</b> : Monitoring feedback to enhance the
          UI based on user behavior.
        </ListGroup.Item>
      </ListGroup>
    </section>
  );
};

export default Services;
