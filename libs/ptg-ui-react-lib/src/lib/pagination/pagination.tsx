/**
 * @since Oct 2022
 * @author Manish Patidar
 * @desc Reusable pagination Component
 *
 */
// import { useState } from 'react';
import React from 'react';
import { usePagination, DOTS } from './usePagination';
import './pagination.scss';

interface PtgUiPaginationProps {
	data?: any;
	pageNumber?: number;
	dataCount?: number;
	pageIndex?: any;
	siblingCount?: number;
	pageSize?: number;
	previousBtnText?: string;
	nextBtnText?: string;
}
export class PtgUiPagination extends React.Component<PtgUiPaginationProps> {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: props?.pageNumber,
		};
	}

	override render() {
		const {
			data = [],
			dataCount = 1,
			pageNumber = 1,
			pageIndex,
			pageSize = 1,
			siblingCount,
			previousBtnText,
			nextBtnText,
		} = this.props;
		const { currentPage }: any = this.state;

		const paginationRange = () => {
			return usePagination({
				currentPage: currentPage,
				dataCount: dataCount,
				siblingCount: siblingCount,
				pageSize: pageSize,
			});
		};

		const previousPage = () => {
			//setCurrentPage(Number(currentPage) - 1);
			this.setState({ currentPage: Number(currentPage) - 1 });
			pageIndex(Number(currentPage) - 1);
		};

		const nextPage = () => {
			if (dataCount && pageSize && Math.ceil(dataCount / pageSize) > Number(currentPage)) {
				this.setState({ currentPage: Number(currentPage) + 1 });
				//setCurrentPage(Number(currentPage) + 1);
				pageIndex(Number(currentPage) + 1);
			}
		};

		const gotoPage = (number) => {
			this.setState({ currentPage: number });
			//setCurrentPage(number);
			pageIndex(number);
		};

		return (
			<>
				<ul className="pagination  justify-content-center mt-3">
					<li className={`page-item ${pageNumber === 1 ? 'disabled' : ''}`}>
						<a className="page-link" onClick={() => previousPage()}>
							{previousBtnText}
						</a>
					</li>
					{paginationRange()?.map((num) => {
						if (num === DOTS) {
							return (
								<li className="pagination-item dots">
									<a className="page-link">&#8230;</a>
								</li>
							);
						}

						return (
							<li className={`page-item ${pageNumber === num ? 'active' : ''}`}>
								<a className="page-link" onClick={() => gotoPage(num)}>
									{num}
								</a>
							</li>
						);
					})}

					<li
						className={`page-item ${
							dataCount && pageSize && Math.ceil(dataCount / pageSize) === Number(currentPage) ? 'disabled' : ''
						}`}
					>
						<a className="page-link" onClick={() => nextPage()}>
							{nextBtnText}
						</a>
					</li>
				</ul>
			</>
		);
	}
}
