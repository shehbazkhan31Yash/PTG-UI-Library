import { updateItemStates } from './updateItemStates';
import { CheckboxState, Item, ItemState } from '../CheckboxList/checkbox.interface';

describe('updateItemStates', () => {
	const items: Item[] = [
		{ id: 1, name: 'Parent 1', parentId: 0 },
		{ id: 2, name: 'Child 1', parentId: 1 },
		{ id: 3, name: 'Child 2', parentId: 1 },
		{ id: 4, name: 'Child 3', parentId: 2 },
		{ id: 5, name: 'Child 4', parentId: 2 },
	];

	const initialState: ItemState[] = [
		{ id: 1, state: CheckboxState.UNCHECKED },
		{ id: 2, state: CheckboxState.UNCHECKED },
		{ id: 3, state: CheckboxState.UNCHECKED },
		{ id: 4, state: CheckboxState.UNCHECKED },
		{ id: 5, state: CheckboxState.UNCHECKED },
	];

	it('should check a single item and update parent states correctly', () => {
		const newState = updateItemStates(initialState, items, 4);

		expect(newState.find((i) => i.id === 4)?.state).toBe(CheckboxState.CHECKED);
		expect(newState.find((i) => i.id === 2)?.state).toBe(CheckboxState.INDETERMINATE);
		expect(newState.find((i) => i.id === 1)?.state).toBe(CheckboxState.INDETERMINATE);
	});

	it('should uncheck a single item and update parent states correctly', () => {
		const checkedState: ItemState[] = [
			{ id: 1, state: CheckboxState.CHECKED },
			{ id: 2, state: CheckboxState.CHECKED },
			{ id: 3, state: CheckboxState.CHECKED },
			{ id: 4, state: CheckboxState.CHECKED },
			{ id: 5, state: CheckboxState.CHECKED },
		];

		const newState = updateItemStates(checkedState, items, 4);

		expect(newState.find((i) => i.id === 4)?.state).toBe(CheckboxState.UNCHECKED);
		expect(newState.find((i) => i.id === 2)?.state).toBe(CheckboxState.INDETERMINATE);
		expect(newState.find((i) => i.id === 1)?.state).toBe(CheckboxState.INDETERMINATE);
	});

	it('should check all children when a parent is checked', () => {
		const newState = updateItemStates(initialState, items, 2);

		expect(newState.find((i) => i.id === 2)?.state).toBe(CheckboxState.CHECKED);
		expect(newState.find((i) => i.id === 4)?.state).toBe(CheckboxState.CHECKED);
		expect(newState.find((i) => i.id === 5)?.state).toBe(CheckboxState.CHECKED);
	});

	it('should uncheck all children when a parent is unchecked', () => {
		const checkedState: ItemState[] = [
			{ id: 1, state: CheckboxState.CHECKED },
			{ id: 2, state: CheckboxState.CHECKED },
			{ id: 3, state: CheckboxState.CHECKED },
			{ id: 4, state: CheckboxState.CHECKED },
			{ id: 5, state: CheckboxState.CHECKED },
		];

		const newState = updateItemStates(checkedState, items, 2);

		expect(newState.find((i) => i.id === 2)?.state).toBe(CheckboxState.UNCHECKED);
		expect(newState.find((i) => i.id === 4)?.state).toBe(CheckboxState.UNCHECKED);
		expect(newState.find((i) => i.id === 5)?.state).toBe(CheckboxState.UNCHECKED);
	});

	it('should set parent state to indeterminate if children have mixed states', () => {
		const mixedState: ItemState[] = [
			{ id: 1, state: CheckboxState.UNCHECKED },
			{ id: 2, state: CheckboxState.INDETERMINATE },
			{ id: 3, state: CheckboxState.UNCHECKED },
			{ id: 4, state: CheckboxState.CHECKED },
			{ id: 5, state: CheckboxState.UNCHECKED },
		];

		const newState = updateItemStates(mixedState, items, 5);

		expect(newState.find((i) => i.id === 1)?.state).toBe(CheckboxState.INDETERMINATE);
		expect(newState.find((i) => i.id === 2)?.state).toBe(CheckboxState.CHECKED);
	});
});
