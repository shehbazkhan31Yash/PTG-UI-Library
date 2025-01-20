import './breadcrumbs.scss';

import { BREADCRUMBS } from '../../mock/mocks';
import CodeIcon from '@mui/icons-material/Code';
import { PtgUiBreadcrumbs } from '@ptg-ui/react';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BreadcrumbData {
  title: string;
  link: string;
}
export default function Breadcrumb() {
  const [showCode, setShowCode] = useState(false);

  const { t } = useTranslation();

  const breadCrumbsDataArr: BreadcrumbData[] = BREADCRUMBS;
  const componentCode = `
    interface BreadcrumbData {
      title: string;
      link: string;
    };
    
    const breadCrumbsDataArr:BreadcrumbData[]= [
      { title: 'home', link: '/home'},
      { title: 'about us', link: '/about'},
      { title: 'contact us', link: '/contact'},
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
            onClick={() => setShowCode((prev) => !prev)}
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
