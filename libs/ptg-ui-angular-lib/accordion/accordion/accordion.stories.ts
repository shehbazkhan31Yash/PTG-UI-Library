import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';
import { AccordionModule } from '../accordion.module'
import { ACCORDIAN_DATA } from './accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Component/AccordionComponent',
  component: AccordionComponent,

  decorators: [
    moduleMetadata({
      imports: [AccordionModule,BrowserAnimationsModule],
    }),
  ],
} as Meta<AccordionComponent>;

const Template: Story<AccordionComponent> = (args: AccordionComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isAnimated: false,
  oneAtATime: false,
  listData : ACCORDIAN_DATA,
  addAccordionGroup:false
};

export const IsAnimated = Template.bind({});
IsAnimated.args = {
  isAnimated: true,
  oneAtATime: false,
  listData : ACCORDIAN_DATA,
  addAccordionGroup:false
};

export const OneAtATime = Template.bind({});
OneAtATime.args = {
  isAnimated: false,
  oneAtATime: true,
  listData : ACCORDIAN_DATA,
  addAccordionGroup:true
};



