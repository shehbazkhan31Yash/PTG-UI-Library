/* import { ItemsList } from '@ng-select/ng-select/lib/items-list';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RadioComponent } from './radio.component';

export default {
  title: 'Component/RadioComponent',
  component: RadioComponent,

  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<RadioComponent>;

const Template: Story<RadioComponent> = (args: RadioComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  id: 'ptg-radio',
  items: [
    {
      id: '1',
      name: 'male',
      default: true,
    },
    {
      id: '2',
      name: 'female',
    },
    {
      id: '3',
      name: 'other',
    },
  ]
};
 */