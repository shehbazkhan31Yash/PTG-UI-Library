import { useMemo } from 'react';
import { BUTTON_CLASS } from '../constants/Constants';
import { IPtgUiButtonProps } from '../interfaces';
import './button.css';
/**
 * PtgUiButton Component
 * 
 * A functional component that renders a customizable button.
 * 
 * @param {Readonly<IPtgUiButtonProps>} props - The props for the button component.
 * @param {string} props.appearance - The appearance style of the button (e.g., primary, secondary).
 * @param {string} props.btnIconAlignment - The alignment of the button icon ('left' or 'right').
 * @param {string} props.text - The text to display on the button.
 * @param {boolean} props.hasbtnIconSlot - Indicates if the button has an icon slot.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} props.width - The width of the button.
 * @param {string} props.height - The height of the button.
 * @param {string} props.fontSize - The font size of the button text.
 * @param {string} props.fontWeight - The font weight of the button text.
 * @param {React.ReactNode} props.children - Any additional content to display inside the button.
 * @param {string} props.textColor - The color of the button text.
 * @param {string} props.backgroundColor - The background color of the button.
 * @param {boolean} props.disabled - Indicates if the button is disabled.
 * @param {string} props.type - The type of the button (default is 'button').
 * @param {string} props.border - The border style of the button.
 * 
 * @returns {JSX.Element} A JSX element representing the button.
 */
export const PtgUiButton = (props: Readonly<IPtgUiButtonProps>) => {
	const {
		appearance,
		btnIconAlignment,
		text,
		hasbtnIconSlot,
		onClick,
		width,
		height,
		fontSize,
		fontWeight,
		children,
		textColor,
		backgroundColor,
		disabled,
		type = 'button',
		border,
	} = props;

	const buttonStyle = useMemo(() => ({
		'--button-text-color': textColor,
		width: width,
		height: height,
		fontSize: fontSize,
		fontWeight: fontWeight,
		color: textColor,
		backgroundColor: backgroundColor,
		border: border,
	}), [textColor, width, height, fontSize, fontWeight, backgroundColor, border]);

	return (
		<button
			style={buttonStyle}
			className={`${BUTTON_CLASS} ${appearance}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{btnIconAlignment === 'left' && hasbtnIconSlot && <div className="iconRight">{children}</div>}
			<span className="button-text"> {text}</span>
			{btnIconAlignment === 'right' && hasbtnIconSlot && <div className="iconLeft">{children}</div>}
			{!btnIconAlignment && !text && children && children}
		</button>
	);
}
