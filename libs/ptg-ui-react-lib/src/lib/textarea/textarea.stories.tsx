import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiTextArea } from './textarea';
import { PtgUiTextAreaProps } from "@ptg-react-libs/interfaces";

export default {
  title: 'Components/TextArea',
  component: PtgUiTextArea,
  argTypes: {
    placeholder: { control: 'text' },
    rows: { control: 'number' },
    className: { control: 'text' },
    name: { control: 'text' },
    id: { control: 'text' },
    value: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<PtgUiTextAreaProps> = (args) => <PtgUiTextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  rows: 4,
  className: 'default-class',
  name: 'textArea',
  id: 'textArea',
  value: '',
};
export const ClassName = Template.bind({});
ClassName.args = {
  placeholder: 'Enter text...',
  rows: 4,
  className: 'default-class',
  name: 'textArea',
  id: 'textArea',
  value: '',
};
export const Id = Template.bind({});
Id.args = {
  placeholder: 'Enter text...',
  rows: 4,
  className: 'default-class',
  name: 'textArea',
  id: 'textArea',
  value: '',
};
export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Enter text...',
  rows: 4,
  className: 'default-class',
  name: 'textArea',
  id: 'textArea',
  value: '',
};
export const Value = Template.bind({});
Value.args = {
  placeholder: 'Enter text...',
  rows: 4,
  className: 'default-class',
  name: 'textArea',
  id: 'textArea',
  value: '',
};