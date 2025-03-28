/* import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { CITY_LIST } from './selectData';
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
  placeholder: '',
  bindLabel: '',
  isMultiple: true,
  closeOnSelect: true,
  itemCount: 3,
  items: CITY_LIST
};


export const Id = Template.bind({});
Id.args = {
  id: '',
  placeholder: '',
  bindLabel: '',
  isMultiple: true,
  closeOnSelect: true,
  itemCount: 3,
  items: CITY_LIST
};


export const Placeholder = Template.bind({});
Placeholder.args = {
  id: '',
  placeholder: '',
  bindLabel: '',
  isMultiple: true,
  closeOnSelect: true,
  itemCount: 3,
  items: CITY_LIST
};


export const BindLabel = Template.bind({});
BindLabel.args = {
  id: '',
  placeholder: '',
  bindLabel: '',
  isMultiple: true,
  closeOnSelect: true,
  itemCount: 3,
  items: CITY_LIST
};


export const IsMultiple = Template.bind({});
IsMultiple.args = {
  id: '',
  placeholder: '',
  bindLabel: '',
  isMultiple: true,
  closeOnSelect: true,
  itemCount: 3,
  items: CITY_LIST
};


export const CloseOnSelect = Template.bind({});
CloseOnSelect.args = {
  id: '',
  placeholder: '',
  bindLabel: '',
  isMultiple: true,
  closeOnSelect: true,
  itemCount: 3,
  items: CITY_LIST
};


export const ItemCount = Template.bind({});
ItemCount.args = {
  id: '',
  placeholder: '',
  bindLabel: '',
  isMultiple: true,
  closeOnSelect: true,
  itemCount: 3,
  items: CITY_LIST
};
 */