import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { SidenavComponent } from './sidenav.component';
import { SidenavModule } from '../sidenav.module';

const meta: Meta<SidenavComponent> = {
  title: 'Component/SidenavComponent',
  decorators: [
    moduleMetadata({
      imports: [SidenavModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<SidenavComponent>;

export const Primary: Story = {
  args: {
    isMenuOpen: false,
    menuItems:[
      {
        id: '1',
        path: '/accordian-example',
        icon: 'fa-solid fa-chevron-down',
        label: 'ACCORDION',
        disabled: false,
      }]
  },
};

export const IsMenuOpen: Story = {
  args: {
    isMenuOpen: true,
    menuItems:[
      {
        id: '1',
        path: '/accordian-example',
        icon: 'fa-solid fa-chevron-down',
        label: 'ACCORDION',
        disabled: false,
      }]
  },
};