import React from 'react';
import { ICardUiProps } from '../interfaces';
import { PtgUiButton } from '../../lib/button/button';
import { CARD_BUTTON } from '../../lib/constants/Constants';

/**
 * PtgUiCard Component
 * 
 * A functional component that renders a card with an image, title, description, and an optional button.
 * 
 * @param {Readonly<ICardUiProps>} props - The props for the card component.
 * @param {string} props.image - The URL of the image to display on the card.
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description text of the card.
 * @param {string} props.buttonText - The text to display on the button.
 * @param {function} props.onClick - Callback function to handle button clicks.
 * @param {string} props.buttonColor - The background color of the button.
 * @param {string} props.buttonWidth - The width of the button.
 * @param {React.ReactNode} props.children - Any additional content to display inside the card.
 * @param {string} props.imageWidth - The width of the image.
 * @param {string} props.imageHeight - The height of the image.
 * @param {string} props.backgroundColor - The background color of the card.
 * @param {string} props.buttonTextColor - The text color of the button.
 * 
 * @returns {JSX.Element} A JSX element representing the card.
 */
export const PtgUiCard = (props: Readonly<ICardUiProps>) => {
	const {
		image,
		title,
		description,
		buttonText,
		onClick,
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
					alt="card"
					style={{
						width: imageWidth,
						height: imageHeight,
						maxWidth: CARD_BUTTON.MAX_WIDTH,
						maxHeight: CARD_BUTTON.MAX_HEIGHT,
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
