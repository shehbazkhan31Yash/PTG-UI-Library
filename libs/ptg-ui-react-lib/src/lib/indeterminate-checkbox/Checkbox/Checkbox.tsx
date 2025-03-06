/**
 * @since April 2022
 * @author Harsha Zalawa
 * @uses Reusable Component for Indeterminate Checkbox
 */

import './checkbox.scss';

interface checkboxProps {
	isChecked?: boolean;
	indeterminate?: boolean;
	onClick?: () => void;
	labelId: string;
}

function Checkbox({ isChecked = false, onClick, indeterminate = false, labelId }: checkboxProps) {
	const splitId = labelId.split('_');
	return (
		<>
			<input
				className={`checkbox ${indeterminate ? 'isIndeterminate' : ''}`}
				type="checkbox"
				id={labelId}
				checked={isChecked}
				onClick={onClick}
			/>
			<label htmlFor={labelId}>
				<span className="indeterminatespan">{splitId[0]}</span>
			</label>
		</>
	);
}

export default Checkbox;
