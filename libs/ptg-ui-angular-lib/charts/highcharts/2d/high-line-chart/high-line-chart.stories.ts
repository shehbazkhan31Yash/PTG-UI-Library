import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HighLineChartComponent } from './high-line-chart.component';
import { LINE_CHART_2D } from './high-line-chart';

const meta: Meta<HighLineChartComponent> = {
  title: 'Component/HighLineChartComponent',
  component: HighLineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<HighLineChartComponent>;

export const Primary: Story = {
  args: {
    id: 'line-chart',
    data: LINE_CHART_2D.data,
  },
};

export const Id: Story = {
  args: {
    id: 'line-chart',
    data: LINE_CHART_2D.data,
  },
};