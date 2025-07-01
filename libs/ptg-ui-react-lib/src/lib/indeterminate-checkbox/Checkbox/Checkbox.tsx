import React, { useEffect, useRef } from 'react';
import { ICheckboxProps } from '@ptg-react-libs/interfaces';
import './checkbox.css';
export const Checkbox = ({ isChecked = false, onClick, indeterminate = false, labelId }: ICheckboxProps) => {
	const checkboxRef = useRef<HTMLInputElement>(null);
	const splitId = labelId.split('_');
	useEffect(() => {
		if (checkboxRef.current) {
			checkboxRef.current.indeterminate = indeterminate; // Set indeterminate state
		}
	}, [indeterminate]);
	return (
		<>
			<input
				ref={checkboxRef}
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
