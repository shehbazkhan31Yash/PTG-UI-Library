/* import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectComponent } from './select.component';
import {CITY_LIST} from './selectData';
import { SelectModule } from '../select.module'


export default {
  title: 'Component/SelectComponent',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      imports: [SelectModule],
    }),
  ],
} as Meta<SelectComponent>;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  id: '',
  fieldname: '',
  placeholder: '',
  bindLabel: '',
  bindValue: '',
  isMultiple: false,
  closeOnSelect: false,
  // accessKey: '',
  itemCount: 3,
  items:CITY_LIST
};
 */