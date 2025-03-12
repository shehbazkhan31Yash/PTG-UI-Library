/**
 * @since April 2022
 * @author Harsha Zalawa
 * @uses Reusable Component for Indeterminate Checkbox
 */
import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './checkboxlist.scss';
import { CheckboxState, Item } from './checkbox.interface';

interface CheckboxListProps {
	items: Item[];
	idsToRender?: number[];
	indentLevel?: number;
	onClick?: (id: number) => void;
	getStateForId: (id: number) => CheckboxState;
}

function CheckboxList({
	items,
	getStateForId,
	idsToRender = [],
	indentLevel = 0,
	onClick = () => undefined,
}: CheckboxListProps) {
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
				const item: any = items.find((i) => i.id === id);
				const checkboxState = getStateForId(id);
				return (
					<React.Fragment key={item.id}>
						<li>
							<Checkbox
								onClick={() => onClick(item.id)}
								isChecked={checkboxState === CheckboxState.CHECKED}
								indeterminate={checkboxState === CheckboxState.INDETERMINATE}
								labelId={item.name + '_' + item.id}
							/>
							{/* <label className="align-text-bottom">{item.name}</label> */}
						</li>
						{getChildNodes(item.id)}
					</React.Fragment>
				);
			})}
		</ul>
	);
}

export default CheckboxList;
