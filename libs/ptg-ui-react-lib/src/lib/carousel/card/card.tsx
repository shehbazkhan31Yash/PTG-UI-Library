import React from 'react';
import './card.css';
import { ICardProps } from '@ptg-react-libs/interfaces';

/**
 * Card component to render an individual card with an image, title, and description.
 *
 * @param {ICardProps} props - The properties for the Card component.
 * @param {string} props.image - The URL of the image to display in the card.
 * @param {string} props.title - The title text to display in the card.
 * @param {Object} props.description - The description text to display in the card.
 * @param {string} props.backgroundColor - The background color of the card.
 * @param {string} props.shape - The shape of the card image (e.g., circle, square, rectangle).
 * @param {string} [props.maxWidth='300px'] - The maximum width of the card.
 * @param {string} [props.margin='0px'] - The margin around the card.
 * @param {string} [props.padding='0px'] - The padding inside the card.
 * @returns {JSX.Element} The rendered card component.
 */
export const Card: React.FC<ICardProps> = ({
	image,
	title,
	description,
	backgroundColor = '#fff',
	shape = 'rectangle',
	maxWidth = '300px',
	margin = '0px',
	padding = '0px',
}) => {
	return (
		<div className="card" style={{ backgroundColor, maxWidth, margin, padding }}>
			<img src={image} alt={title} className={`card-image ${shape}`} />
			{title && <h3 className="card-title">{title}</h3>}
			{description && (
				<div className="card-description">
					<div dangerouslySetInnerHTML={description} />
				</div>
			)}
		</div>
	);
};
