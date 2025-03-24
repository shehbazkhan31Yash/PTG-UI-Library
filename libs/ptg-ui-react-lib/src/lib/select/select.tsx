import { PtgUiSelectProps } from '@ptg-react-libs/interfaces';
import './select.scss';
import { Form } from 'react-bootstrap';
/**
 * PtgUiSelect Component
 * 
 * A functional component that renders a customizable select dropdown.
 * 
 * @param {Readonly<PtgUiSelectProps>} props - The props for the select component.
 * @param {string} props.name - The name attribute for the select input.
 * @param {string} props.value - The value attribute for the select input.
 * @param {string} props.id - The id attribute for the select input.
 * @param {string} props.className - The class name for the select input.
 * @param {Array<{ id: string; label: string; value: string }>} props.list - The list of select options.
 * @param {function} props.onBlur - The function to call when the select input loses focus.
 * @param {string} props.htmlFor - The htmlFor attribute for the select label.
 * @param {function} props.onChange - The function to call when the select input changes.
 * 
 * @returns {JSX.Element} A JSX element representing the select component.
 */


export function PtgUiSelect({ name, value, id, className, list, onBlur, onChange }: Readonly<PtgUiSelectProps>) {
	return (
		<Form.Group controlId="formBasicSelect" className={className}>
			<Form.Control
				as="select"
				value={value}
				onBlur={onBlur}
				onChange={onChange}
				className={className}
				name={name}
				data-testid={name}
				id={id}
			>
				<option value="" className="d-none" disabled selected>
					Select
				</option>
				{list?.map((item) => (
					<option key={item.id} value={item.value}>
						{item.label}
					</option>
				))}
			</Form.Control>
		</Form.Group>
	);
}

export default PtgUiSelect;
