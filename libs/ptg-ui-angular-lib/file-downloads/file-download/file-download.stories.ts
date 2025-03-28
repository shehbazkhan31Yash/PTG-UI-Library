/* import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FileDownloadComponent } from './file-download.component';
import { FileDownloadsModule } from '../file-downloads.module';
import {TABLE_DATA} from './file-download';

export default {
  title: 'Component/FileDownloadComponent',
  component: FileDownloadComponent,
  decorators: [
    moduleMetadata({
      imports: [FileDownloadsModule],
    }),
  ],
} as Meta<FileDownloadComponent>;

const Template: Story<FileDownloadComponent> = (
  args: FileDownloadComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  tableData: TABLE_DATA
};
 */