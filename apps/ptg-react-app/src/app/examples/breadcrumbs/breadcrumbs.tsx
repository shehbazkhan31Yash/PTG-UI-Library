import { useState } from 'react';
import { PtgUiBreadcrumbs } from '@ptg-ui/react';
import CodeIcon from '@mui/icons-material/Code';
import { useTranslation } from 'react-i18next';
import './breadcrumbs.scss';
import { IBreadcrumbItem } from '@ptg-react-app/interfaces';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

export default function Breadcrumb() {
  const [showCode, setShowCode] = useState<boolean>(false);

  const { t } = useTranslation();

  const breadCrumbsDataArr: IBreadcrumbItem[] = [
    { title: `${t('HOME')}`, link: '/home', id:1 },
    { title: `${t('ABOUT_US')}`, link: '/about', id:2 },
    { title: `${t('CONTACT_US')}`, link: '/contact', id:3 },
    
  ];
  const handleShowCode = ()=>{
    setShowCode((prev) => !prev)
  }
  const componentCode = `
    import { PtgUiBreadcrumbs } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    export interface IBreadcrumbItem {
    title: string;
    link: string;
    id:number
  }
    const breadCrumbsDataArr:IBreadcrumbItem[]= [
      { title: 'home', link: '/home', id:1},
      { title: 'about us', link: '/about', id:2},
      { title: 'contact us', link: '/contact', id;},
    ];,
  `;
  const htmlCode = `
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
