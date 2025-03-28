import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Component/InputComponent',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Placeholder: Story = {
  args: {
    placeholder: '',
    className: '',
    type: 'text',
    id: '',
    value: '',
  },
};

export const Class: Story = {
  args: {
    placeholder: '',
    className: '',
    type: 'text',
    id: '',
    value: '',
  },
};

export const Type: Story = {
  args: {
    placeholder: '',
    className: '',
    type: 'text',
    id: '',
    value: '',
  },
};

export const Id: Story = {
  args: {
    placeholder: '',
    className: '',
    type: 'text',
    id: '',
    value: '',
  },
};

export const Value: Story = {
  args: {
    placeholder: '',
    className: '',
    type: 'text',
    id: '',
    value: '',
  },
};