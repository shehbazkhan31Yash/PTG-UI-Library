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
export const PtgUiRating: React.FC<IRatingProps> = ({
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
	defaultValue = 2,
	onHover,
}) => {
	const [hoverValue, setHoverValue] = useState<number | null>(null);
	const [internalValue, setInternalValue] = useState<number>(defaultValue);
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
		if (!readOnly && !disabled) {
			setHoverValue(roundToPrecision(hoveredValue));
			onHover?.(hoveredValue);
		}
	};

	const handleMouseLeave = () => {
		setHoverValue(null);
		onHover?.(-1);
	};

	const calculateFillPercentage = (displayValue: number, starIndex: number, precision: number) => {
		if (precision === 1) {
			const fullStars = Math.ceil(displayValue);
			return fullStars >= starIndex ? 100 : 0;
		}

		if (displayValue >= starIndex) {
			return 100;
		}

		if (displayValue >= starIndex - 0.5) {
			return 50;
		}

		return 0;
	};

	const renderStarFill = (fillPercentage: number, icon: string, color: string) => (
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
	);

	const renderStarEmpty = (emptyIcon: string, borderColor: string) => (
		<span className="star-empty" style={{ color: borderColor }}>
			{emptyIcon}
		</span>
	);

	const renderClickableStars = (starIndex: number) => {
		if (precision < 1) {
			return (
				<>
					<button
						className="half-star"
						onClick={() => handleClick(starIndex - 0.5)}
						onMouseEnter={() => handleMouseEnter(starIndex - 0.5)}
						onMouseLeave={handleMouseLeave}
						style={{
							background: 'none',
							border: 'none',
						}}
					></button>
					<button
						className="full-star"
						onClick={() => handleClick(starIndex)}
						onMouseEnter={() => handleMouseEnter(starIndex)}
						onMouseLeave={handleMouseLeave}
						style={{
							background: 'none',
							border: 'none',
						}}
					></button>
				</>
			);
		} else {
			return (
				<button
					className="full-star"
					onClick={() => handleClick(starIndex)}
					onMouseEnter={() => handleMouseEnter(starIndex)}
					onMouseLeave={handleMouseLeave}
					style={{
						background: 'none',
						border: 'none',
					}}
				></button>
			);
		}
	};

	const renderStars = () => {
		const stars: JSX.Element[] = [];
		for (let i = 1; i <= 5; i++) {
			const displayValue = hoverValue ?? value;
			const fillPercentage = calculateFillPercentage(displayValue, i, precision);

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
					{renderStarFill(fillPercentage, icon, color)}
					{renderStarEmpty(emptyIcon, borderColor)}
					{renderClickableStars(i)}
				</span>
			);
		}
		return stars;
	};

	return <div className="rating-container">{renderStars()}</div>;
};
