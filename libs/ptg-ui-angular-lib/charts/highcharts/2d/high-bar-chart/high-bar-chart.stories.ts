import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HighBarChartComponent } from './high-bar-chart.component';
import { ChartModule } from '../../../chart.module';
import { BAR_CHART_3D } from './high-bar-chart';

const meta: Meta<HighBarChartComponent> = {
  title: 'Component/HighBarChartComponent',
  component: HighBarChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<HighBarChartComponent>;

export const Primary: Story = {
  args: {
    data: BAR_CHART_3D.data,
  },
};

export const IsCreditEnabled: Story = {
  args: {
    data: BAR_CHART_3D.data,
    isCreditEnabled:true
  },
};
