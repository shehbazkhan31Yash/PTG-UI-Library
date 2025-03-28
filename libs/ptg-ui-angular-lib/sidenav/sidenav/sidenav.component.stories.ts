/* import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SidenavComponent } from './sidenav.component';
import {SidenavModule} from '../sidenav.module'
import { RouterModule } from '@angular/router';


export default {
  title: 'Component/SidenavComponent',
//   component: SidenavComponent,
  
  decorators: [
    moduleMetadata({
      imports: [SidenavModule,RouterModule.forRoot([])],
    }),
  ],
} as Meta<SidenavComponent>;

const Template: Story<SidenavComponent> = (args: SidenavComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isMenuOpen: false,
};


export const isMenuOpen = Template.bind({});
isMenuOpen.args = {
  isMenuOpen: false,
}; */