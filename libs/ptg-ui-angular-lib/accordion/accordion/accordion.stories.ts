import type { Meta, StoryObj } from '@storybook/angular';
import {  moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { AccordionComponent } from './accordion.component';
import { AccordionModule } from '../accordion.module'
import { ACCORDIAN_DATA } from './accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<AccordionComponent> = {
  title: 'Component/AccordionComponent',
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [AccordionModule,BrowserAnimationsModule],
    }),
  ],
  
};

export default meta;
type Story = StoryObj<AccordionComponent>

export const Primary: Story = {
  args: {
    isAnimated: false,
    oneAtATime: false,
    listData: ACCORDIAN_DATA
  },
};

export const IsAnimated: Story = {
  args: {
    isAnimated: true,
    oneAtATime: false,
    listData: ACCORDIAN_DATA
  },
};

export const AddAccordionGroup: Story = {
  args: {
    isAnimated: false,
    oneAtATime: false,
    listData: ACCORDIAN_DATA
  },
};

export const OneAtATime: Story = {
  args: {
    isAnimated: false,
    oneAtATime: true,
    listData: ACCORDIAN_DATA
  },
};