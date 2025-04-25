import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PtgUiPagination } from './pagination';

export default {
  title: 'Components/Pagination',
  component: PtgUiPagination,
  argTypes: {
    dataCount: { control: { type: 'number', min: 1, default: 100 } },
    pageNumber: { control: { type: 'number', min: 1, default: 1 } },
    pageSize: { control: { type: 'number', min: 1, default: 10 } },
    siblingCount: { control: { type: 'number', min: 0, default: 1 } },
    previousBtnText: { control: { type: 'text', default: 'Previous' } },
    nextBtnText: { control: { type: 'text', default: 'Next' } },
    pageIndex: { action: 'page changed' },
  },
} as Meta<typeof PtgUiPagination>;

const Template: StoryFn<typeof PtgUiPagination> = (args) => <PtgUiPagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  dataCount: 100,
  pageNumber: 1,
  pageSize: 10,
  siblingCount: 1,
  previousBtnText: 'Previous',
  nextBtnText: 'Next',
};
