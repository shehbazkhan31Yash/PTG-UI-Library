import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PtgUiTransferList } from './TransferList';
import { TransferItem } from '@ptg-react-libs/interfaces';

describe('PtgUiTransferList Component', () => {
	const mockLeftItems: TransferItem[] = [
		{ id: '1', label: 'Item 1' },
		{ id: '2', label: 'Item 2' },
		{ id: '3', label: 'Item 3' },
	];

	const mockRightItems: TransferItem[] = [
		{ id: '4', label: 'Item 4' },
		{ id: '5', label: 'Item 5' },
	];

	const mockProps = {
		name: 'demo-transfer',
		searchLeft: '',
		searchRight: '',
		leftItems: mockLeftItems,
		rightItems: mockRightItems,
		selectedLeft: new Set<string>(),
		selectedRight: new Set<string>(),
		onSearchLeft: jest.fn(),
		onSearchRight: jest.fn(),
		onToggleLeft: jest.fn(),
		onToggleRight: jest.fn(),
		onMoveSelectedToRight: jest.fn(),
		onMoveSelectedToLeft: jest.fn(),
		onMoveAllToRight: jest.fn(),
		onMoveAllToLeft: jest.fn(),
		disabled: false,
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders transfer list with two panels', () => {
		render(<PtgUiTransferList {...mockProps} />);
		expect(screen.getByTestId('demo-transfer')).toBeInTheDocument();
		expect(screen.getByText('Available Items')).toBeInTheDocument();
		expect(screen.getByText('Selected Items')).toBeInTheDocument();
	});

	it('renders left and right items', () => {
		render(<PtgUiTransferList {...mockProps} />);
		mockLeftItems.forEach(item => {
			expect(screen.getByText(item.label)).toBeInTheDocument();
		});
		mockRightItems.forEach(item => {
			expect(screen.getByText(item.label)).toBeInTheDocument();
		});
	});

	it('renders checkboxes for all items', () => {
		render(<PtgUiTransferList {...mockProps} />);
		mockLeftItems.forEach(item => {
			expect(screen.getByTestId(`transfer-checkbox-${item.id}`)).toBeInTheDocument();
		});
		mockRightItems.forEach(item => {
			expect(screen.getByTestId(`transfer-checkbox-${item.id}`)).toBeInTheDocument();
		});
	});

	it('calls onToggleLeft when left item checkbox is clicked', () => {
		render(<PtgUiTransferList {...mockProps} />);
		fireEvent.click(screen.getByTestId('transfer-checkbox-1'));
		expect(mockProps.onToggleLeft).toHaveBeenCalledWith('1');
	});

	it('calls onToggleRight when right item checkbox is clicked', () => {
		render(<PtgUiTransferList {...mockProps} />);
		fireEvent.click(screen.getByTestId('transfer-checkbox-4'));
		expect(mockProps.onToggleRight).toHaveBeenCalledWith('4');
	});

	it('displays checked state for selected items', () => {
		const selectedLeft = new Set(['1', '2']);
		render(<PtgUiTransferList {...mockProps} selectedLeft={selectedLeft} />);
		expect(screen.getByTestId('transfer-checkbox-1')).toBeChecked();
		expect(screen.getByTestId('transfer-checkbox-2')).toBeChecked();
		expect(screen.getByTestId('transfer-checkbox-3')).not.toBeChecked();
	});

	it('calls onSearchLeft when left search input changes', () => {
		render(<PtgUiTransferList {...mockProps} />);
		const searchInputs = screen.getAllByTestId('demo-transfer-search');
		fireEvent.change(searchInputs[0], { target: { value: 'Item 1' } });
		expect(mockProps.onSearchLeft).toHaveBeenCalledWith('Item 1');
	});

	it('calls onSearchRight when right search input changes', () => {
		render(<PtgUiTransferList {...mockProps} />);
		const searchInputs = screen.getAllByTestId('demo-transfer-search');
		fireEvent.change(searchInputs[1], { target: { value: 'Item 4' } });
		expect(mockProps.onSearchRight).toHaveBeenCalledWith('Item 4');
	});

	it('filters left items based on search text', () => {
		render(<PtgUiTransferList {...mockProps} searchLeft="Item 1" />);
		expect(screen.getByText('Item 1')).toBeInTheDocument();
		expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
	});

	it('filters right items based on search text', () => {
		render(<PtgUiTransferList {...mockProps} searchRight="Item 4" />);
		expect(screen.getByText('Item 4')).toBeInTheDocument();
		expect(screen.queryByText('Item 5')).not.toBeInTheDocument();
	});

	it('calls control button handlers', () => {
		render(<PtgUiTransferList {...mockProps} />);
		fireEvent.click(screen.getByTestId('move-all-right'));
		expect(mockProps.onMoveAllToRight).toHaveBeenCalled();
		
		fireEvent.click(screen.getByTestId('move-all-left'));
		expect(mockProps.onMoveAllToLeft).toHaveBeenCalled();
	});

	it('disables move buttons based on selection state', () => {
		render(<PtgUiTransferList {...mockProps} />);
		expect(screen.getByTestId('move-selected-right')).toBeDisabled();
		expect(screen.getByTestId('move-selected-left')).toBeDisabled();
	});

	it('enables move buttons when items are selected', () => {
		const selectedLeft = new Set(['1']);
		const selectedRight = new Set(['4']);
		render(<PtgUiTransferList {...mockProps} selectedLeft={selectedLeft} selectedRight={selectedRight} />);
		expect(screen.getByTestId('move-selected-right')).not.toBeDisabled();
		expect(screen.getByTestId('move-selected-left')).not.toBeDisabled();
	});

	it('renders correctly with empty lists', () => {
		render(<PtgUiTransferList {...mockProps} leftItems={[]} rightItems={[]} />);
		expect(screen.getByText('Available Items')).toBeInTheDocument();
		expect(screen.getByText('Selected Items')).toBeInTheDocument();
	});
});