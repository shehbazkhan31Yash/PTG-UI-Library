/* import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DialogComponent } from './dialog.component';
import {DialogModule} from '../dialog.module'; 

export default {
  title: 'Component/DialogComponent',
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      imports: [DialogModule],
    }),
  ],
} as Meta<DialogComponent>;

const Template: Story<DialogComponent> = (args: DialogComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
   headerTitle: 'Modal Header',
  modalBodyContent: "<p>Modal body text goes here.</p>",
};

export const headerTitle = Template.bind({});
headerTitle.args = {
  headerTitle: 'Modal Header',
 modalBodyContent: "<p>Modal body text goes here.</p>",
};

export const modalBodyContent = Template.bind({});
modalBodyContent.args = {
  headerTitle: 'Modal Header',
 modalBodyContent: "<p>Modal body text goes here.</p>",
};
 */