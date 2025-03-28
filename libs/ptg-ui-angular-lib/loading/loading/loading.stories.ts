import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { LoadingComponent } from './loading.component';
import { LoadingModule } from '../loading.module';

const meta: Meta<LoadingComponent> = {
  title: 'Component/LoadingComponent',
  component: LoadingComponent,
  decorators: [
    moduleMetadata({
      imports: [LoadingModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<LoadingComponent>;

export const Primary: Story = {
  args: {
    loading: true,
  },
};