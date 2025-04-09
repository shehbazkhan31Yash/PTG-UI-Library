import { Link } from 'react-router-dom';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IAppBarWithBurgerMenu } from '@ptg-react-app/interfaces';
import { AppBar } from '@ptg-react-libs/appbar/AppBar';
import './AppBarWithDefaultProps.css';
import IFrame from './IFrame';

export const AppBarWithBurgerMenu = (props: IAppBarWithBurgerMenu) => {
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
    logo: 'https://via.placeholder.com/150',
    menuItems: (
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <Link to={item.link} className="link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
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
            style={{ listStyleType: 'none', padding: '5px' }}
          >
            <Link to="#" className="link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
    burgerMenu: true,
  };

  return (
    <section>
      {props?.showCodeAppBarWithBurger && (
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
