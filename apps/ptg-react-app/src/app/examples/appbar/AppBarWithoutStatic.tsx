import { Link } from 'react-router-dom';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IAppBarWithoutStatic } from '@ptg-react-app/interfaces';
import { AppBar } from '@ptg-react-libs/appbar/AppBar';
import './AppBarWithDefaultProps.css';
import IFrame from './IFrame';

export const AppBarWithoutStatic = (props: IAppBarWithoutStatic) => {
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
    burgerMenu: true,
    static: true,
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
            key={`${item.label}-${index}}`}
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
    static: true,
  };

  return (
    <section>
      {props?.showCodeAppBarWithoutStatic && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <IFrame>
          <AppBar menuConfig={menuConfig} />
          <div className="mb-3"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium rutrum urna at imperdiet. Sed sodales aliquet nulla, et
            lobortis nulla vulputate ut. Nunc imperdiet nibh vel lacus
            vestibulum, rhoncus euismod lacus bibendum. Suspendisse maximus,
            lectus ut gravida aliquam, dolor ex faucibus diam, id cursus risus
            nulla in turpis. Integer lobortis condimentum sodales. Maecenas
            lorem neque, rhoncus sed neque eget, viverra euismod lectus. Duis
            posuere consequat mauris id tincidunt. Sed vehicula massa at erat
            scelerisque lacinia. Donec at est bibendum orci rutrum elementum. Ut
            at justo lectus. Nunc velit sapien, ultricies nec interdum at,
            pretium sed dolor. Sed tempus velit sit amet consectetur bibendum.
            Cras tincidunt ornare diam a ultrices. In ac sapien quis purus
            posuere sodales. Ut non est ultricies, ullamcorper velit
            scelerisque, efficitur risus. Aenean sodales magna a sapien dictum,
            ut convallis ligula molestie. Nullam sed consectetur sapien. Nam
            molestie eleifend metus a fermentum. Quisque quis augue ut ligula
            tincidunt scelerisque. Suspendisse tincidunt faucibus efficitur. Sed
            non lectus eu justo mollis pharetra. Suspendisse viverra eu erat in
            imperdiet. Integer vitae neque ac est commodo tempus. Nam diam quam,
            aliquam in tristique ut, accumsan eu augue. Pellentesque volutpat
            metus aliquet, elementum justo et, condimentum magna. Cras tincidunt
            porttitor tellus a pretium. Praesent interdum felis eget eros
            volutpat, et rhoncus mauris placerat. Duis a efficitur lorem, a
            sodales lorem. Morbi tempor sit amet velit sed rhoncus. Vivamus
            cursus orci mauris, sed ultrices urna tincidunt sed. Duis risus mi,
            lacinia et massa sit amet, faucibus vulputate nisi. Suspendisse
            potenti. Morbi at sodales enim, nec finibus orci. In malesuada
            vehicula dolor. Sed nibh est, maximus et nisl ut, pellentesque
            luctus arcu. Vestibulum mattis quis ipsum auctor egestas. Nunc justo
            arcu, maximus vitae facilisis et, fermentum vel sapien. Morbi
            euismod ut odio ac consectetur. Mauris sed scelerisque libero.
            Suspendisse non felis nulla. Fusce ullamcorper bibendum orci vitae
            gravida. Maecenas porttitor, tortor fringilla ornare consectetur,
            leo metus mattis sem, ac rutrum dolor dolor at ex. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Proin fringilla metus nec
            rutrum vehicula. Quisque a semper ligula, nec porta est. Nunc
            pretium mauris quis accumsan ultrices. Curabitur fringilla, orci ac
            eleifend semper, diam arcu facilisis odio, sed rutrum magna velit
            bibendum augue. Etiam auctor urna sit amet sem laoreet pellentesque.
            Maecenas vitae malesuada diam. Mauris elementum sem at maximus
            venenatis. Integer ut velit non sapien placerat semper. Sed lobortis
            accumsan sem in consectetur. Vestibulum laoreet tellus id enim
            ultricies, ut semper massa ornare. Etiam sem tellus, vulputate ut
            congue ut, maximus nec nisl. Integer ac diam vitae eros volutpat
            convallis posuere euismod orci. Maecenas eu egestas est. Sed eu nunc
            tempor, egestas turpis sed, pulvinar elit. Suspendisse nec dictum
            arcu. Duis ac varius risus, sit amet semper massa. Fusce dapibus
            tempor arcu id porttitor. Nulla fermentum nisl nec sollicitudin
            posuere.
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pretium rutrum urna at imperdiet. Sed sodales aliquet nulla, et
            lobortis nulla vulputate ut. Nunc imperdiet nibh vel lacus
            vestibulum, rhoncus euismod lacus bibendum. Suspendisse maximus,
            lectus ut gravida aliquam, dolor ex faucibus diam, id cursus risus
            nulla in turpis. Integer lobortis condimentum sodales. Maecenas
            lorem neque, rhoncus sed neque eget, viverra euismod lectus. Duis
            posuere consequat mauris id tincidunt. Sed vehicula massa at erat
            scelerisque lacinia. Donec at est bibendum orci rutrum elementum. Ut
            at justo lectus. Nunc velit sapien, ultricies nec interdum at,
            pretium sed dolor. Sed tempus velit sit amet consectetur bibendum.
            Cras tincidunt ornare diam a ultrices. In ac sapien quis purus
            posuere sodales. Ut non est ultricies, ullamcorper velit
            scelerisque, efficitur risus. Aenean sodales magna a sapien dictum,
            ut convallis ligula molestie. Nullam sed consectetur sapien. Nam
            molestie eleifend metus a fermentum. Quisque quis augue ut ligula
            tincidunt scelerisque. Suspendisse tincidunt faucibus efficitur. Sed
            non lectus eu justo mollis pharetra. Suspendisse viverra eu erat in
            imperdiet. Integer vitae neque ac est commodo tempus. Nam diam quam,
            aliquam in tristique ut, accumsan eu augue. Pellentesque volutpat
            metus aliquet, elementum justo et, condimentum magna. Cras tincidunt
            porttitor tellus a pretium. Praesent interdum felis eget eros
            volutpat, et rhoncus mauris placerat. Duis a efficitur lorem, a
            sodales lorem. Morbi tempor sit amet velit sed rhoncus. Vivamus
            cursus orci mauris, sed ultrices urna tincidunt sed. Duis risus mi,
            lacinia et massa sit amet, faucibus vulputate nisi. Suspendisse
            potenti. Morbi at sodales enim, nec finibus orci. In malesuada
            vehicula dolor. Sed nibh est, maximus et nisl ut, pellentesque
            luctus arcu. Vestibulum mattis quis ipsum auctor egestas. Nunc justo
            arcu, maximus vitae facilisis et, fermentum vel sapien. Morbi
            euismod ut odio ac consectetur. Mauris sed scelerisque libero.
            Suspendisse non felis nulla. Fusce ullamcorper bibendum orci vitae
            gravida. Maecenas porttitor, tortor fringilla ornare consectetur,
            leo metus mattis sem, ac rutrum dolor dolor at ex. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Proin fringilla metus nec
            rutrum vehicula. Quisque a semper ligula, nec porta est. Nunc
            pretium mauris quis accumsan ultrices. Curabitur fringilla, orci ac
            eleifend semper, diam arcu facilisis odio, sed rutrum magna velit
            bibendum augue. Etiam auctor urna sit amet sem laoreet pellentesque.
            Maecenas vitae malesuada diam. Mauris elementum sem at maximus
            venenatis. Integer ut velit non sapien placerat semper. Sed lobortis
            accumsan sem in consectetur. Vestibulum laoreet tellus id enim
            ultricies, ut semper massa ornare. Etiam sem tellus, vulputate ut
            congue ut, maximus nec nisl. Integer ac diam vitae eros volutpat
            convallis posuere euismod orci. Maecenas eu egestas est. Sed eu nunc
            tempor, egestas turpis sed, pulvinar elit. Suspendisse nec dictum
            arcu. Duis ac varius risus, sit amet semper massa. Fusce dapibus
            tempor arcu id porttitor. Nulla fermentum nisl nec sollicitudin
            posuere.
          </p>
        </IFrame>
      </div>
    </section>
  );
};
