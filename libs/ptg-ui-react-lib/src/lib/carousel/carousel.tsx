import React from 'react';
import { ICarouselProps } from '../interfaces';
import './carousel.css';

/**
 * PtgUiCarousel Component
 * 
 * A functional component that renders a carousel of images.
 * 
 * @param {Readonly<ICarouselProps>} props - The props for the carousel component.
 * @param {string} props.imgHeight - The height of the carousel images.
 * @param {string} props.imgWidth - The width of the carousel images.
 * @param {Array<string>} props.images - An array of image paths to display in the carousel.
 * @param {boolean} props.showIndicators - Indicates if the carousel indicators should be shown (default is true).
 * 
 * @returns {JSX.Element} A JSX element representing the image carousel.
 */
export const PtgUiCarousel = ({
	imgHeight,
	imgWidth,
	images = [],
	showIndicators = true,
}: Readonly<ICarouselProps>) => {
	return (
		<div className="parent-container">
			<div className="carousel">
				<ul
					className="slides"
					style={{
						minHeight: `${imgHeight}`,
						width: `${imgWidth}`,
					}}
				>
					{images.length ? (
						images.map((imgPath, index) => {
							return (
								<React.Fragment key={imgPath}>
									<div>
										<input
											type="radio"
											name="radio-buttons"
											id={`img-${index}`}
											checked
										/>
										<li className="slide-container">
											<div className="slide-image">
												<img src={imgPath} alt="Carousel" />
											</div>
											<div className="carousel-controls" style={{ lineHeight: imgHeight }}>
												<label
													htmlFor={`img-${index === 0 ? images.length - 1 : index - 1}`}
													className="prev-slide"
													aria-label="Previous Slide"
												>
													<span>&lsaquo;</span>
												</label>
												<label
													htmlFor={`img-${index === images.length - 1 ? 0 : index + 1}`}
													className="next-slide"
													aria-label="Next Slide"
												>
													<span>&rsaquo;</span>
												</label>
											</div>
										</li>
									</div>
									{showIndicators && (
										<div className="carousel-dots">
											{images.map((_, dotIndex) => (
												<label
													htmlFor={`img-${dotIndex}`}
													className="carousel-dot"
													id={`img-dot-${dotIndex}`}
													key={dotIndex}
													aria-label="Slide dots"
												></label>
											))}
										</div>
									)}
								</React.Fragment>
							);
						})
					) : null}
				</ul>
			</div>
		</div>
	);
}