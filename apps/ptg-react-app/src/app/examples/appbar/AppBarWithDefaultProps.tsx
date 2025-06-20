import { Link } from 'react-router-dom';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IAppBarWithDefaultProps } from '@ptg-react-app/interfaces';
import { PtgUiAppBar } from '@ptg-react-libs/appbar/AppBar';
import './AppBarWithDefaultProps.css'; // Import the CSS file
import IFrame from './IFrame';
import { useTranslation } from 'react-i18next';

export const AppBarWithDefaultProps = (props: IAppBarWithDefaultProps) => {
  const componentCode = `
  import { PtgUiAppBar } from '@ptg-react-libs/appbar/AppBar';
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

    <PtgUiAppBar menuConfig={menuConfig} />
 
  `;
const { t } = useTranslation();
  const menuItems = [
    {
      label: t('HOME'),
      link: '/home',
    },
    {
      label: 'Services',
      link: '/services',
    },
    {
      label: t('ABOUT_US'),
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
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={`${item.label}-${index}}`} className="menu-item">
            <Link to="#" className="link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
  };

  return (
    <section>
      {props?.showCodeDefaultAppBar && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <IFrame>
          <PtgUiAppBar menuConfig={menuConfig} />
        </IFrame>
      </div>
    </section>
  );
};
