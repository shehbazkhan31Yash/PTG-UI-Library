import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';
import { contactsTeams } from '@ptg-ui-apps-react-backend/constants/constants';
const Teams: React.FC = () => {
  return (
    <section id="teams" className="text-light">
      <Row>
        {contactsTeams.map((team) => (
          <Col key={team.name} className="text-center teams">
            <Card>
              <Card.Img variant="top" src={team.photo} />
              <Card.Body>
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
