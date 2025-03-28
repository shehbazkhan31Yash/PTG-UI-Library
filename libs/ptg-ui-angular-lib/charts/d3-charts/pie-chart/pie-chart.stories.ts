import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { PieChartComponent } from './pie-chart.component';
import { ChartModule } from '../../chart.module';
import { PIE_CHART_D3 } from './pie-chart';

const meta: Meta<PieChartComponent> = {
  title: 'Component/PieChartComponent',
  component: PieChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<PieChartComponent>;

export const Primary: Story = {
  args: {
    margin: 50,
    width: 750,
    height: 600,
    data: PIE_CHART_D3.data,
    colorsArray: [
      '#8D8741',
      '#659DBD',
      '#DAAD86',
      '#BC986A',
      '#FBEEC1',
      '#242582',
    ],
  },
};

export const Margin: Story = {
  args: {
    margin: 50,
    width: 750,
    height: 600,
    data: PIE_CHART_D3.data,
    colorsArray: [
      '#8D8741',
      '#659DBD',
      '#DAAD86',
      '#BC986A',
      '#FBEEC1',
      '#242582',
    ],
  },
};

export const Width: Story = {
  args: {
    margin: 50,
    width: 750,
    height: 600,
    data: PIE_CHART_D3.data,
    colorsArray: [
      '#8D8741',
      '#659DBD',
      '#DAAD86',
      '#BC986A',
      '#FBEEC1',
      '#242582',
    ],
  },
};

export const Height: Story = {
  args: {
    margin: 50,
    width: 750,
    height: 600,
    data: PIE_CHART_D3.data,
    colorsArray: [
      '#8D8741',
      '#659DBD',
      '#DAAD86',
      '#BC986A',
      '#FBEEC1',
      '#242582',
    ],
  },
}