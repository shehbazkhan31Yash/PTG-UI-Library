/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for input field
 *
 */
import './input.scss';

interface PtgUiInputProps {
	type: string;
	value?: string;
	onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void);
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	className?: string;
	inputsize?: string;
	name?: string;
	onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void);
	ref?: any;
	// accessKey?: string;
	maxlength?: any;
	onKeyUp?: ((event: React.KeyboardEvent<HTMLInputElement>) => void);
	id?: string;
}

const defaultProps: PtgUiInputProps = {
	type: 'text',
	value: '',
	placeholder: '',
	disabled: false,
	required: true,
	inputsize: 'lg',
	// accessKey: '',
	id: '',
};

export function PtgUiInput({ ...rest }: PtgUiInputProps) {
	return <input {...rest} data-testid={rest.name} />;
}
PtgUiInput.defaultProps = defaultProps;
export default PtgUiInput;
