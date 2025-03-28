import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { CITY_LIST } from './selectData';
import { SelectModule } from '../select.module';

const meta: Meta<SelectComponent> = {
  title: 'Component/SelectComponent',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      imports: [SelectModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const Primary: Story = {
  args: {
    id: '',
    placeholder: '',
    bindLabel: '',
    isMultiple: true,
    closeOnSelect: true,
    itemCount: 3,
    items: CITY_LIST,
  },
};

export const Id: Story = {
  args: {
    id: '',
    placeholder: '',
    bindLabel: '',
    isMultiple: true,
    closeOnSelect: true,
    itemCount: 3,
    items: CITY_LIST,
  },
};

export const Placeholder: Story = {
  args: {
    id: '',
    placeholder: '',
    bindLabel: '',
    isMultiple: true,
    closeOnSelect: true,
    itemCount: 3,
    items: CITY_LIST,
  },
};

export const BindLabel: Story = {
  args: {
    id: '',
    placeholder: '',
    bindLabel: '',
    isMultiple: true,
    closeOnSelect: true,
    itemCount: 3,
    items: CITY_LIST,
  },
};

export const IsMultiple: Story = {
  args: {
    id: '',
    placeholder: '',
    bindLabel: '',
    isMultiple: true,
    closeOnSelect: true,
    itemCount: 3,
    items: CITY_LIST,
  },
};

export const CloseOnSelect: Story = {
  args: {
    id: '',
    placeholder: '',
    bindLabel: '',
    isMultiple: true,
    closeOnSelect: true,
    itemCount: 3,
    items: CITY_LIST,
  },
};

export const ItemCount: Story = {
  args: {
    id: '',
    placeholder: '',
    bindLabel: '',
    isMultiple: true,
    closeOnSelect: true,
    itemCount: 3,
    items: CITY_LIST,
  },
};