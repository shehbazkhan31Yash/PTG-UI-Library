import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiAlert } from './alert';
import { AlertProps } from '../interfaces';

export default {
  title: 'Components/Alert',
  component: PtgUiAlert,
  parameters: {
    docs: {
      description: {
        component: 'A reusable alert component for displaying different types of messages.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'danger', 'info'],
      description: 'Defines the alert type (e.g., success, warning, danger, info).',
    },
    message: { control: 'text', description: 'Sets the message displayed inside the alert.' },
  },
} satisfies Meta<AlertProps>;

const Template: StoryFn<AlertProps> = (args) => <PtgUiAlert {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  type: 'success',
  message: 'Operation completed successfully!',
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  type: 'warning',
  message: 'Be careful! There might be potential issues.',
};

export const DangerAlert = Template.bind({});
DangerAlert.args = {
  type: 'danger',
  message: 'An error occurred! Please try again.',
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  type: 'info',
  message: 'Here is some useful information for you.',
};

