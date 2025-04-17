import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { PtgUiPagination } from './pagination';

describe('PtgUiPagination', () => {
	const mockPageIndex = jest.fn();

	const defaultProps = {
		dataCount: 50,
		pageNumber: 1,
		pageIndex: mockPageIndex,
		pageSize: 10,
		siblingCount: 1,
		previousBtnText: 'Previous',
		nextBtnText: 'Next',
	};

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should render pagination component correctly', () => {
		const { getByText } = render(<PtgUiPagination {...defaultProps} />);
		expect(getByText('Previous')).toBeInTheDocument();
		expect(getByText('Next')).toBeInTheDocument();
	});

	it('should disable "Previous" button on the first page', () => {
		const { getByText } = render(<PtgUiPagination {...defaultProps} pageNumber={1} />);
		expect(getByText('Previous').closest('li')).toHaveClass('disabled');
	});

	it('should disable "Next" button on the last page', () => {
		const { getByText } = render(<PtgUiPagination {...defaultProps} pageNumber={5} />);
		expect(getByText('Next').closest('li')).toHaveClass('disabled');
	});

	it('should call pageIndex with the correct page number when a page is clicked', () => {
		const { getByText } = render(<PtgUiPagination {...defaultProps} />);
		fireEvent.click(getByText('2'));
		expect(mockPageIndex).toHaveBeenCalledWith(2);
	});

	it('should call pageIndex with the correct page number when "Previous" button is clicked', () => {
		const { getByText } = render(<PtgUiPagination {...defaultProps} pageNumber={2} />);
		fireEvent.click(getByText('Previous'));
		expect(mockPageIndex).toHaveBeenCalledWith(1);
	});

	it('should call pageIndex with the correct page number when "Next" button is clicked', () => {
		const { getByText } = render(<PtgUiPagination {...defaultProps} pageNumber={2} />);
		fireEvent.click(getByText('Next'));
		expect(mockPageIndex).toHaveBeenCalledWith(3);
	});

/* 	it('should render dots when siblingCount is set', () => {
		const { getByText } = render(<PtgUiPagination {...defaultProps} siblingCount={1} />);
		expect(document.querySelector('.pagination')?.innerHTML).toContain('…');
	});
 */
	it('should update current page when pageNumber prop changes', () => {
		const { rerender, getByText } = render(<PtgUiPagination {...defaultProps} pageNumber={1} />);
		rerender(<PtgUiPagination {...defaultProps} pageNumber={3} />);
		expect(getByText('3').closest('li')).toHaveClass('active');
	});
});
