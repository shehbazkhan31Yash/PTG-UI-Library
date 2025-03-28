/*import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BarChartComponent } from './bar-chart.component';
import {ChartModule} from '../../chart.module';
import { BAR_CHART_D3 } from './bar-chart';



export default {
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
} as Meta<BarChartComponent>;

const Template: Story<BarChartComponent> = (args: BarChartComponent) => ({
  props: args,
  component : BarChartComponent
});

export const Primary = Template.bind({});
Primary.args = {
  data:BAR_CHART_D3.data,
  width:550,
  height:330,
  margin:50,
  start:0, 
  end:160000
};


export const Width = Template.bind({});
Width.args = {
  data:BAR_CHART_D3.data,
  width:550,
  height:330,
  margin:50,
  start:0, 
  end:160000
};


export const Height = Template.bind({});
Height.args = {
  data:BAR_CHART_D3.data,
  width:550,
  height:330,
  margin:50,
  start:0, 
  end:160000
};


export const Margin = Template.bind({});
Margin.args = {
  data:BAR_CHART_D3.data,
  width:550,
  height:330,
  margin:50,
  start:0, 
  end:160000
};


export const Start = Template.bind({});
Start.args = {
  data:BAR_CHART_D3.data,
  width:550,
  height:330,
  margin:50,
  start:0, 
  end:160000
};

export const End = Template.bind({});
End.args = {
  data:BAR_CHART_D3.data,
  width:550,
  height:330,
  margin:50,
  start:0, 
  end:160000
};
*/
