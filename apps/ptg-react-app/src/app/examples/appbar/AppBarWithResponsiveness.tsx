import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IAppBarWithResponsiveness } from '@ptg-react-app/interfaces';
import { AppBar } from '@ptg-react-libs/appbar/AppBar';
import './AppBarWithDefaultProps.css';
import IFrame from './IFrame';
import { DropdownMenu } from './DropdownMenu';
import { useEffect, useState } from 'react';

export const AppBarWithResponsiveness = (props: IAppBarWithResponsiveness) => {
  const componentCode = `
  import { AppBar } from '@ptg-react-libs/appbar/AppBar';
  import { Link } from 'react-router-dom'; 
  // Add CSS file for styling
 `;

  // Note: HTML code for Rating
  const htmlCode = `
 interface MenuItem {
    label: string; // Label for the menu item
    link?: string; // Optional link for the menu item
    submenu?: MenuItem[]; // Optional submenu for dropdown
  }

  // Example menu items with submenus
  const menuItems: MenuItem[] = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'Services',
      submenu: [
        { label: 'Web Development', link: '/services/web-development' },
        { label: 'SEO', link: '/services/seo' },
      ],
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false); // Manage menu open state
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Default breakpoint

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768); // Update based on the breakpoint
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuConfig = {
    logo: 'assets/images/YashLogo.png',
    menuItems: (
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flexDirection: isDesktop ? 'row' : 'column',
        }}
      >
        {menuItems.map((item) => (
          <DropdownMenu
            isDesktop={isDesktop}
            key={item.label}
            item={item}
            onMenuClose={() => setMenuOpen(false)}
          />
        ))}
      </ul>
    ),
    backgroundColor: 'secondary' as 'secondary',
    burgerMenu: !isDesktop,
    position: 'top' as 'top',
  };


    <AppBar
            menuConfig={menuConfig}
            openMenu={menuOpen}
            closeMenu={setMenuOpen}
          />
 
  `;

  interface MenuItem {
    label: string; // Label for the menu item
    link?: string; // Optional link for the menu item
    submenu?: MenuItem[]; // Optional submenu for dropdown
  }

  // Example menu items with submenus
  const menuItems: MenuItem[] = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'Services',
      submenu: [
        { label: 'Web Development', link: '/services/web-development' },
        { label: 'SEO', link: '/services/seo' },
      ],
    },
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Contact',
      link: '/contact',
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false); // Manage menu open state
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // Default breakpoint

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768); // Update based on the breakpoint
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuConfig = {
    logo: 'assets/images/YashLogo.png',
    menuItems: (
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flexDirection: isDesktop ? 'row' : 'column',
        }}
      >
        {menuItems.map((item) => (
          <DropdownMenu
            isDesktop={isDesktop}
            key={item.label}
            item={item}
            onMenuClose={() => setMenuOpen(false)}
          />
        ))}
      </ul>
    ),
    backgroundColor: 'secondary' as const,
    burgerMenu: !isDesktop,
    position: 'top' as 'top',
  };

  return (
    <section>
      {props?.showCodeAppBarWithResponsiveness && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <IFrame>
          <AppBar
            menuConfig={menuConfig}
            openMenu={menuOpen}
            closeMenu={setMenuOpen}
          />
        </IFrame>
      </div>
    </section>
  );
};
