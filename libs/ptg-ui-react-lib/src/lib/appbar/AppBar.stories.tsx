import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiAppBar } from './AppBar';
import { appBarParagaraph } from '../mock/mock';

export default {
  title: 'Components/AppBar',
  component: PtgUiAppBar,
  argTypes: {
    menuConfig: { control: 'object' },
    openMenu: { control: 'boolean' },
    closeMenu: { action: 'closed' },
  },
} as Meta<typeof PtgUiAppBar>;

const Template: StoryFn<typeof PtgUiAppBar> = (args) => <PtgUiAppBar {...args} />;

const TemplateWithParagraph: StoryFn<typeof PtgUiAppBar> = (args) => (
  <>
    <PtgUiAppBar {...args} />
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
    <p className="paragraph">
            {appBarParagaraph}
          </p>
    </div>
  </>
);

// Default AppBar
export const Default = Template.bind({});
Default.args = {
  menuConfig: {
    logo: 'https://www.yash.com/wp-content/themes/html5blank-stable/images/yash-logo-new.svg',
    logoAlignment: 'left',
    menuAlignment: 'right',
    burgerMenu: true,
    burgerMenuType: 'dropdown',
    backgroundColor: 'primary',
    textColor: '#fff',
    menuItems: (
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    ),
    static: false,
    position: 'top',
  },
  openMenu: false,
};

// AppBar with Drawer Menu
export const WithBurgerMenu = Template.bind({});
WithBurgerMenu.args = {
  menuConfig: {
    logo: 'https://www.yash.com/wp-content/themes/html5blank-stable/images/yash-logo-new.svg',
    logoAlignment: 'left',
    menuAlignment: 'left',
    burgerMenu: true,
    burgerMenuType: 'drawer',
    backgroundColor: 'secondary',
    textColor: '#000',
    menuItems: (
      <ul className="vertical-menu">
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    ),
    static: true,
    position: 'top',
  },
  openMenu: false,
};

// AppBar without Burger Menu
export const WithoutBurgerMenu = Template.bind({});
WithoutBurgerMenu.args = {
  menuConfig: {
    logo: 'https://www.yash.com/wp-content/themes/html5blank-stable/images/yash-logo-new.svg',
    logoAlignment: 'left',
    menuAlignment: 'right',
    burgerMenu: false,
    burgerMenuType: 'drawer',
    backgroundColor: 'secondary',
    textColor: '#000',
    menuItems: (
      <ul className="vertical-menu">
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    ),
    static: true,
    position: 'top',
  },
  openMenu: false,
};

export const MenuAtBottom = Template.bind({});
MenuAtBottom.args = {
  menuConfig: {
    logo: 'https://www.yash.com/wp-content/themes/html5blank-stable/images/yash-logo-new.svg',
    logoAlignment: 'left',
    menuAlignment: 'left',
    burgerMenu: true,
    burgerMenuType: 'drawer',
    backgroundColor: 'secondary',
    textColor: '#000',
    menuItems: (
      <ul>
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    ),
    static: true,
    position: 'bottom',
  },
  openMenu: false,
};

// AppBar with No Logo
export const NoLogo = Template.bind({});
NoLogo.args = {
  menuConfig: {
    logo: undefined,
    menuAlignment: 'right',
    burgerMenu: true,
    burgerMenuType: 'dropdown',
    backgroundColor: 'primary',
    textColor: '#fff',
    menuItems: (
      <ul>
        <li>Login</li>
        <li>Register</li>
      </ul>
    ),
    static: false,
    position: 'top',
  },
  openMenu: false,
};

// AppBar with Paragraph
export const WithStickyMenu = TemplateWithParagraph.bind({});
WithStickyMenu.args = {
  menuConfig: {
    logo: 'https://www.yash.com/wp-content/themes/html5blank-stable/images/yash-logo-new.svg',
    logoAlignment: 'left',
    menuAlignment: 'right',
    burgerMenu: true,
    burgerMenuType: 'dropdown',
    backgroundColor: 'primary',
    textColor: '#fff',
    menuItems: (
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    ),
    static: false,
    position: 'top',
  },
  openMenu: false,
};
