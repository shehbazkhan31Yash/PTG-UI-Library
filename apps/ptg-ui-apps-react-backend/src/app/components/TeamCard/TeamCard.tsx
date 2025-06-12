import React from 'react';
import { Col, Image } from 'react-bootstrap';

interface CardProps {
  key: string;
  memberImage: any;
  memberName?: string;
  qualification?: string;
  designation?: string;
}

const TeamCard: React.FC<CardProps> = ({
  key,
  memberImage,
  memberName,
  qualification,
  designation,
}) => {
  return (
    <Col xs={6} md={3} key={key}>
      <Image
        src={memberImage}
        alt={`${memberName} Image`}
        aria-label=""
        fluid
      />
      <h5 className="pt-4">{`${memberName}, ${qualification}`}</h5>
      <h5>{designation}</h5>
    </Col>
  );
};

export default TeamCard;
