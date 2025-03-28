
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DialogComponent } from './dialog.component';
import { DialogModule } from '../dialog.module';

const meta: Meta<DialogComponent> = {
  title: 'Component/DialogComponent',
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      imports: [DialogModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<DialogComponent>;

export const Primary: Story = {
  args: {
    headerTitle: 'Modal Header',
    modalBodyContent: '<p>Modal body text goes here.</p>',
  },
};

export const HeaderTitle: Story = {
  args: {
    headerTitle: 'Modal Header',
    modalBodyContent: '<p>Modal body text goes here.</p>',
  },
};

export const ModalBodyContent: Story = {
  args: {
    headerTitle: 'Modal Header',
    modalBodyContent: '<p>Modal body text goes here.</p>',
  },
};
