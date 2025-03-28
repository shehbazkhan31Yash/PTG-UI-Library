import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { High3dBarChartComponent } from './high-3d-bar-chart.component';
import { ChartModule } from '../../../chart.module';
import { BAR_CHART_3D } from './high-3d-bar-chart';

const meta: Meta<High3dBarChartComponent> = {
  title: 'Component/High3dBarChartComponent',
  component: High3dBarChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<High3dBarChartComponent>;

export const Primary: Story = {
  args: {
    data: BAR_CHART_3D.data,
    categories: BAR_CHART_3D.categories,
    remainingOptions: {},
    title: 'BAR_CHART_3D',
    xTitle: 'Categories',
    yTitle: 'Values',
  },
};

export const Title: Story = {
  args: {
    data: BAR_CHART_3D.data,
    categories: BAR_CHART_3D.categories,
    remainingOptions: {},
    title: 'BAR_CHART_3D',
    xTitle: 'Categories',
    yTitle: 'Values',
  },
};

export const XTitle: Story = {
  args: {
    data: BAR_CHART_3D.data,
    categories: BAR_CHART_3D.categories,
    remainingOptions: {},
    title: 'BAR_CHART_3D',
    xTitle: 'Categories',
    yTitle: 'Values',
  },
};

export const YTitle: Story = {
  args: {
    data: BAR_CHART_3D.data,
    categories: BAR_CHART_3D.categories,
    remainingOptions: {},
    title: 'BAR_CHART_3D',
    xTitle: 'Categories',
    yTitle: 'Values',
  },
};