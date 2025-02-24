/* eslint-disable jsx-a11y/no-access-key */
/**
 * @since March 2022
 * @author Ankit Patidar
 * @desc Reusable Checkbox Component
 *
 */

import './checks.scss';
interface PtgUiCheckboxProps {
	id?: string;
	name?: string;
	label?: string;
	value?: string;
	for?: string;
	htmlFor?: string;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	accessKey?: string;
}
const defaultProps: PtgUiCheckboxProps = {
	checked: false,
};

export function PtgUiCheckbox({
	id,
	name,
	label,
	value,
	htmlFor,
	checked,
	onChange,
	className,
	accessKey,
	...rest
}: PtgUiCheckboxProps) {
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
				accessKey={accessKey}
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
