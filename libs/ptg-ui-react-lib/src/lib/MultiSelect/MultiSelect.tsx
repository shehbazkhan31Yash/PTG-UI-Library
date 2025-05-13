import React from 'react';
import { PtgUiMultiSelectProps } from '@ptg-react-libs/interfaces';
import './MultiSelect.css';

export const PtgUiSelectbox: React.FC<PtgUiMultiSelectProps> = ({
	name,
	list = [],
	onSelect,
	selectedOption,
	width,
	multiSelectOptions = [],
	toggleDropdown,
	dropdownOpen,
	singleSelect,
	removeItem,
	placeholder,
}) => {
	return (
		<>
			{singleSelect ? (
				<form>
					<select
						name={name}
						id="single-select"
						value={selectedOption}
						onChange={onSelect}
						className="single-select"
						style={{ width }}
					>
						<option value="">{placeholder}</option>
						{list.map((item) => (
							<option key={`index-${item.value}`} value={item.value}>
								{item.label}
							</option>
						))}
					</select>
				</form>
			) : (
				<div>
					<button
						onClick={toggleDropdown}
						className="select-btn"
						style={{ width }}
						aria-expanded={dropdownOpen}
						aria-haspopup="listbox"
					>
						{multiSelectOptions.length > 0
							? multiSelectOptions.map((selected) => (
									<span className="item-content" key={`index-${selected}`}>
										<span className="selected-item">{selected}</span>
										<span
											className="remove-item"
											onClick={(e) => {
												e.stopPropagation();
												removeItem?.(selected);
											}}
										>
											x
										</span>
									</span>
							  ))
							: placeholder}
						<span></span>
					</button>
					{dropdownOpen && (
						<div className="items" style={{ width }}>
							{list.map((option) => (
								<div key={option.value}>
									<label>
										<input
											className="checkboxs"
											type="checkbox"
											value={option.value}
											checked={multiSelectOptions.includes(option.value)}
											onChange={onSelect}
										/>
										{option.label}
									</label>
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</>
	);
};
