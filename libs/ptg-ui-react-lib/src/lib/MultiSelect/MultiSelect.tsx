/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Select Component, we are using multiselect-react-dropdown package to achive the functionality.
 *https://www.npmjs.com/package/multiselect-react-dropdown
 */

import React from 'react';
import './MultiSelect.scss';

export interface PtgUiMultiSelectProps {
  name?: string;
  list?: any;
  onSelect?: any;
  selectedOption?: string;
  singleSelect?: boolean;
  className?: string;
  placeholder?: string;
  width?: string;
  multiSelectOptions?: any;
  dropdownOpen?: boolean;
  toggleDropdown?: any;
  removeItem?: any;
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
    }: any = this.props;

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
              style={{ width: width }}
            >
              <option value="">{placeholder}</option>
              {list?.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </form>
        ) : (
          <>
            <div>
              <div
                onClick={toggleDropdown}
                className="select-btn"
                style={{ width: width }}
              >
                {multiSelectOptions?.length > 0
                  ? multiSelectOptions?.map((selected) => (
                      <span className="item-content">
                        <span className="selected-item">{selected}</span>
                        <span
                          className="remove-item"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeItem(selected);
                          }}
                        >
                          x
                        </span>
                      </span>
                    ))
                  : placeholder}
                <span></span>
              </div>
              {dropdownOpen && (
                <>
                  <div className="items">
                    {list.map((option) => (
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
                </>
              )}
            </div>
          </>
        )}
      </>
    );
  }
}
