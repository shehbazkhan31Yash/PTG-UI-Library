import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiRadio } from './radio';
import { PtgUiRadioProps } from '@ptg-react-libs/interfaces';

export default {
  title: 'Components/Radio',
  component: PtgUiRadio,
  argTypes: {
    name: {
      control: 'text',
      description: 'The name attribute for the radio input',
    },
    value: {
      control: 'text',
      description: 'The value attribute for the selected radio input',
    },
    id: {
      control: 'text',
      description: 'The id prefix for the radio input',
    },
    list: {
      control: 'object',
      description: 'List of radio options with id, name, and value',
    },
    
  },
} as Meta<typeof PtgUiRadio>;

const Template: StoryFn<PtgUiRadioProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return <PtgUiRadio {...args} value={selectedValue} onChange={handleChange} />;
};

// Default radio group story
export const DefaultRadio = Template.bind({});
DefaultRadio.args = {
  name: 'radio-group',
  id: 'radio-id',
  list: [
    { id: '1', name: 'Option 1', value: '1' },
    { id: '2', name: 'Option 2', value: '2' },
    { id: '3', name: 'Option 3', value: '3' },
  ],
};

//  radio group story
export const IdRadio = Template.bind({});
IdRadio.args = {
  name: 'radio-group',
  id: 'radio-id',
  list: [
    { id: '1', name: 'Option 1', value: '1' },
    { id: '2', name: 'Option 2', value: '2' },
    { id: '3', name: 'Option 3', value: '3' },
  ],
};

// Pre-selected radio story
export const PreSelectedRadio = Template.bind({});
PreSelectedRadio.args = {
  name: 'radio-group',
  id: 'radio-id',
  list: [
    { id: '1', name: 'Option 1', value: '1' },
    { id: '2', name: 'Option 2', value: '2'},
    { id: '3', name: 'Option 3', value: '3' },
  ],
  value: '2',
};

