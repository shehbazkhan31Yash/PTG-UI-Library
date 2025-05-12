import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FileDownloadComponent } from './file-download.component';
import { FileDownloadsModule } from '../file-downloads.module';
import { TABLE_DATA } from './file-download';

const meta: Meta<FileDownloadComponent> = {
  title: 'Component/FileDownloadComponent',
  component: FileDownloadComponent,
  decorators: [
    moduleMetadata({
      imports: [FileDownloadsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<FileDownloadComponent>;

export const Primary: Story = {
  args: {
    tableData: TABLE_DATA,
  },
};
