import { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import { CheckboxList } from '../CheckboxList/CheckboxList';
import { updateItemStates } from './updateItemStates';
import { CheckboxState, ItemState } from '../CheckboxList/checkbox.interface';
import { PtgUiIndeterminateCheckboxProps } from '@ptg-react-libs/interfaces';

/**
 * PtgUiIndeterminateCheckbox component to render a tree of checkboxes with indeterminate states.
 *
 * This component manages the state of checkboxes, including checked, unchecked, and indeterminate states.
 * It uses a callback to handle click events and updates the state of checkboxes dynamically.
 *
 * @param {PtgUiIndeterminateCheckboxProps} props - The properties for the PtgUiIndeterminateCheckbox component.
 * @param {Array} props.items - The list of items to render as checkboxes, each with an `id` and `state`.
 * @returns {JSX.Element} The rendered tree of checkboxes.
 */
export const PtgUiIndeterminateCheckbox = ({ items }: PtgUiIndeterminateCheckboxProps) => {
	const [itemStates, setItemStates] = useState<ItemState[]>([]);
	const getStateForId = useCallback(
		(id: number) => {
			const tempItem: ItemState | undefined = itemStates.find((i: ItemState) => i.id === id);
			return tempItem?.state ?? CheckboxState.UNCHECKED;
		},
		[itemStates]
	);
	const clickHandler = useCallback(
		(id: number) => {
			setItemStates(updateItemStates(itemStates, items, id));
		},
		[itemStates]
	);

	useEffect(() => {
		const defaultItemStates: ItemState[] = items.map((i: ItemState) => ({
			id: i.id,
			state: CheckboxState.UNCHECKED,
		}));
		setItemStates(defaultItemStates);
	}, [items]);

	useLayoutEffect(() => undefined as void, [itemStates]);

	return <CheckboxList items={items} onClick={clickHandler} getStateForId={getStateForId} />;
};
