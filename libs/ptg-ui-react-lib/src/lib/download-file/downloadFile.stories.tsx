import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiDownload } from './downloadFile';
import './downloadFile.css'; // Import custom styles

export default {
    title: 'Components/Download',
    component: PtgUiDownload,
    argTypes: {
      excelColumns: { control: { type: 'object' } }, // Use 'object' instead of 'array'
      excelDataToDownload: { control: { type: 'object' } }, // Use 'object' instead of 'array'
      allowFileTypes: {
        control: { type: 'check', options: ['PDF', 'EXCEL', 'JPG', 'WORD'] }, // 'check' is correct for multi-select
      },
      downloadBtnText: { control: { type: 'text' } },
      downloadFileName: { control: { type: 'text' } },
    },
  } as Meta<typeof PtgUiDownload>;

const Template: StoryFn<typeof PtgUiDownload> = (args) => (
  <PtgUiDownload {...args}>
    <table className="custom-table">
      <thead>
        <tr>
          <th>NAME</th>
          <th>AGE</th>
          <th>DESIGNATION</th>
          <th>DEPARTMENT</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </PtgUiDownload>);

export const Default = Template.bind({});
Default.args = {
  excelColumns: ['Name', 'Age'],
  excelDataToDownload: [
    { Name: { value: 'John'}, Age: { value: 30 } },
    { Name: { value: 'Jane'}, Age: { value: 25 } },
  ],
  allowFileTypes: ['PDF', 'EXCEL', 'JPG', 'WORD'],
  downloadBtnText: 'Download',
  downloadFileName: 'example',
};
