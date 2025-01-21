import { PtgUiButton } from '../button/button';

interface CardUiProps {
  image?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
  buttonColor?: string;
  buttonWidth?: string;
  children?: React.ReactNode; 
  imageWidth?: string;
  imageHeight?: string;
  backgroundColor?: string;
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
    children,
    imageWidth,
    imageHeight,
    backgroundColor='',
  } = props;

  return (
    <div className="card m-2" style={{backgroundColor}}>
      {image && <img src={image} className="card-img-top" alt="..." style={{ width: imageWidth, height: imageHeight, maxWidth: '100%', maxHeight: '200px'}} />}
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
          {children}
        </div>
      </div>
    </div>
  );
}
export default PtgUiCard;
