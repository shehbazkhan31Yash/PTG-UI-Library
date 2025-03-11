import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IBreadcrumb } from '@ptg-react-app/interfaces';
import { breadCrumbsMockData } from '@ptg-react-app/mock/mocks';
import { PtgUiBreadcrumbs } from '@ptg-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './breadcrumbs.scss';

export default function Breadcrumb() {
  const [showCode, setShowCode] = useState<boolean>(false);
  const { t } = useTranslation();

  //Note: To get breadcrumbs data with translation
  const breadCrumbsDataArr: IBreadcrumb[] = breadCrumbsMockData(t)

  // Note: handle toggle to show/hide code 
  const handleShowCode = () => {
    setShowCode(!showCode)
  }

  const componentCode = `
    import { PtgUiBreadcrumbs } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    export interface IBreadcrumb {
    title: string;
    link: string;
  }
    const breadCrumbsDataArr:IBreadcrumb[]= [
      { title: 'home', link: '/home',},
      { title: 'about us', link: '/about',},
      { title: 'contact us', link: '/contact',},
    ]
  `;
  const htmlCode = `<PtgUiBreadcrumbs datalist={breadCrumbsDataArr} />`;

  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
      <div className="row">
        <div className="col-10 mb-2 mt-2">
          <h5 className="font-weight-bold example-heading">
            {t('BREADCRUMBS')}
          </h5>
        </div>
        <div className="col-2">
          <CodeIcon
            onClick={handleShowCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />
        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
        <div className="row">
          <div className="breadcrumbs-component col-md-12">
            <PtgUiBreadcrumbs datalist={breadCrumbsDataArr} />
          </div>
        </div>
      </div>
    </section>
  );
}
