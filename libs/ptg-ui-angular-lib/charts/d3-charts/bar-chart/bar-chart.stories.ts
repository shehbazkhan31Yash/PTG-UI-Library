import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BarChartComponent } from './bar-chart.component';
import { ChartModule } from '../../chart.module';
import { BAR_CHART_D3 } from './bar-chart';

const meta: Meta<BarChartComponent> = {
  title: 'Component/BarChartComponent',
  component: BarChartComponent,
  argTypes: {
    width: {
      control: { type: 'range', min: 200, max: 1200 },
    },
    height: {
      control: { type: 'range', min: 200, max: 1200 },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<BarChartComponent>;

export const Primary: Story = {
  args: {
    data: BAR_CHART_D3.data,
    width: 550,
    height: 330,
    margin: 50,
    start: 0,
    end: 160000,
  },
};

export const Width: Story = {
  args: {
    data: BAR_CHART_D3.data,
    width: 550,
    height: 330,
    margin: 50,
    start: 0,
    end: 160000,
  },
};

export const Height: Story = {
  args: {
    data: BAR_CHART_D3.data,
    width: 550,
    height: 330,
    margin: 50,
    start: 0,
    end: 160000,
  },
};

export const Margin: Story = {
  args: {
    data: BAR_CHART_D3.data,
    width: 550,
    height: 330,
    margin: 50,
    start: 0,
    end: 160000,
  },
};

export const Start: Story = {
  args: {
    data: BAR_CHART_D3.data,
    width: 550,
    height: 330,
    margin: 50,
    start: 0,
    end: 160000,
  },
};

export const End: Story = {
  args: {
    data: BAR_CHART_D3.data,
    width: 550,
    height: 330,
    margin: 50,
    start: 0,
    end: 160000,
  },
};