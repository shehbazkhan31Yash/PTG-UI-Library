import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { RadioComponent } from './radio.component';

const meta: Meta<RadioComponent> = {
  title: 'Component/RadioComponent',
  component: RadioComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<RadioComponent>;

export const Primary: Story = {
  args: {
    id: 'ptg-radio',
    items: [
      {
        id: '1',
        name: 'male',
        default: true,
      },
      {
        id: '2',
        name: 'female',
      },
      {
        id: '3',
        name: 'other',
      },
    ],
  },
};
