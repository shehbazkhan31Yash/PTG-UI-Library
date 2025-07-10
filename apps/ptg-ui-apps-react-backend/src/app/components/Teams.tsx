import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';
import { contactsTeams } from '@ptg-ui-apps-react-backend/constants/constants';
const Teams: React.FC = () => {
  return (
    <section id="teams" className="text-light">
      <div className="container text-center">
        <h2 className="pb-3 mb-0 text-dark" >
          Inspired by Their Vision
        </h2>
        <p className="lead mb-2 text-dark" style={{  fontSize: '16px', fontWeight:400 }}>
          This reusable component library is shaped by the ideas, insights, and vision of these key individuals. Their strategic thinking and design direction laid the foundation for creating a system that supports scalable, consistent, and efficient UI development across projects.
        </p>
        <p className="lead mb-5 text-dark" style={{  fontSize: '16px', fontWeight:500  }}>
          If you have any questions regarding the reusable library, please reach out to us at <span className="text-primary" style={{  fontSize: '15px'  }}>UXUI-competency@yash.com.</span>
        </p>
      </div>
      <Row>
        {contactsTeams.map((team) => (
          <Col key={team.name} className="text-center teams">
            <Card style={{border: 'none', background:'none'}}>
              <Card.Img variant="top" src={team.photo} style={{height: '200px', width:'200px', margin: '0 auto'}}/>
              <Card.Body>
                <Card.Text>
                  <h6 className='mb-0'>{team.name}</h6>
                  <p>{team.designation}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};
export default Teams;
