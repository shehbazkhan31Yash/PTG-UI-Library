import { PtgUiButton } from '../Button/Button';
import  { CARD_BUTTON }  from '../constants';

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
  buttonTextColor?: string;
}

export function PtgUiCard(props: CardUiProps) {
  const {
    image,
    title,
    description,
    buttonText,
    onClick = () => {
      return;
    },
    buttonColor = CARD_BUTTON.COLOR,
    buttonWidth = CARD_BUTTON.WIDTH,
    children,
    imageWidth,
    imageHeight,
    backgroundColor = '',
    buttonTextColor = CARD_BUTTON.TEXT_COLOR,
  } = props;

  return (
    <div className="card m-2" style={{ backgroundColor }}>
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{
            width: imageWidth,
            height: imageHeight,
            maxWidth: '100%',
            maxHeight:'200px',
          }}
        />
      )}
      <div className="card-content">
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {description && <p className="card-text">{description}</p>}
          {buttonText && (
            <PtgUiButton
              className="btn btn-primary go-somewhere-button"
              text={buttonText}
              textColor={buttonTextColor}
              backgroundColor={buttonColor}
              width={buttonWidth}
              onClick={onClick}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
export default PtgUiCard;
