import React from 'react';
import TeamCard from './TeamCard/TeamCard';
import polaris_Image from '../../assets/images/polaris.jpg';
import { Card, Col, Row } from 'react-bootstrap';
import { contactsTeams } from '@ptg-ui-apps-react-backend/constants/constants';
const Teams: React.FC = () => {
  const teamMembersSampleData = [
    {
      memberImage: polaris_Image,
      memberName: 'Michelle Stricker',
      qualification: 'B.S',
      designation: 'UI Lead',
    },
    {
      memberImage: polaris_Image,
      memberName: 'Valentina Ionova',
      qualification: 'Ph.D',
      designation: 'UI Specialist',
    },
    {
      memberImage: polaris_Image,
      memberName: 'Travis Feaker',
      qualification: 'M.S',
      designation: 'UI/UX Engineer',
    },
    {
      memberImage: polaris_Image,
      memberName: 'Mohamed Elmansy',
      qualification: 'Ph.D',
      designation: 'UI Associate',
    },
  ];
  return (
    <section id="teams" className="text-light mt-2 p-4 pt-2">
      <h2 className="text-center text-warning pb-2">Meet Our Group</h2>
      <Row>
        {contactsTeams.map((team, index) => (
          <Col key={index} className="text-center">
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

      <Row className="pt-4">
        {teamMembersSampleData.map((data, index) => (
          <TeamCard
            key={index}
            memberImage={data.memberImage}
            memberName={data.memberName}
            qualification={data.qualification}
            designation={data.designation}
          />
        ))}
      </Row>
    </section>
  );
};
export default Teams;
