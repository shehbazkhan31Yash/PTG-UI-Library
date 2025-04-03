import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiButton } from './button';
import { IPtgUiButtonProps } from '../interfaces';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default {
  title: 'Components/Button',
  component: PtgUiButton,
  argTypes: {
    appearance: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'success', 'danger', 'info', 'light', 'dark'], // Define button styles
      description: 'Defines the button appearance style',
    },
    text: {
      control: 'text',
      description: 'The text displayed on the button',
    },
    btnIconAlignment: {
      control: 'select',
      options: ['left', 'right'], // Define icon alignment options
      description: 'Alignment of the button icon',
    },
    hasbtnIconSlot: {
      control: 'boolean',
      description: 'Whether the button includes an icon slot',
    },
    width: {
      control: 'text',
      description: 'Width of the button',
    },
    height: {
      control: 'text',
      description: 'Height of the button',
    },
    fontSize: {
      control: 'text',
      description: 'Font size of the button text',
    },
    fontWeight: {
      control: 'text',
      description: 'Font weight of the button text',
    },
    textColor: {
      control: 'color',
      description: 'Color of the button text',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button when true',
    },
    type: {
      control: 'text',
      description: 'Button type (e.g., button, submit)',
    },
    border: {
      control: 'text',
      description: 'Border style for the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Event triggered when button is clicked',
    },
  },
} as Meta<typeof PtgUiButton>;

const Template: StoryFn<IPtgUiButtonProps> = (args) => <PtgUiButton {...args} />;

// Large button story
export const LargeButton = Template.bind({});
LargeButton.args = {
  appearance: 'primary',
  text: 'Large Button',
  width: '200px',
  height: '60px',
  fontSize: '20px',
  fontWeight: '600',
  textColor: '#ffffff',
  backgroundColor: '#2196f3',
  disabled: false,
};

// Medium button story
export const MediumButton = Template.bind({});
MediumButton.args = {
  appearance: 'secondary',
  text: 'Medium Button',
  width: '150px',
  height: '50px',
  fontSize: '16px',
  fontWeight: '500',
  textColor: '#ffffff',
  backgroundColor: '#585656',
  disabled: false,
};

// Small button story
export const SmallButton = Template.bind({});
SmallButton.args = {
  appearance: 'warning',
  text: 'Small Button',
  width: '100px',
  height: '40px',
  fontSize: '14px',
  fontWeight: '400',
  textColor: '#ffffff',
  backgroundColor: '#ffa942',
  disabled: false,
};


// Disabled button story
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  appearance: 'danger',
  text: 'Disabled Button',
  width: '150px',
  height: '50px',
  fontSize: '16px',
  fontWeight: '500',
  textColor: '#ffffff',
  backgroundColor: '#e9ecef',
  disabled: true,
};

// Button with left-aligned icon
export const ButtonWithLeftIcon = Template.bind({});
ButtonWithLeftIcon.args = {
  appearance: 'secondary',
  text: 'Left Icon',
  btnIconAlignment: 'left',
  hasbtnIconSlot: true,
  children: <AddCircleOutlineIcon/>,
};

// Button with right-aligned icon
export const ButtonWithRightIcon = Template.bind({});
ButtonWithRightIcon.args = {
  appearance: 'success',
  text: 'Right Icon',
  btnIconAlignment: 'right',
  hasbtnIconSlot: true,
  children: <AddCircleOutlineIcon/>,
};

// Primary button story
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  appearance: 'primary',
  text: 'Primary',
};




