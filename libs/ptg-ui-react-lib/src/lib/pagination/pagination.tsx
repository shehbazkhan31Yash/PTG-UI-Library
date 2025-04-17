import React, { useState, useEffect } from 'react';
import { usePagination, DOTS } from './usePagination';
import './pagination.css';
import { PtgUiPaginationProps } from '@ptg-react-libs/interfaces';

/**
 * PtgUiPagination Component
 *
 * This component renders a pagination control for navigating through pages of data.
 * It supports customizable page size, sibling count, and navigation buttons.
 *
 * Props:
 * - dataCount: Total number of data items.
 * - pageNumber: Current page number (default is 1).
 * - pageIndex: Callback function to handle page changes.
 * - pageSize: Number of items per page (default is 1).
 * - siblingCount: Number of sibling pages to show around the current page.
 * - previousBtnText: Text for the "Previous" button.
 * - nextBtnText: Text for the "Next" button.
 */

export const PtgUiPagination: React.FC<PtgUiPaginationProps> = ({
	dataCount = 1,
	pageNumber = 1,
	pageIndex,
	pageSize = 1,
	siblingCount,
	previousBtnText,
	nextBtnText,
}) => {
	// Use state hook to manage current page
	const [currentPage, setCurrentPage] = useState(pageNumber);

	// Effect to update currentPage when pageNumber prop changes
	useEffect(() => {
		setCurrentPage(pageNumber);
	}, [pageNumber]); // Added dependency to update when pageNumber changes

	const PaginationRange = () => {
		return usePagination({
			currentPage: currentPage,
			dataCount: dataCount,
			siblingCount: siblingCount,
			pageSize: pageSize,
		});
	};

	const previousPage = () => {
		if (currentPage > 1) {
			const newPage = currentPage - 1;
			setCurrentPage(newPage);
			if (typeof pageIndex === 'function') {
				pageIndex(newPage);
			}
		}
	};

	const nextPage = () => {
		if (dataCount && pageSize && Math.ceil(dataCount / pageSize) > currentPage) {
			const newPage = currentPage + 1;
			setCurrentPage(newPage);
			if (typeof pageIndex === 'function') {
				pageIndex(newPage);
			}
		}
	};

	const gotoPage = (number: number) => {
		setCurrentPage(number);
		if (typeof pageIndex === 'function') {
			pageIndex(number);
		}
	};

	const paginationRange = PaginationRange(); // Calculate pagination range once

	return (
		<ul className="pagination justify-content-center mt-3">
			<li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
				<a className="page-link" onClick={previousPage}>
					{previousBtnText}
				</a>
			</li>
			{paginationRange?.map((num, index) => {
				if (num === DOTS) {
					return (
						<li className="pagination-item dots" key={`dots-${index}`}>
							<a className="page-link">&#8230;</a>
						</li>
					);
				}

				return (
					<li className={`page-item ${currentPage === num ? 'active' : ''}`} key={num}>
						<a className="page-link" onClick={() => gotoPage(num)}>
							{num}
						</a>
					</li>
				);
			})}

			<li
				className={`page-item ${
					dataCount && pageSize && Math.ceil(dataCount / pageSize) === currentPage ? 'disabled' : ''
				}`}
			>
				<a className="page-link" onClick={nextPage}>
					{nextBtnText}
				</a>
			</li>
		</ul>
	);
};
