import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { IndeterminateCheckboxesComponent } from './indeterminate-checkboxes.component';
import { IndeterminateCheckboxesModule } from '../indeterminate-checkboxes.module';
import { CHECKBOX_ARRAY } from './indeterminate-checkboxes';

const meta: Meta<IndeterminateCheckboxesComponent> = {
  title: 'Component/IndeterminateCheckboxesComponent',
  component: IndeterminateCheckboxesComponent,
  decorators: [
    moduleMetadata({
      imports: [IndeterminateCheckboxesModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<IndeterminateCheckboxesComponent>;

export const Primary: Story = {
  args: {
    checkBoxList: CHECKBOX_ARRAY,
  },
};