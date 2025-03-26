import React, { useState } from 'react';
import { IRatingProps } from '../interfaces';
import './rating.css';

/**
 * Rating component to render a customizable star rating system.
 *
 * @param {IRatingProps} props - The properties for the Rating component.
 * @param {number} [props.value] - The controlled value of the rating (for controlled components).
 * @param {function} [props.onChange] - Callback function triggered when the rating value changes.
 * @param {boolean} [props.readOnly=false] - If true, the rating is read-only and cannot be changed.
 * @param {boolean} [props.disabled=false] - If true, the rating is disabled and cannot be interacted with.
 * @param {number} [props.precision=1] - The precision of the rating (e.g., 1 for full stars, 0.5 for half stars).
 * @param {string} [props.icon='★'] - The icon used for filled stars.
 * @param {string} [props.emptyIcon='☆'] - The icon used for empty stars.
 * @param {string} [props.color='#FFD700'] - The color of the filled stars.
 * @param {string} [props.borderColor='#ccc'] - The color of the empty stars.
 * @param {number} [props.size=24] - The size of the stars in pixels.
 * @param {number} [props.hoverSize=28] - The size of the stars when hovered in pixels.
 * @returns {JSX.Element} The rendered Rating component.
 */
export const Rating: React.FC<IRatingProps> = ({
	value: controlledValue,
	onChange,
	readOnly = false,
	disabled = false,
	precision = 1,
	icon = '★',
	emptyIcon = '☆',
	color = '#FFD700',
	borderColor = '#ccc',
	size = 24,
	hoverSize = 28,
}) => {
	const [hoverValue, setHoverValue] = useState<number | null>(null);
	const [internalValue, setInternalValue] = useState<number>(0);
	const isControlled = controlledValue !== undefined;
	const value = isControlled ? controlledValue : internalValue;

	const roundToPrecision = (val: number) => {
		return precision === 1 ? Math.ceil(val) : Math.round(val / precision) * precision;
	};

	const handleClick = (clickedValue: number) => {
		if (readOnly || disabled) return;
		const newValue = value === clickedValue ? 0 : clickedValue;
		updateValue(roundToPrecision(newValue));
	};

	const updateValue = (newValue: number) => {
		if (!isControlled) setInternalValue(newValue);
		onChange?.(newValue);
	};

	const handleMouseEnter = (hoveredValue: number) => {
		if (!readOnly && !disabled) setHoverValue(roundToPrecision(hoveredValue));
	};

	const handleMouseLeave = () => setHoverValue(null);

	const renderStars = () => {
		const stars: JSX.Element[] = [];
		for (let i = 1; i <= 5; i++) {
			const displayValue = hoverValue !== null ? hoverValue : value;
			let fillPercentage = 0;

			if (precision === 1) {
				// Use Math.ceil to round up for full stars
				const fullStars = Math.ceil(displayValue);
				fillPercentage = fullStars >= i ? 100 : 0;
			} else {
				// Allow half-star fills for precision = 0.5
				if (displayValue >= i) {
					fillPercentage = 100;
				} else if (displayValue >= i - 0.5) {
					fillPercentage = 50;
				}
			}

			stars.push(
				<span
					key={i}
					className="rating-star"
					style={{
						fontSize: hoverValue === i ? hoverSize : size,
						cursor: readOnly || disabled ? 'not-allowed' : 'pointer',
						position: 'relative',
						display: 'inline-block',
					}}
				>
					{/* Filled part of the star */}
					<span
						className="star-fill"
						style={{
							position: 'absolute',
							width: `${fillPercentage}%`,
							overflow: 'hidden',
							color: color,
							whiteSpace: 'nowrap',
						}}
					>
						{icon}
					</span>

					{/* Empty star */}
					<span className="star-empty" style={{ color: borderColor }}>
						{emptyIcon}
					</span>

					{/* Clickable areas for half/full star */}
					{precision < 1 && (
						<>
							<span
								className="half-star"
								onClick={() => handleClick(i - 0.5)}
								onMouseEnter={() => handleMouseEnter(i - 0.5)}
								onMouseLeave={handleMouseLeave}
							></span>
							<span
								className="full-star"
								onClick={() => handleClick(i)}
								onMouseEnter={() => handleMouseEnter(i)}
								onMouseLeave={handleMouseLeave}
							></span>
						</>
					)}
					{precision === 1 && (
						<span
							className="full-star"
							onClick={() => handleClick(i)}
							onMouseEnter={() => handleMouseEnter(i)}
							onMouseLeave={handleMouseLeave}
						></span>
					)}
				</span>
			);
		}
		return stars;
	};

	return <div className="rating-container">{renderStars()}</div>;
};
