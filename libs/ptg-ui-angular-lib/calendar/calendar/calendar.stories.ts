import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CalendarComponent } from './calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from '../calendar.module';

const meta: Meta<CalendarComponent> = {
  title: 'Component/CalendarComponent',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [CalendarModule, BrowserAnimationsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<CalendarComponent>;

export const Placeholder: Story = {
  args: {
    placeholder: 'MM-DD-YYYY',
    className: 'calendarClass',
    id: 'calendarId',
    disabled: false,
  },
};

export const ClassName: Story = {
  args: {
    placeholder: 'MM-DD-YYYY',
    className: 'calendarClass',
    id: 'calendarId',
    disabled: false,
  },
};

export const Id: Story = {
  args: {
    placeholder: 'MM-DD-YYYY',
    className: 'calendarClass',
    id: 'calendarId',
    disabled: false,
  },
};

export const IsDisabled: Story = {
  args: {
    placeholder: 'MM-DD-YYYY',
    className: 'calendarClass',
    id: 'calendarId',
    disabled: true,
  },
};