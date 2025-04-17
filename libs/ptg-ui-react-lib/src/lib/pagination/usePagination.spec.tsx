import { usePagination, DOTS } from './usePagination';
import '@testing-library/jest-dom';

describe('usePagination', () => {
	it('should return the full range when total pages are less than or equal to the total page numbers to display', () => {
		const result = usePagination({ dataCount: 50, pageSize: 10, siblingCount: 0, currentPage: 1 });
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	it('should show left dots when there are more pages on the left', () => {
		const result = usePagination({ dataCount: 100, pageSize: 10, siblingCount: 1, currentPage: 5 });
		expect(result).toEqual([1, DOTS, 4, 5, 6, DOTS, 10]);
	});

	it('should show right dots when there are more pages on the right', () => {
		const result = usePagination({ dataCount: 100, pageSize: 10, siblingCount: 1, currentPage: 1 });
		expect(result).toEqual([1, 2, 3, 4, 5, DOTS, 10]);
	});

	it('should show both left and right dots when there are more pages on both sides', () => {
		const result = usePagination({ dataCount: 100, pageSize: 10, siblingCount: 1, currentPage: 5 });
		expect(result).toEqual([1, DOTS, 4, 5, 6, DOTS, 10]);
	});

	it('should handle edge case when siblingCount is 0', () => {
		const result = usePagination({ dataCount: 100, pageSize: 10, siblingCount: 0, currentPage: 5 });
		expect(result).toEqual([1, DOTS, 5, DOTS, 10]);
	});

	it('should handle edge case when currentPage is the first page', () => {
		const result = usePagination({ dataCount: 100, pageSize: 10, siblingCount: 1, currentPage: 1 });
		expect(result).toEqual([1, 2, 3, 4, 5, DOTS, 10]);
	});

	it('should handle edge case when currentPage is the last page', () => {
		const result = usePagination({ dataCount: 100, pageSize: 10, siblingCount: 1, currentPage: 10 });
		expect(result).toEqual([1, DOTS,6,7, 8, 9, 10]);
	});

	it('should handle edge case when dataCount is 0', () => {
		const result = usePagination({ dataCount: 0, pageSize: 10, siblingCount: 1, currentPage: 1 });
		expect(result).toEqual([]);
	});

	it('should handle edge case when pageSize is greater than dataCount', () => {
		const result = usePagination({ dataCount: 5, pageSize: 10, siblingCount: 1, currentPage: 1 });
		expect(result).toEqual([1]);
	});
});
