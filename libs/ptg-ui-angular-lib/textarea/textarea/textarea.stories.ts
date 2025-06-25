import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

const meta: Meta<TextareaComponent> = {
  title: 'Component/TextareaComponent',
  component: TextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<TextareaComponent>;

export const Placeholder: Story = {
  args: {
    placeholder: 'Type Here',
    className: '',
    type: 'text',
    id: '',
    value: '',
  },
};

export const ClassName: Story = {
  args: {
    placeholder: '',
    className: 'customClass',
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
    id: '1',
    value: '',
  },
};

export const Value: Story = {
  args: {
    placeholder: '',
    className: '',
    type: 'text',
    id: '',
    value: 'text area data',
  },
};
