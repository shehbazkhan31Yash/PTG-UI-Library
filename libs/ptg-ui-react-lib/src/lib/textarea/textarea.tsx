import { PtgUiTextAreaProps } from "@ptg-react-libs/interfaces";

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
const defaultProps: PtgUiTextAreaProps = {
	rows: 4,
	value: '',
	placeholder: '',
	id: '',
	className: '',
	name: ''
};

export function PtgUiTextArea({ ...rest }: Readonly<PtgUiTextAreaProps>) {
	return <textarea {...rest} data-testid={rest.name} />;
}
PtgUiTextArea.defaultProps = defaultProps;
export default PtgUiTextArea;
