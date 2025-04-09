import { Link } from 'react-router-dom';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IAppBarWithDropdownMenu } from '@ptg-react-app/interfaces';
import { AppBar } from '@ptg-react-libs/appbar/AppBar';
import './AppBarWithDefaultProps.css';
import IFrame from './IFrame';

export const AppBarWithDropDown = (props: IAppBarWithDropdownMenu) => {
  const componentCode = `
  import { AppBar } from '@ptg-react-libs/appbar/AppBar';
  import { Link } from 'react-router-dom'; 
  // Add CSS file for styling
 `;

  // Note: HTML code for Rating
  const htmlCode = `
  const menuItems = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'Services',
      link: '/services',
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

  const menuConfig = {
    logo: 'assets/images/YashLogo.png',
    menuItems: (
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} style={{ listStyleType: 'none', padding: '5px' }}>
            <Link to="#" className="link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
    burgerMenu: true,
    burgerMenuType: 'dropdown' as 'const',
  };

    <AppBar menuConfig={menuConfig} />
 
  `;

  const menuItems = [
    {
      label: 'Home',
      link: '/home',
    },
    {
      label: 'Services',
      link: '/services',
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

  const menuConfig = {
    logo: 'assets/images/YashLogo.png',
    menuItems: (
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={`${index}item`}
            style={{
              listStyleType: 'none',
              padding: '2px',
              top: '0',
              bottom: '100%',
            }}
          >
            <Link to="#" className="link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
    burgerMenu: true,
    burgerMenuType: 'dropdown' as const,
  };

  return (
    <section>
      {props?.showCodeAppBarWithDropdownMenu && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <IFrame>
          <AppBar menuConfig={menuConfig} />
        </IFrame>
      </div>
    </section>
  );
};
