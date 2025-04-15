import { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import { CheckboxList } from '../CheckboxList/CheckboxList';
import { updateItemStates } from './updateItemStates';
import { CheckboxState, ItemState } from '../CheckboxList/checkbox.interface';
import { PtgUiIndeterminateCheckboxProps } from '@ptg-react-libs/interfaces';

export const PtgUiIndeterminateCheckbox = ({ items }: PtgUiIndeterminateCheckboxProps) => {
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
};
