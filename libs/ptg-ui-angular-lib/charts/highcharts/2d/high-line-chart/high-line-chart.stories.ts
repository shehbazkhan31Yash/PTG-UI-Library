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
    isCreditEnabled: false,
    data: LINE_CHART_2D.data,
  },
};

export const IsCreditEnabled: Story = {
  args: {
    isCreditEnabled: true,
    data: LINE_CHART_2D.data,
  },
};

export const Categories: Story = {
  args: {
    isCreditEnabled: true,
    data: LINE_CHART_2D.data,
    categories:LINE_CHART_2D.categories
  },
};
