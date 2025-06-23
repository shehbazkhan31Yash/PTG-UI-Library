import React from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import './checkboxlist.css';
import { CheckboxState } from './checkbox.interface';
import { CheckboxListProps } from '@ptg-react-libs/interfaces';
export const CheckboxList = ({
	items,
	getStateForId,
	idsToRender = [],
	indentLevel = 0,
	onClick = () => undefined,
}: CheckboxListProps) => {
	if (!idsToRender.length) {
		idsToRender = items.filter((i) => !i.parentId).map((i) => i.id);
	}
	const getChildNodes = (parentId: number) => {
		const nodeItems = items.filter((i) => i.parentId === parentId);
		if (!nodeItems.length) return null;
		return (
			<CheckboxList
				items={items}
				idsToRender={nodeItems.map((i) => i.id)}
				indentLevel={indentLevel + 1}
				onClick={onClick}
				getStateForId={getStateForId}
			/>
		);
	};
	const isIndeterminate = (parentId: number): boolean => {
		const childItems = items.filter((i) => i.parentId === parentId);
		const checkedCount = childItems.filter((i) => getStateForId(i.id) === CheckboxState.CHECKED).length;
		return checkedCount > 0 && checkedCount < childItems.length;
	};
	return (
		<ul className="checkbox-list" style={{ paddingLeft: indentLevel * 20 }}>
			{idsToRender.map((id) => {
				const item = items.find((i) => i.id === id);
				const checkboxState = getStateForId(id);
				if (!item) return null; // Ensure item is defined
				const indeterminate = isIndeterminate(item.id);
				return (
					<React.Fragment key={item.id}>
						<li>
							<Checkbox
								onClick={() => onClick(item.id)}
								isChecked={checkboxState === CheckboxState.CHECKED}
								indeterminate={indeterminate}
								labelId={`${item.name}_${item.id}`}
							/>
						</li>
						{getChildNodes(item.id)}
					</React.Fragment>
				);
			})}
		</ul>
	);
};
