import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { ToastsComponent } from './toasts.component';
import { ToastsModule } from '../toasts.module';

const meta: Meta<ToastsComponent> = {
  title: 'Component/ToastsComponent',
  component: ToastsComponent,
  decorators: [
    moduleMetadata({
      imports: [ToastsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<ToastsComponent>;

export const Primary: Story = {
  args: {
    label: 'toasts works!',
  },
};
