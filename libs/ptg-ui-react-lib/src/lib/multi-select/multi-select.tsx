/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Select Component, we are using multiselect-react-dropdown package to achive the functionality.
 *https://www.npmjs.com/package/multiselect-react-dropdown
 */

import React from 'react';
import './multi-select.scss';
//import Multiselect from 'multiselect-react-dropdown';

export interface PtgUiMultiSelectProps {
  name?: string;
  selectedValues?: any;
  id?: string;
  className?: string;
  list: { value: any; label: any }[];
  showCheckbox?: boolean;
  singleSelect?: boolean;
  onSelect?: any;
  placeholder?: string;
  onRemove?: any;
  isMultiSelect?: boolean;
}

//export function PtgUiSelectbox({id,className,selectedValues,list,showCheckbox,singleSelect,onSelect,placeholder, onRemove}: PtgUiMultiSelectProps) {
export class PtgUiSelectbox extends React.Component<PtgUiMultiSelectProps> {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      isOpen: false,
    };
  }

  override render() {
    const { selectedOption, isOpen }: any = this.state;
    const {
      name,
      list,
      isMultiSelect = false,
      showCheckbox,
      singleSelect,
      onSelect,
      placeholder,
      onRemove,
    }: any = this.props;

    // const handleSelectChange = (event) => {
    //   this.setState({ selectedOption: event.target.value });
    // };

    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
    ];

    // Handler for when the select value changes
    const handleSelectChange = (event) => {
      console.log('========1', event.target.value);
      const value = event.target.value;
      this.setState((prevState: any) => {
        const { selectedOption }: any = prevState;
        if (selectedOption?.includes(value)) {
          // If already selected, remove it
          console.log(
            '========2',
            selectedOption?.filter((option) => option !== value)
          );
          return {
            selectedOption: selectedOption?.filter(
              (option) => option !== value
            ),
          };
        } else {
          // If not selected, add it
          console.log('========3', [...selectedOption, value]);
          return { selectedOption: [...selectedOption, value] };
        }
      });
    };

    const toggleDropdown = () => {
      this.setState({ isOpen: !isOpen });
    };

    return (
      <form>
        {isMultiSelect ? (
          <div>
            <button onClick={toggleDropdown}>
              {selectedOption?.length > 0
                ? `Selected: ${selectedOption?.join(', ')}`
                : 'Select Options'}
            </button>
            {isOpen && (
              <div
                style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  width: '200px',
                  position: 'absolute',
                  backgroundColor: 'white',
                }}
              >
                {options.map((option, index) => (
                  <div key={index}>
                    <label>
                      <input
                        type="checkbox"
                        value={option?.value}
                        checked={selectedOption?.includes(option?.value)}
                        onChange={handleSelectChange}
                      />
                      {option?.label}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <select
            name={name}
            id="single-select"
            value={selectedOption}
            onChange={handleSelectChange}
            className="single-select"
          >
            <option value="">Select</option>
            {list?.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        )}
      </form>
    );
  }

  // return (
  //   <Multiselect
  //   customCloseIcon={singleSelect}
  //   options={list}
  //   displayValue="label"
  //   id={id}
  //   className={className}
  //   showCheckbox={showCheckbox}
  //   singleSelect={singleSelect}
  //   onSelect={onSelect}
  //   placeholder={placeholder}
  //   selectedValues={selectedValues}
  //   onRemove={onRemove}
  //   avoidHighlightFirstOption={true}
  // />

  // );
}

// export default PtgUiSelectbox;
