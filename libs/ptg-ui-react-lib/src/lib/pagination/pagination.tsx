import React, { useState, useEffect } from 'react';
import { usePagination, DOTS } from './usePagination';
import { PtgUiPaginationProps } from '@ptg-react-libs/interfaces';
import './pagination.css';

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
	const [currentPage, setCurrentPage] = useState(pageNumber);

	useEffect(() => {
		setCurrentPage(pageNumber);
	}, [pageNumber]);

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

	const paginationRange = PaginationRange();

	return (
		<nav aria-label="Pagination">
			<ul className="pagination justify-content-center mt-3">
			<li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
				<button className="page-link" onClick={previousPage} disabled={currentPage === 1} aria-label="Previous Page">
					{previousBtnText}
				</button>
			</li>
			{paginationRange?.map((num, index) => {
				if (num === DOTS) {
					return (
						<li className="pagination-item dots" key={`dots-${num}-${index}`}>
							<span className="page-link" aria-hidden="true">
								&#8230;
							</span>
						</li>
					);
				}

				return (
					<li className={`page-item ${currentPage === num ? 'active' : ''}`} key={num}>
						<button
							className="page-link"
							onClick={() => gotoPage(num)}
							aria-current={currentPage === num ? 'page' : undefined}
						>
							{num}
						</button>
					</li>
				);
			})}

			<li
				className={`page-item ${
					dataCount && pageSize && Math.ceil(dataCount / pageSize) === currentPage ? 'disabled' : ''
				}`}
			>
				<button
					className="page-link"
					onClick={nextPage}
					disabled={!!(dataCount && pageSize && Math.ceil(dataCount / pageSize) === currentPage)}
					aria-label="Next Page"
				>
					{nextBtnText}
				</button>
			</li>
			</ul>
		</nav>
	);
};
