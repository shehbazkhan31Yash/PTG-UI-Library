import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { SidenavComponent } from './sidenav.component';
import { SidenavModule } from '../sidenav.module';
import { RouterModule } from '@angular/router';

const meta: Meta<SidenavComponent> = {
  title: 'Component/SidenavComponent',
  decorators: [
    moduleMetadata({
      imports: [SidenavModule, RouterModule.forRoot([])],
    }),
  ],
};

export default meta;
type Story = StoryObj<SidenavComponent>;

export const Primary: Story = {
  args: {
    isMenuOpen: false,
  },
};

export const IsMenuOpen: Story = {
  args: {
    isMenuOpen: false,
  },
};