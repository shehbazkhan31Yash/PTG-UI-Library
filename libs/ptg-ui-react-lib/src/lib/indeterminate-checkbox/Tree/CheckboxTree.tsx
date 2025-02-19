/**
 * @since April 2022
 * @author Harsha Zalawa
 * @uses Reusable Component for Indeterminate Checkbox
 */

import { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import CheckboxList from '../CheckboxList/CheckboxList';
import { updateItemStates } from './updateItemStates';
import { CheckboxState, ItemState } from '../CheckboxList/checkbox.interface';

export interface PtgUiIndeterminateCheckboxProps {
	items: any;
}

export function PtgUiIndeterminateCheckbox({ items }: PtgUiIndeterminateCheckboxProps) {
	// const defaultItemStates: ItemState[] = items.map((i:any) => ({
	//   id: i.id,
	//   state: CheckboxState.UNCHECKED,
	// }));
	const [itemStates, setItemStates] = useState<ItemState[]>([]);
	const getStateForId = useCallback(
		(id: number) => {
			const tempItem: any = itemStates.find((i: any) => i.id === id);
			return tempItem?.state;
		},
		[itemStates]
	);
	const clickHandler = useCallback(
		(id: any) => {
			setItemStates(updateItemStates(itemStates, items, id));
		},
		[itemStates]
	);

	useEffect(() => {
		const defaultItemStates: ItemState[] = items.map((i: any) => ({
			id: i.id,
			state: CheckboxState.UNCHECKED,
		}));
		setItemStates(defaultItemStates);
	}, [items]);

	useLayoutEffect(() => undefined as void, [itemStates]);

	return <CheckboxList items={items} onClick={clickHandler} getStateForId={getStateForId} />;
}

export default PtgUiIndeterminateCheckbox;
