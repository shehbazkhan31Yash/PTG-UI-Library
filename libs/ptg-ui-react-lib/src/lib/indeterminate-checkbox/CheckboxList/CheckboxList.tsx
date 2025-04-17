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
	return (
		<ul className="list" style={{ paddingLeft: indentLevel * 20 }}>
			{idsToRender.map((id) => {
				const item: { id: number; name: string; parentId?: number } | undefined = items.find((i) => i.id === id);
				const checkboxState = getStateForId(id);
				return (
					<React.Fragment key={item?.id}>
						<li>
							<Checkbox
								onClick={() => item && onClick(item.id)}
								isChecked={checkboxState === CheckboxState.CHECKED}
								indeterminate={checkboxState === CheckboxState.INDETERMINATE}
								labelId={item?.name + '_' + item?.id}
							/>
						</li>
						{item?.id !== undefined && getChildNodes(item.id)}
					</React.Fragment>
				);
			})}
		</ul>
	);
};
