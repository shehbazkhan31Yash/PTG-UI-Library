import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HighPieChartComponent } from './high-pie-chart.component';
import { ChartModule } from '../../../chart.module';
import { PIE_CHART_3D } from './high-pie-chart';

const meta: Meta<HighPieChartComponent> = {
  title: 'Component/HighPieChartComponent',
  component: HighPieChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<HighPieChartComponent>;

export const Primary: Story = {
  args: {
    colors: ['#242582', '#8D8741', '#659DBD', '#BC986A', '#FBEEC1'],
    data: PIE_CHART_3D.data,
  },
};

export const IsCreditEnabled: Story = {
  args: {
    colors: ['#242582', '#8D8741', '#659DBD', '#BC986A', '#FBEEC1'],
    data: PIE_CHART_3D.data,
    isCreditEnabled: true
  },
};

export const Colors: Story = {
  args: {
    colors: ['#242582', '#8D8741', '#659DBD', '#BC986A', '#FBEEC1'],
    data: PIE_CHART_3D.data,
    isCreditEnabled: true
  },
};
