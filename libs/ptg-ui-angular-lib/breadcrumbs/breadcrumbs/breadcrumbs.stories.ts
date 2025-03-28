import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BreadcrumbsComponent } from './breadcrumbs.component';

const meta: Meta<BreadcrumbsComponent> = {
  title: 'Component/BreadcrumbsComponent',
  component: BreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<BreadcrumbsComponent>;

export const Primary: Story = {
  args: {
    dividers: '/',
    data: {
      name: 'Home',
      url: 'home',
      child: {
        name: 'Category',
        url: '/category',
        child: {
          name: 'Alert',
        },
      },
    },
  },
};

export const Divider: Story = {
  args: {
    dividers: '>',
    data: {
      name: 'Home',
      url: 'home',
      child: {
        name: 'Category',
        url: '/category',
        child: {
          name: 'Alert',
        },
      },
    },
  },
};
