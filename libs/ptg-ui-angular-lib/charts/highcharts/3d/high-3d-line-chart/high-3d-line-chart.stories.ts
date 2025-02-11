import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { High3dLineChartComponent } from './high-3d-line-chart.component';
import {ChartModule} from '../../../chart.module';
import {LINE_CHART_2D} from './high-3d-line-chart'

export default {
  title: 'Component/High3dLineChartComponent',
  component: High3dLineChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
} as Meta<High3dLineChartComponent>;

const Template: Story<High3dLineChartComponent> = (
  args: High3dLineChartComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  data: LINE_CHART_2D.data,
  remainingOptions: {},
  categories : LINE_CHART_2D.categories,
  title: 'LINE_CHART_3D',
  xTitle: 'Categories',
  yTitle: 'Values',
  id: 'chart-line-3d',
};


export const Title = Template.bind({});
Title.args = {
  data: LINE_CHART_2D.data,
  remainingOptions: {},
  categories : LINE_CHART_2D.categories,
  title: 'LINE_CHART_3D',
  xTitle: 'Categories',
  yTitle: 'Values',
  id: 'chart-line-3d',
};

export const xTitle = Template.bind({});
xTitle.args = {
  data: LINE_CHART_2D.data,
  remainingOptions: {},
  categories : LINE_CHART_2D.categories,
  title: 'LINE_CHART_3D',
  xTitle: 'Categories',
  yTitle: 'Values',
  id: 'chart-line-3d',
};

export const yTitle = Template.bind({});
yTitle.args = {
  data: LINE_CHART_2D.data,
  remainingOptions: {},
  categories : LINE_CHART_2D.categories,
  title: 'LINE_CHART_3D',
  xTitle: 'Categories',
  yTitle: 'Values',
  id: 'chart-line-3d',
};


export const chart = Template.bind({});
chart.args = {
  data: LINE_CHART_2D.data,
  remainingOptions: {},
  categories : LINE_CHART_2D.categories,
  title: 'LINE_CHART_3D',
  xTitle: 'Categories',
  yTitle: 'Values',
  id: 'chart-line-3d',
};