import { CheckboxState, Item, ItemState } from '../CheckboxList/checkbox.interface';

export const updateItemStates = (oldState: ItemState[], items: Item[], clickedId: number) => {
	const newState = oldState.map((i) => ({ ...i }));

	// Get the state of an item by its ID
	const getItemState = (id: number): CheckboxState | undefined => {
		const temp: ItemState | undefined = newState.find((i) => i.id === id);
		return temp ? temp.state : undefined; // Simplified return
	};

	// Update the parent's state based on its children's states
	const updateParent = (id: number) => {
		const item: Item | undefined = items.find((i) => i.id === id);
		if (!item) return;
		const parent: Item | undefined = items.find((i) => i.id === item.parentId);
		if (!parent) return;

		const childIds = items.filter((i) => i.parentId === parent.id).map((i) => i.id);
		const childStates = childIds.map((childId) => getItemState(childId));

		const tempNewState: ItemState | undefined = newState.find((i: ItemState) => i.id === parent.id);
		if (!tempNewState) return;

		// Determine the parent's state based on children's states
		const checkedCount = childStates.filter((s) => s === CheckboxState.CHECKED).length;
		const uncheckedCount = childStates.filter((s) => s === CheckboxState.UNCHECKED).length;

		if (checkedCount === childStates.length) {
			tempNewState.state = CheckboxState.CHECKED;
		} else if (uncheckedCount === childStates.length) {
			tempNewState.state = CheckboxState.UNCHECKED;
		} else {
			tempNewState.state = CheckboxState.INDETERMINATE;
		}

		updateParent(parent.id); // Recursively update the parent
	};

	// Unified function to set the state of an item and its children
	const setItemState = (id: number, state: CheckboxState) => {
		const tempNewState: ItemState | undefined = newState.find((i: ItemState) => i.id === id);
		if (!tempNewState) return;
		tempNewState.state = state;

		// Recursively set the state for all children
		items
			.filter((i) => i.parentId === id)
			.map((i) => i.id)
			.forEach((childId) => setItemState(childId, state));

		updateParent(id); // Update the parent after setting the state
	};

	// Actual logic to toggle the state of the clicked item
	const itemState = getItemState(clickedId);
	if (itemState === CheckboxState.CHECKED) {
		setItemState(clickedId, CheckboxState.UNCHECKED); // Set to unchecked
	} else {
		setItemState(clickedId, CheckboxState.CHECKED); // Set to checked
	}

	return newState;
};
