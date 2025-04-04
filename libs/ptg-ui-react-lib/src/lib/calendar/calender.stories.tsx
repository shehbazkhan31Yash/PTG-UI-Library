import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiCalendar } from './calendar';
import { IPtgUiCalendarProps } from '../interfaces';

export default {
  title: 'Components/Calendar',
  component: PtgUiCalendar,
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names for styling the input',
    },
    selected: {
      control: 'date',
      description: 'The currently selected date or datetime',
    },
    disabled: {
      control: 'boolean',
      description: 'Indicates if the input should be disabled',
    },
    isDateTime: {
      control: 'boolean',
      description: 'Indicates if the input should be a datetime picker',
    },
  },
} as Meta<typeof PtgUiCalendar>;

const Template: StoryFn<IPtgUiCalendarProps> = (args) => <PtgUiCalendar {...args} />;

// Default Calendar Story
export const DefaultCalendar = Template.bind({});
DefaultCalendar.args = {
  className: 'default-calendar',
  selected: undefined,
  disabled: false,
  isDateTime: false,
};

//Selected Date Calender Story
export const SelectedCalendar = Template.bind({});
SelectedCalendar.args = {
  className: 'selected-calendar',
  selected: new Date(2025, 11, 25), 
  disabled: false,
  isDateTime: false,
};

// ClassName Calendar Story
export const ClassName = Template.bind({});
ClassName.args = {
  className: 'disabled-calendar',
  selected: new Date(),
  disabled: false,
  isDateTime: false,
};

// DateTime Picker Story
export const DateTimePicker = Template.bind({});
DateTimePicker.args = {
  className: 'datetime-calendar',
  selected: new Date(),
  disabled: false,
  isDateTime: true,
};

// Disabled Calendar Story
export const DisabledCalendar = Template.bind({});
DisabledCalendar.args = {
  className: 'disabled-calendar',
  selected: new Date(),
  disabled: true,
  isDateTime: false,
};

