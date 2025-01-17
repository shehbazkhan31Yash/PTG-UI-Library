import React from 'react';
// import './Card.css'; // Import the CSS file for styling
import { PtgUiButton } from '../button/button';

interface CardUiProps {
  image?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: any;
  buttonColor?: string;
  buttonWidth?: string;
}

export function PtgUiCard(props: CardUiProps) {
  const {
    image,
    title,
    description,
    buttonText,
    onClick,
    buttonColor = '#052982',
    buttonWidth='150px',
  } = props;

  return (
    <div className="card">
      {image && <img src={image} className="card-img-top" alt="..." />}
      <div className="card-content">
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {description && <p className="card-text">{description}</p>}
          {buttonText && <PtgUiButton
            className="btn btn-primary go-somewhere-button"
            text={buttonText}
            textColor="#fff"
            backgroundColor={buttonColor}
            width={buttonWidth}
            onClick={onClick}
          />
          }
        </div>
      </div>
    </div>
  );
}
export default PtgUiCard;
