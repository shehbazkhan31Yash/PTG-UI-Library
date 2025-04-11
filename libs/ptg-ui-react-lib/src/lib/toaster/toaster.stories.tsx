import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiToaster } from './toaster';
import { ToasterProps } from '@ptg-react-libs/interfaces';

export default {
  title: 'Components/Toaster',
  component: PtgUiToaster,
  argTypes: {
    message: { control: 'text' },
    type: { 
      control: 'select', 
      options: ['error', 'success', 'info', 'warning'] 
    },
    showDescription: { control: 'boolean' },
    alignItem: { 
      control: 'select', 
      options: ['flex-start', 'center', 'flex-end'] 
    },
    justifyContent: { 
      control: 'select', 
      options: ['flex-start', 'center', 'flex-end'] 
    },
  },
} as Meta;

const Template: StoryFn<ToasterProps> = (args) => <PtgUiToaster {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: 'This is a sample toaster message.',
  type: 'success',
  showDescription: true,
  closeIcon: 'X',
  alignItem: 'center',
  justifyContent: 'center',
};


