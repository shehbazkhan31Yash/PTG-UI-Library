import { ICheckboxProps } from '@ptg-react-libs/interfaces';
import './checkbox.css';

export const Checkbox = ({ isChecked = false, onClick, indeterminate = false, labelId }: ICheckboxProps) => {
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
};
