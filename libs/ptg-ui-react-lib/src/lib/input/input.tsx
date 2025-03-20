import { PtgUiInputProps } from '@ptg-react-libs/interfaces';
import './input.scss';

/**
 * PtgUiInput Component
 *
 * A functional component that renders a customizable input.
 * 
 * @param {Readonly<PtgUiInputProps>} props - The props for the input component.
 * @param {string} props.type - The type of the input element.
 * @param {string} props.value - The value of the input element.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {boolean} props.disabled - Indicates if the input is disabled.
 * @param {boolean} props.required - Indicates if the input is required.
 * @param {string} props.className - The CSS class for the input.
 * @param {string} props.inputsize - The size of the input element.
 * @param {string} props.name - The name attribute for the input.
 * @param {function} props.onBlur - The function to call when the input loses focus.
 * @param {React.Ref<HTMLInputElement>} props.ref - The ref for the input element.
 * @param {number} props.maxlength- The maximum length of the input value.
 * @param {function} props.onKeyUp - The function to call when a key is released.
 * @param {string} props.id - The unique identifier for the input.
 * 
 * @returns {JSX.Element} A JSX element representing the input.
 */

const defaultProps: PtgUiInputProps = {
	type: 'text',
	value: '',
	placeholder: '',
	disabled: false,
	required: true,
	inputsize: 'lg',
	id: '',
};

export function PtgUiInput({ ...rest }: Readonly<PtgUiInputProps>) {
	return <input {...rest} data-testid={rest.name} />;
}
PtgUiInput.defaultProps = defaultProps;
export default PtgUiInput;
