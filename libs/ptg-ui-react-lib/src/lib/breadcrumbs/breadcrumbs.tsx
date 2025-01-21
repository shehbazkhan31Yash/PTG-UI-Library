import './breadcrumbs.scss';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface PtgUiBreadcrumbsProps {
  datalist: any;
}

export function PtgUiBreadcrumbs(props: PtgUiBreadcrumbsProps) {
  const { t } = useTranslation();
  const { datalist } = props;
  return (
    <ul className="breadcrumb">
      {datalist?.map((item, i) => {
        if (datalist.length - 1 > i) {
          return (
            <li>
              <Link to={`${item.link}`}>{t(item.title)}</Link>
            </li>
          );
        }
        return <li>{t(item.title)}</li>;
      })}
    </ul>
  );
}

export default PtgUiBreadcrumbs;
