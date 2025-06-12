import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';
import { contactsTeams } from '@ptg-ui-apps-react-backend/constants/constants';
const Teams: React.FC = () => {
  return (
    <section id="teams" className="text-light mt-2 p-4 pt-2">
      <h2 className="text-center text-warning pb-2">Meet Our Group</h2>
      <Row>
        {contactsTeams.map((team, index) => (
          <Col key={team.name} className="text-center">
            <Card>
              <Card.Img variant="top" src={team.photo} />
              <Card.Body className="text-white">
                <Card.Text>
                  <h5>{team.name}</h5>
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
