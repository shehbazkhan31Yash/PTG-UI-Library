import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiCustomAvatar } from './CustomAvatar';
import { PtgUiCustomAvatarProps } from '@ptg-react-libs/interfaces';
 
export default {
  title: 'Components/CustomAvatar',
  component: PtgUiCustomAvatar,
  argTypes: {
    alt: {
      control: 'text',
      description: 'Alt text for the avatar image',
    },
    src: {
      control: 'text',
      description: 'Image source URL for the avatar',
    },
    size: {
      control: { type: 'number', min: 20, max: 200, step: 5 },
      description: 'Size of the avatar in pixels',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the avatar when no image is provided',
    },
    textColor: {
      control: 'color',
      description: 'Text color for the avatar content (e.g., initials)',
    },
    children: {
      control: 'text',
      description: 'Fallback content (typically initials) if no image is provided',
    },
    variant: {
      control: 'select',
      options: ['circle', 'rounded', 'square'],
      description: 'Shape of the avatar',
    }
  },
} as Meta<typeof PtgUiCustomAvatar>;
 
const Template: StoryFn<PtgUiCustomAvatarProps> = (args) => <PtgUiCustomAvatar {...args} />;
 
// Avatar with Image
export const WithImage = Template.bind({});
WithImage.args = {
  alt: 'User Avatar',
  src: 'https://picsum.photos/id/328/3264/2448',
  size: 80,
  variant: 'circle',
};
 
// Avatar with Initials
export const WithInitials = Template.bind({});
WithInitials.args = {
  size: 80,
  backgroundColor: '#2196f3',
  textColor: '#ffffff',
  variant: 'circle',
  children: 'JD',
};
 
// Small Avatar
export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
  size: 40,
  backgroundColor: '#f44336',
  textColor: '#ffffff',
  variant: 'circle',
  children: 'S',
};
 
// Large Avatar
export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
  size: 120,
  backgroundColor: '#4caf50',
  textColor: '#ffffff',
  variant: 'circle',
  children: 'L',
};
 
// Square Avatar
export const SquareAvatar = Template.bind({});
SquareAvatar.args = {
  size: 80,
  backgroundColor: '#ff9800',
  textColor: '#ffffff',
  variant: 'square',
  children: 'SQ',
};
 
// Rounded Avatar
export const RoundedAvatar = Template.bind({});
RoundedAvatar.args = {
  size: 80,
  backgroundColor: '#9c27b0',
  textColor: '#ffffff',
  variant: 'rounded',
  children: 'R',
};
 
// Custom Color Avatar
export const CustomColorAvatar = Template.bind({});
CustomColorAvatar.args = {
  size: 80,
  backgroundColor: '#e91e63',
  textColor: '#ffeb3b',
  variant: 'circle',
  children: 'CC ',
};
 