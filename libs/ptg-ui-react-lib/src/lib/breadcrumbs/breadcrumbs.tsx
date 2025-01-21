import './breadcrumbs.scss';

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
              <a href={`${item.link}`}>{t(item.title)}</a>
            </li>
          );
        }
        return <li>{t(item.title)}</li>;
      })}
    </ul>
  );
}

export default PtgUiBreadcrumbs;
