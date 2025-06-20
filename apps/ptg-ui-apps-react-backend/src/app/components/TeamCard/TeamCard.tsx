import React, { useState } from 'react';
import { Col, Image, Spinner } from 'react-bootstrap';

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
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = () => {
    setIsImageLoading(false);
  };

  return (
    <Col xs={6} md={3} key={key}>
      <div className="position-relative">
        {isImageLoading && (
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ zIndex: 2 }}
          >
            <Spinner
              animation="border"
              role="status"
              variant="primary"
              size="sm"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        <Image
          src={memberImage}
          alt={`${memberName} Image`}
          aria-label=""
          fluid
          className={isImageLoading ? 'opacity-25' : ''}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ transition: 'opacity 0.3s ease-in-out' }}
        />
      </div>
      <h5 className="pt-4">{`${memberName}, ${qualification}`}</h5>
      <h5>{designation}</h5>
    </Col>
  );
};

export default TeamCard;
