// PtgUiCheckbox.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PtgUiCheckbox from './checks';
import { PtgUiCheckboxProps } from '@ptg-react-libs/interfaces';

export default {
  title: 'Components/CheckboxComponent',
  component: PtgUiCheckbox,
} as Meta;

// Template for the checkbox component stories
const Template: StoryFn<PtgUiCheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    args.onChange?.(event);
  };

  return <PtgUiCheckbox {...args} checked={checked} onChange={handleChange} />;
};

// Default checkbox
export const Default = Template.bind({});
Default.args = {
  id: 'default-checkbox',
  name: 'defaultCheckbox',
  value: 'default',
  className: 'custom-checkbox',
  htmlFor: 'default-checkbox',
  checked: false,
};

// Label checkbox
export const Label = Template.bind({});
Label.args = {
  id: 'label-checkbox',
  name: 'labelCheckbox',
  label: 'Label Checkbox',
  value: 'label',
  className: 'custom-checkbox',
  htmlFor: 'label-checkbox',
  checked: false,
};

// Checked checkbox
export const Checked = Template.bind({});
Checked.args = {
  id: 'checked-checkbox',
  name: 'checkedCheckbox',
  label: 'Checked Checkbox',
  value: 'checked',
  className: 'custom-checkbox',
  htmlFor: 'checked-checkbox',
  checked: true,
};



