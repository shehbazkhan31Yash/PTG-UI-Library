import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { High3dLineChartComponent } from './high-3d-line-chart.component';
import { ChartModule } from '../../../chart.module';
import { LINE_CHART_2D } from './high-3d-line-chart';

const meta: Meta<High3dLineChartComponent> = {
  title: 'Component/High3dLineChartComponent',
  component: High3dLineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<High3dLineChartComponent>;

export const Primary: Story = {
  args: {
    data: LINE_CHART_2D.data,
    remainingOptions: {},
    categories: LINE_CHART_2D.categories,
    title: 'LINE_CHART_3D',
    xTitle: 'Categories',
    yTitle: 'Values'
  },
};

export const Title: Story = {
  args: {
    data: LINE_CHART_2D.data,
    remainingOptions: {},
    categories: LINE_CHART_2D.categories,
    title: 'LINE_CHART_3D',
    xTitle: 'Categories',
    yTitle: 'Values'
  },
};

export const XTitle: Story = {
  args: {
    data: LINE_CHART_2D.data,
    remainingOptions: {},
    categories: LINE_CHART_2D.categories,
    title: 'LINE_CHART_3D',
    xTitle: 'Categories',
    yTitle: 'Values'
  },
};

export const YTitle: Story = {
  args: {
    data: LINE_CHART_2D.data,
    remainingOptions: {},
    categories: LINE_CHART_2D.categories,
    title: 'LINE_CHART_3D',
    xTitle: 'Categories',
    yTitle: 'Values'
  },
};

