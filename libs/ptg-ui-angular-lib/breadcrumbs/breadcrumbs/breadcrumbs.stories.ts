import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BreadcrumbsComponent } from './breadcrumbs.component';

export default {
  title: 'Component/BreadcrumbsComponent',
  component: BreadcrumbsComponent,

  parameters: {
    backgroundColor: {
      default: 'red',
      values: [
        { name: 'red', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
  argTypes: {
    dividers: {
      control: 'string',
    }
  },

  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BreadcrumbsComponent>;

const Template: Story<BreadcrumbsComponent> = (args: BreadcrumbsComponent) => ({
  props: args,
  component: BreadcrumbsComponent,
});

export const Primary = Template.bind({});
Primary.args = {
  dividers: '/',
  data:{
    "name": "Home",
    "url": "home",
    "child": {
      "name": "Category",
      "url": "/category",
      "child": {
        "name": "Alert"
      }
    }
  }
};

export const divider = Template.bind({});
divider.args = {
  dividers: '>',
  data:{
    "name": "Home",
    "url": "home",
    "child": {
      "name": "Category",
      "url": "/category",
      "child": {
        "name": "Alert"
      }
    }
  }
    
  };
