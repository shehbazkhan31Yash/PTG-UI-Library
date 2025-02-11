/**
 * @since April 2022
 * @author Harsha Zalawa
 * @uses Reusable Component for Indeterminate Checkbox
 */

import { CheckboxState, Item, ItemState } from '../CheckboxList/checkbox.interface';

export const updateItemStates = (oldState: ItemState[], items: Item[], clickedId: number) => {
	const newState = oldState.map((i) => ({ ...i }));
	// getters
	const getItemState = (id: number) => {
		let temp: any = newState.find((i) => i.id === id);
		return temp.state;
	};
	// setters
	const updateParent = (id: number) => {
		const item: any = items.find((i) => i.id === id);
		const parent: any = items.find((i: any) => i.id === item.parentId);
		if (!parent) return;
		const childIds = items.filter((i) => i.parentId === parent.id).map((i) => i.id);
		const childStates = childIds.map((childId) => getItemState(childId));

		let tempNewState: any = newState.find((i: any) => i.id === parent.id);
		if (childStates.length === childStates.filter((s: any) => s === CheckboxState.CHECKED).length) {
			tempNewState.state = CheckboxState.CHECKED;
		} else if (childStates.length === childStates.filter((s) => s === CheckboxState.UNCHECKED).length) {
			tempNewState.state = CheckboxState.UNCHECKED;
		} else {
			tempNewState.state = CheckboxState.INDETERMINATE;
		}
		updateParent(parent.id);
	};
	const setUnchecked = (id: number) => {
		let tempNewState: any = newState.find((i: any) => i.id === id);
		tempNewState.state = CheckboxState.UNCHECKED;
		items
			.filter((i) => i.parentId === id)
			.map((i) => i.id)
			.forEach((childId) => setUnchecked(childId));
		updateParent(id);
	};
	const setChecked = (id: number) => {
		let tempNewState: any = newState.find((i: any) => i.id === id);
		tempNewState.state = CheckboxState.CHECKED;
		items
			.filter((i) => i.parentId === id)
			.map((i) => i.id)
			.forEach((childId) => setChecked(childId));
		updateParent(id);
	};
	// actual logic
	const itemState = getItemState(clickedId);
	if (itemState === CheckboxState.CHECKED) {
		setUnchecked(clickedId);
	} else {
		setChecked(clickedId);
	}
	return newState;
};
