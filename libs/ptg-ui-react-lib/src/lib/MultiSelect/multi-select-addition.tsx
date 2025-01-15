/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Select Component, we are using react-select package to achive the functionality.
 * https://react-select.com/home
 */

import Select, { GroupBase, MultiValueProps, OptionProps } from 'react-select';
import { components } from 'react-select';

export interface PtgUiMultiSelectCheckboxProps {
  name?: string;
  value?: string;
  id?: string;
  className?: string;
  list: { label: any; value: any; name: string }[];
  onBlur?: any;
  isMulti?: boolean;
  onChange?: any;
  placeholder?: String;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  closeMenuOnSelect?: boolean;
}
const Option = (
  PtgUiSelectProps: JSX.IntrinsicAttributes &
    OptionProps<unknown, boolean, GroupBase<unknown>>
) => {
  return (
    <div>
      <components.Option {...PtgUiSelectProps}>
        <input
          type="checkbox"
          checked={PtgUiSelectProps.isSelected}
          onChange={() => null}
        />{' '}
        <label>{PtgUiSelectProps.label}</label>
      </components.Option>
    </div>
  );
};
export function PtgUiMultiSelectCheckbox({
  id,
  name,
  className,
  list,
  onBlur,
  isMulti,
  onChange,
  placeholder,
  isSearchable,
  isDisabled,
  isClearable,
  closeMenuOnSelect,
}: PtgUiMultiSelectCheckboxProps) {
  return (
    <Select
      name={name}
      options={list}
      isMulti={isMulti}
      onBlur={onBlur}
      id={id}
      components={{ Option }}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      closeMenuOnSelect={closeMenuOnSelect}
      isClearable={isClearable}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: '#002144',
        },
      })}
    />
  );
}

export default PtgUiMultiSelectCheckbox;
