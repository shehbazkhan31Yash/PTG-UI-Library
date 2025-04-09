import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import { AppBarWithDefaultProps } from './AppBarWithDefaultProps';
import './appbar.css';
import { AppBarWithBurgerMenu } from './AppBarWithBurgerMenu';
import { AppBarWithMenuBottom } from './AppBarWithMenuBottom';
import { AppBarWithDropDown } from './AppBarWithDropdown';
import { AppBarWithResponsiveness } from './AppBarWithResponsiveness';

const AppBarExample = () => {
  const { t } = useTranslation();

  const [showCodeDefaultAppBar, setShowCodeDefaultAppBar] =
    useState<boolean>(false);
  const [showCodeAppBarWithBurger, setShowCodeAppBarWithBurger] =
    useState<boolean>(false);
  const [showCodeAppBarWithMenuBottom, setShowCodeAppBarWithMenuBottom] =
    useState<boolean>(false);
  const [showCodeAppBarWithDropdownMenu, setShowCodeAppBarWithDropdownMenu] =
    useState<boolean>(false);
  const [
    showCodeAppBarWithResponsiveness,
    setShowCodeAppBarWithResponsiveness,
  ] = useState<boolean>(false);

  const ShowExampleWithResponsiveness = () =>
    setShowCodeAppBarWithResponsiveness(!showCodeAppBarWithResponsiveness);

  const ShowExampleWithDropdownMenu = () =>
    setShowCodeAppBarWithDropdownMenu(!showCodeAppBarWithDropdownMenu);

  const ShowExampleWithDefaultProps = () =>
    setShowCodeDefaultAppBar(!showCodeDefaultAppBar);

  const ShowExampleWithBurgerMenu = () =>
    setShowCodeAppBarWithBurger(!showCodeAppBarWithBurger);

  const ShowExampleWithMenuBottom = () =>
    setShowCodeAppBarWithMenuBottom(!showCodeAppBarWithMenuBottom);

  return (
    <div>
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AppBar with Default Props')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithDefaultProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />

          <AppBarWithDefaultProps
            showCodeDefaultAppBar={showCodeDefaultAppBar}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AppBar with Burger Menu')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithBurgerMenu}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />

          <AppBarWithBurgerMenu
            showCodeAppBarWithBurger={showCodeAppBarWithBurger}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AppBar with Menu at Bottom')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithMenuBottom}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />

          <AppBarWithMenuBottom
            showCodeAppBarWithMenuBottom={showCodeAppBarWithMenuBottom}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('AppBar with Dropdown Menu')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithDropdownMenu}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />

          <AppBarWithDropDown
            showCodeAppBarWithDropdownMenu={showCodeAppBarWithDropdownMenu}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('Responsive AppBar')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithResponsiveness}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />

          <AppBarWithResponsiveness
            showCodeAppBarWithResponsiveness={showCodeAppBarWithResponsiveness}
          />
        </div>
      </section>
    </div>
  );
};
export default AppBarExample;
