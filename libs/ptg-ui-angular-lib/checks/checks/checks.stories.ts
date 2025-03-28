
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ChecksComponent } from './checks.component';

const meta: Meta<ChecksComponent> = {
  title: 'Component/ChecksComponent',
  component: ChecksComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<ChecksComponent>;

export const Label: Story = {
  args: {
    label: '',
    // accessKey: '',
  },
};