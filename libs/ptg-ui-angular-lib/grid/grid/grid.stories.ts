
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { GridComponent } from './grid.component';

const meta: Meta<GridComponent> = {
  title: 'Component/GridComponent',
  component: GridComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<GridComponent>;

export const Primary: Story = {
  args: {
    columnClasses: [
      { lg: 4, md: 4, sm: 12, xs: 12 },
      { lg: 4, md: 4, sm: 12, xs: 12, offsetMd: 4, offsetSm: 0 },
    ],
    columnClass: 'text-center',
    rowClass: 'mb-4',
  },
};