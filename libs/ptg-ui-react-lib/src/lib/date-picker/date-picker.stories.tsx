import { PtgUiDatePicker } from './date-picker';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiDatePickerProps } from '@ptg-react-libs/interfaces';

export default {
    title: 'Components/Datepicker',
    component: PtgUiDatePicker,
} as Meta;

const Template: StoryFn<PtgUiDatePickerProps> = (args) => {
    const handleDateSelect = (date: string) => {
        console.log('Selected date:', date);
    };

    return <PtgUiDatePicker {...args} sendSelectedDate={handleDateSelect} />;
};

export const Default = Template.bind({});
Default.args = {
    id: 'date-picker-default',
    className: 'default-date-picker',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
    id: 'date-picker-custom',
    className: 'custom-date-picker',
};

export const WithInitialDate = Template.bind({});
WithInitialDate.args = {
    id: 'date-picker-initial',
    className: 'initial-date-picker',
    sendSelectedDate: (date: string) => console.log('Initial date selected:', date),
};