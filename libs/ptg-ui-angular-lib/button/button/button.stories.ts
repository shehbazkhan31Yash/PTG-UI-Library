import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Component/ButtonComponent',
  component: ButtonComponent,
  parameters: {
    backgroundColor: {
      default: 'red',
      values: [
        { name: 'red', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
  argTypes: {
    isDisable: {
      control: 'boolean',
    },
    isBlock: {
      control: 'boolean',
    },
    backgroundColor: {
      control: 'color',
      category: 'Colors',
    },
    size: {
      options: ['small', 'medium', 'large'],
      mapping: {
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      description: 'Size options for the button',
      control: {
        type: 'radio',
        labels: {
          small: 'small',
          medium: 'medium',
          large: 'large',
        },
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'button',
    isDisable: false,
    isBlock: false,
    accessKey: '',
  },
};

export const Small: Story = {
  args: {
    type: 'button',
    label: 'Button',
    isDisable: false,
    isBlock: false,
    accessKey: '',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    type: 'button',
    label: 'Button',
    isDisable: false,
    isBlock: false,
    accessKey: '',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    type: 'button',
    label: 'Button',
    isDisable: false,
    isBlock: false,
    accessKey: '',
    size: 'large',
  },
};

export const IsDisable: Story = {
  args: {
    type: 'button',
    isDisable: true,
    label: 'Button',
    isBlock: false,
  },
};

export const IsBlock: Story = {
  args: {
    label: 'Button',
    type: 'button',
    isDisable: false,
    isBlock: true,
  },
};
