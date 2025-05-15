import { PtgUiTooltipProps } from "@ptg-react-libs/interfaces";
import { useRef, useState } from "react";
import './tooltip.css';

/**
 * PtgUiTextArea Component
 * 
 * A functional component that renders a customizable textarea.
 * 
 * @param {Readonly<PtgUiTextAreaProps>} props - The props for the textarea component.
 * @param {string} props.placeholder - The placeholder text for the textarea.
 * @param {string} props.className - The CSS class name for the textarea.
 * @param {number} props.rows - The number of rows for the textarea.
 * @param {string} props.name - The name attribute for the textarea.
 * @param {string} props.id - The id attribute for the textarea.
 * @param {string} props.value - The value of the textarea.
 * @param {function} props.onChange - The function to call when the textarea value changes.
 * @param {function} props.onBlur - The function to call when the textarea loses focus.
 * 
 * @returns {JSX.Element} A JSX element representing the textarea.
 */
const defaultProps: PtgUiTooltipProps = {
	content: "",
	className: "",	
	placement: "top",
	children: null,
};

export function PtgUiTooltip({ children, className, ...rest }: Readonly<PtgUiTooltipProps>) {
	const [visible, setVisible] = useState(false);
	const tooltipRef = useRef<HTMLDivElement | null>(null);
	const showTooltip = () => {
		setVisible(true);	
	}
	const hideTooltip = () => {	
		setVisible(false);
	}
	return (
		<div className={`ptg-ui-tooltip ${className}`} {...rest} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
			{children}{
				visible && (
					<div className={`ptg-ui-tooltip-content ptg-ui-tooltip-${rest.placement}`} ref={tooltipRef}>
						{rest.content}
					</div>
				)
			}
		</div>
	);
}

PtgUiTooltip.defaultProps = defaultProps;
export default PtgUiTooltip;