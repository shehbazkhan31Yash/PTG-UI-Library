import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AlertComponent } from './alert.component';
import { AlertModule } from '../alert.module';

const meta: Meta<AlertComponent> = {
  title: 'Component/AlertComponent',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [AlertModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Primary: Story = {
  args: {
    message: 'Hello',
    isDismissible: true,
  },
};

export const Message: Story = {
  args: {
    message: 'Hello',
    isDismissible: true,
  },
};

export const IsDismissible: Story = {
  args: {
    message: 'Hello',
    isDismissible: true,
  },
};