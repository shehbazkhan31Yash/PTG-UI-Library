import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { SidenavComponent } from './sidenav.component';
import { SidenavModule } from '../sidenav.module';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<SidenavComponent> = {
  title: 'Component/Sidenav',
  component: SidenavComponent,
  decorators: [
    moduleMetadata({
      imports: [SidenavModule, RouterTestingModule],
    }),
  ],
  argTypes: {
    isMenuOpen: {
      control: 'boolean',
      description: 'Controls whether the sidenav is open',
    },
    selectedPath: {
      control: 'text',
      description: 'Current selected path in the sidenav',
    },
    menuItems: {
      control: 'object',
      description: 'Array of menu items to display',
    },
    selectMenu: {
      action: 'menu selected',
      description: 'Event emitted when a menu item is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<SidenavComponent>;

const defaultMenuItems = [
  {
    id: '1',
    path: '/accordian-example',
    icon: 'fa-solid fa-chevron-down',
    label: 'ACCORDION',
    disabled: false,
  },
  {
    id: '2',
    path: '/calendar',
    icon: 'fa-solid fa-calendar',
    label: 'CALENDAR',
    disabled: false,
  }
];

export const Primary: Story = {
  name: 'Collapsed Menu',
  args: {
    isMenuOpen: false,
    selectedPath: '',
    menuItems: defaultMenuItems,
  },
};

export const ExpandedMenu: Story = {
  name: 'Expanded Menu',
  args: {
    isMenuOpen: true,
    selectedPath: '/calendar',
    menuItems: defaultMenuItems,
  },
};
