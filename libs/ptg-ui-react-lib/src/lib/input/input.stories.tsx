// PtgUiInput.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PtgUiInput from './input';
import { PtgUiInputProps } from '@ptg-react-libs/interfaces';
export default {
  title: 'Components/InputComponent',
  component: PtgUiInput,
} as Meta;

// Template for the component
const Template: StoryFn<PtgUiInputProps> = (args) => <PtgUiInput {...args} />;

// Default Input
export const Default = Template.bind({});
Default.args = {
  type: 'text',
  value: '',
  placeholder: 'Enter text here',
  disabled: false,
  required: false,
  className: 'default-input',
  inputsize: 'md',
  name: 'defaultInput',
};

// Input with Placeholder
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  type: 'text',
  value: '',
  placeholder: 'Your email',
  disabled: false,
  required: true,
  className: 'placeholder-input',
  inputsize: 'lg',
  name: 'placeholderInput',
};

// Disabled Input
export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  value: '',
  placeholder: 'Disabled input',
  disabled: true,
  required: false,
  className: 'disabled-input',
  inputsize: 'sm',
  name: 'disabledInput',
};

// Required Input
export const Required = Template.bind({});
Required.args = {
  type: 'text',
  value: '',
  placeholder: 'Required input',
  disabled: false,
  required: true,
  className: 'required-input',
  inputsize: 'md',
  name: 'requiredInput',
};

// Input with Max Length
export const MaxLength = Template.bind({});
MaxLength.args = {
  type: 'text',
  value: '',
  placeholder: 'Max length input',
  disabled: false,
  required: false,
  maxlength: "10",
  className: 'maxlength-input',
  inputsize: 'lg',
  name: 'maxLengthInput',
};

