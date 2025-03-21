import React, { useState } from 'react';
import './carousel.css';
import { Card } from './card/card';
import { ICarouselProps } from '@ptg-react-libs/interfaces';

/**
 * PtgUiCarousel component to render a carousel with navigation options.
 *
 * @param {ICarouselProps} props - The properties for the PtgUiCarousel component.
 * @param {Array} props.items - The list of items to display in the carousel.
 * @param {string} [props.backgroundColor='#fff'] - The background color of the carousel.
 * @param {string} [props.buttonPosition='bottom'] - The position of the navigation buttons.
 * @param {Object} [props.buttonProps] - The properties for the navigation buttons.
 * @param {string} [props.buttonProps.iconLeft='<'] - The icon for the left navigation button.
 * @param {string} [props.buttonProps.iconRight='>'] - The icon for the right navigation button.
 * @param {Object} [props.buttonProps.style] - The style for the navigation buttons.
 * @param {boolean} [props.navigationOnIcon=false] - Flag to enable navigation on icons.
 * @param {string} [props.navigationIconWidth='40px'] - The width of the navigation icons.
 * @param {string} [props.navigationIconHeight='40px'] - The height of the navigation icons.
 * @returns {JSX.Element} The rendered carousel component.
 */
export const PtgUiCarousel: React.FC<ICarouselProps> = ({
	items,
	backgroundColor = '#fff',
	buttonPosition = 'bottom',
	buttonProps = {
		iconLeft: '<',
		iconRight: '>',
		style: { backgroundColor: '#007bff', color: 'white', width: '40px', height: '40px' },
	},
	navigationOnIcon = false,
	navigationIconWidth = '40px',
	navigationIconHeight = '40px',
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		if (items.length > 0) {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
		}
	};

	const prevSlide = () => {
		if (items.length > 0) {
			setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
		}
	};

	return (
		<div className="carousel" style={{ backgroundColor }}>
			<div className="carousel-content">
				{items?.length > 0 && (
					<Card
						image={items[currentIndex]?.image}
						title={items[currentIndex]?.title}
						description={items[currentIndex]?.description}
						backgroundColor={items[currentIndex]?.backgroundColor}
						shape={items[currentIndex]?.shape}
						maxWidth={items[currentIndex]?.maxWidth}
						margin={items[currentIndex]?.margin}
						padding={items[currentIndex]?.padding}
					/>
				)}
			</div>

			{!navigationOnIcon && (
				<div className="dot-navigation">
					{items.map((item, index) => (
						<button
							key={index + 'dot-navigation'}
							className={`dot ${currentIndex === index ? 'active' : ''}`}
							onClick={() => setCurrentIndex(index)}
							style={{ border: 'none', padding: 0, cursor: 'pointer' }}
							aria-label={`Slide ${index + 1}`}
						/>
					))}
				</div>
			)}

			{navigationOnIcon && (
				<div className="icon-navigation">
					{items.map((item, index) => (
						<button
							key={index + 'icon-navigation'}
							onClick={() => setCurrentIndex(index)}
							style={{
								border: 'none',
								padding: 0,
								cursor: 'pointer',
								margin: '0 5px',
								opacity: currentIndex === index ? 1 : 0.5,
							}}
							aria-label={`Slide ${index + 1}`}
						>
							<img
								src={item.image}
								alt={`Slide ${index + 1}`}
								style={{
									width: navigationIconWidth,
									height: navigationIconHeight,
								}}
							/>
						</button>
					))}
				</div>
			)}

			<div className={`carousel-controls ${buttonPosition}`}>
				<button onClick={prevSlide} style={{ ...buttonProps.style }}>
					{buttonProps.iconLeft}
				</button>{' '}
				<button onClick={nextSlide} style={{ ...buttonProps.style }}>
					{buttonProps.iconRight}
				</button>{' '}
			</div>
		</div>
	);
};
