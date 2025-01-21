import './breadcrumbs.scss';

import { BREADCRUMBS } from '../../mock/mocks';
import CodeIcon from '@mui/icons-material/Code';
import { IBreadcrumb } from './breadcrumbs.interface';
import { PtgUiBreadcrumbs } from '@ptg-ui/react';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Breadcrumb() {
  const [showCode, setShowCode] = useState(false);
  const handleShowCode = ()=>setShowCode((prev) => !prev)
  const { t } = useTranslation();

  const breadCrumbsDataArr: IBreadcrumb[] = BREADCRUMBS;
  const componentCode = `
    interface IBreadcrumb {
      title: string;
      link: string;
    };
    
    const breadCrumbsDataArr:IBreadcrumb[]= [
      { title: 'Home', link: '/home'},
      { title: 'About Us', link: '/about'},
      { title: 'Contact Us', link: '/contact'},
    ];
  `;
  const htmlCode = `
    import { PtgUiBreadcrumbs } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";
    
    <PtgUiBreadcrumbs datalist={breadCrumbsDataArr} />
 `;

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
        <div className="breadcrumbs-component col-md-12">
          <PtgUiBreadcrumbs datalist={breadCrumbsDataArr} />
        </div>
      </div>
    </section>
  );
}
