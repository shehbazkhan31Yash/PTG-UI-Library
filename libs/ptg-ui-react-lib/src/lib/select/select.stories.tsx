import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiSelect } from './select';
import { PtgUiSelectProps } from '@ptg-react-libs/interfaces';

export default {
  title: 'Components/Select',
  component: PtgUiSelect,
  argTypes: {
    name: {
      control: 'text',
      description: 'The name attribute for the select input',
    },
    value: {
      control: 'text',
      description: 'The selected value of the select input',
    },
    id: {
      control: 'text',
      description: 'The id attribute for the select input',
    },
    className: {
      control: 'text',
      description: 'The class name for the select input',
    },
    list: {
      control: 'object',
      description: 'Array of options for the dropdown',
    },
  },
} as Meta<typeof PtgUiSelect>;

const Template: StoryFn<PtgUiSelectProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <PtgUiSelect
      {...args}
      value={selectedValue}
      onChange={handleChange}
    />
  );
};

// Default select dropdown story
export const DefaultSelectDropdown = Template.bind({});
DefaultSelectDropdown.args = {
  name: 'default-select',
  id: 'select-id',
  className: 'default-select',
  list: [
    { id: '1', label: 'Option 1', value: '1' },
    { id: '2', label: 'Option 2', value: '2' },
    { id: '3', label: 'Option 3', value: '3' },
  ],
  value: '',
  placeholder:'',
  disabled: false,
};
export const Id = Template.bind({});
Id.args = {
  name: 'id-select',
  id: 'id',
  className: 'id-select',
  list: [
    { id: '1', label: 'Option 1', value: '1' },
    { id: '2', label: 'Option 2', value: '2' },
    { id: '3', label: 'Option 3', value: '3' },
  ],
  value: '', // No selection
  placeholder:'',
  disabled: false,
};

export const ClassName = Template.bind({});
ClassName.args = {
  name: 'className-select',
  id: 'className',
  className: 'className-select',
  list: [
    { id: '1', label: 'Option 1', value: '1' },
    { id: '2', label: 'Option 2', value: '2' },
    { id: '3', label: 'Option 3', value: '3' },
  ],
  value: '', // No selection
  placeholder:'',
  disabled: false,
};

// Pre-selected dropdown story
export const PreSelectedDropdown = Template.bind({});
PreSelectedDropdown.args = {
  name: 'preselected-select',
  id: 'preselect-id',
  className: 'preselected-select',
  list: [
    { id: '1', label: 'Option 1', value: '1' },
    { id: '2', label: 'Option 2', value: '2' },
    { id: '3', label: 'Option 3', value: '3' },
  ],
  value: '2', // Pre-selected value
  placeholder:'',
  disabled: false,
};

// placeholder dropdown story
export const PlaceholderDropdown = Template.bind({});
PlaceholderDropdown.args = {
  name: 'placeholder-select',
  id: 'placeholder-id',
  className: 'placeholder-select',
  list: [
    { id: '1', label: 'Option 1', value: '1' },
    { id: '2', label: 'Option 2', value: '2' },
    { id: '3', label: 'Option 3', value: '3' },
  ],
  value: '', // No selection
  placeholder: 'Select an option',
  disabled: false,
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  name: 'disabled-select',
  id: 'disabled-id',
  className: 'disabled-select',
  list: [
    { id: '1', label: 'Option 1', value: '1' },
    { id: '2', label: 'Option 2', value: '2' },
    { id: '3', label: 'Option 3', value: '3' },
  ],
  value: '', // No selection
  placeholder:'',
  disabled: true,
};

