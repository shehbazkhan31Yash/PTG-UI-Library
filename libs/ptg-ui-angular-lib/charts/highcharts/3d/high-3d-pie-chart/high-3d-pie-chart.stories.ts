import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { High3dPieChartComponent } from './high-3d-pie-chart.component';
import { PIE_CHART_3D } from './high-3d-pie-chart';

const meta: Meta<High3dPieChartComponent> = {
  title: 'Component/High3dPieChartComponent',
  component: High3dPieChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<High3dPieChartComponent>;

export const Primary: Story = {
  args: {
    data: PIE_CHART_3D.data as any, // Cast to 'any' if you are sure the structure matches, or transform to the correct type if needed
    title: 'PIE_CHART_3D',
  },
};

export const Title: Story = {
  args: {
    data: PIE_CHART_3D.data as any,
    title: 'PIE_CHART_3D',
  },
};
