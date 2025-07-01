import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { LineChartComponent } from './line-chart.component';
import { LINE_CHART_D3 } from './line-chart';
import { ChartModule } from '../../chart.module';

const meta: Meta<LineChartComponent> = {
  title: 'Component/LineChartComponent',
  component: LineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<LineChartComponent>;

export const Primary: Story = {
  args: {
    data: LINE_CHART_D3.data,
    margin: LINE_CHART_D3.margin,
    width: LINE_CHART_D3.width,
    height: LINE_CHART_D3.height,

  },
};

export const Width: Story = {
  args: {
    data: LINE_CHART_D3.data,
    margin: LINE_CHART_D3.margin,
    width: LINE_CHART_D3.width,
    height: LINE_CHART_D3.height,
    id: 'line-width'
  },
};

export const Height: Story = {
  args: {
    data: LINE_CHART_D3.data,
    margin: LINE_CHART_D3.margin,
    width: LINE_CHART_D3.width,
    height: LINE_CHART_D3.height,
    id: 'line-height'
  },
};

export const Color: Story = {
  args: {
    data: LINE_CHART_D3.data,
    margin: LINE_CHART_D3.margin,
    width: LINE_CHART_D3.width,
    height: LINE_CHART_D3.height,
    id: 'line-color',
    color:'green'
  },
};

export const Id: Story = {
  args: {
    data: LINE_CHART_D3.data,
    margin: LINE_CHART_D3.margin,
    width: LINE_CHART_D3.width,
    height: LINE_CHART_D3.height,
    id: 'line-id',
    color:'red'
  },
};

export const CoordinateDataTypes: Story = {
  args: {
    data: LINE_CHART_D3.data,
    margin: LINE_CHART_D3.margin,
    width: LINE_CHART_D3.width,
    height: LINE_CHART_D3.height,
    id: 'line-coordinateDataTypes',
    coordinateDataTypes:{
      xData:"200",
      yData:"200"
    }
  },
};
