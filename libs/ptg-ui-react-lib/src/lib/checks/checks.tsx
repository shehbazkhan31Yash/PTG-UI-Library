import { PtgUiCheckboxProps } from '@ptg-react-libs/interfaces';
import './checks.scss';
/**
 * PtgUiChecks Component
 *
 * A functional component that renders a customizable checkbox.
 * 
 * @param {Readonly<PtgUiCheckboxProps>} props - The props for the checkbox component.
 * @param {string} props.id - The unique identifier for the checkbox.
 * @param {string} props.name - The name attribute for the checkbox.
 * @param {string} props.label - The label text for the checkbox.
 * @param {string} props.value - The value attribute for the checkbox.
 * @param {string} props.for - The function to call when the checkbox is clicked.
 * @param {string} props.htmlFor - The id of the element that the label is bound to.
 * @param {boolean} props.checked - Indicates if the checkbox is checked.
 * @param {function} props.onChange - The function to call when the checkbox value changes.
 * @param {string} props.className - The className for the checkbox.
 *
 * @returns {JSX.Element} A JSX element representing the checkbox.
 */
const defaultProps: PtgUiCheckboxProps = {
	checked: false,
};
export function PtgUiCheckbox(props: Readonly<PtgUiCheckboxProps>) {
	const { id, name, label, value, htmlFor, checked, onChange, className } = props;
	return (
		<div className="form-check">
			<input
				type="checkbox"
				id={id}
				name={name}
				value={value}
				checked={checked}
				className={className}
				onChange={onChange}
				data-testid={name}
			/>
			<label className="form-check-label" htmlFor={htmlFor}>
				{label}
			</label>
		</div>
	);
}

PtgUiCheckbox.defaultProps = defaultProps;
export default PtgUiCheckbox;
