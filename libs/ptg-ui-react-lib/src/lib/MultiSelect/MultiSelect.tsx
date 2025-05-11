/**
 * @since March 2022
 * @author Harsha Zalawa
 * @updatedby Manish Patidar
 * @desc Reusable Select Component, we are using multiselect-react-dropdown package to achive the functionality.
 *https://www.npmjs.com/package/multiselect-react-dropdown
 */

import React from 'react';
import './MultiSelect.scss';

export interface ListItem {
    value: string | number;
    label: string;
}

export interface PtgUiMultiSelectProps {
    name?: string;
    list?: ListItem[]; 
    onSelect?: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void; 
    selectedOption?: string;
    singleSelect?: boolean;
    className?: string;
    placeholder?: string;
    width?: string;
    multiSelectOptions?: (string | number)[]; 
    dropdownOpen?: boolean;
    toggleDropdown?: () => void; 
    removeItem?: (item: string | number) => void; 
}

export class PtgUiSelectbox extends React.Component<PtgUiMultiSelectProps> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	override render() {
		const {
			name,
			list,
			onSelect,
			selectedOption,
			width,
			multiSelectOptions,
			toggleDropdown,
			dropdownOpen,
			singleSelect,
			removeItem,
			placeholder,
			className,
		} = this.props;

		return (
			<div>
				{singleSelect ? (
					<form>
						<select
							name={name}
							id="single-select"
							value={selectedOption}
							onChange={onSelect}
							className="single-select"
							style={{ width: width }}
						>
							<option value="">{placeholder}</option>
							{list?.map((item) => {
								return (
									<option key={`index-${item?.value}`} value={item?.value}>
										{item?.label}
									</option>
								);
							})}
						</select>
					</form>
				) : (
					<div className={className}>
							<button onClick={toggleDropdown} className="select-btn" style={{ width: width }}>
								{multiSelectOptions && multiSelectOptions.length > 0
									? multiSelectOptions?.map((selected) => (
											<span className="item-content" key={`index-${selected}`}>
												<span className="selected-item">{selected}</span>
												<button
													type="button"
													className="remove-item"
													onClick={(e) => {
														e.stopPropagation();
														removeItem?.(selected);
													}}
													onKeyDown={(e) => {
														if (e.key === 'Enter' || e.key === ' ') {
															e.preventDefault();
															removeItem?.(selected);
														}
													}}
													aria-label={`Remove ${selected}`}
												>
													x
												</button>
											</span>
									  ))
									: placeholder}
								<span></span>
							</button>
							{dropdownOpen && (
								<div className="items" style={{ width: width }}>
										{(list ?? []).map((option) => (
											<div key={option.value}>
												<label>
													<input
														className="checkboxs"
														type="checkbox"
														value={option.value}
														checked={multiSelectOptions?.includes(option.value)}
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
			</div>
		);
	}
}
