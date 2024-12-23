import React from 'react';
import './breadcrumbs.scss';

export interface PtgUiBreadcrumbsProps {
  datalist: any;
}

export function PtgUiBreadcrumbs(props: PtgUiBreadcrumbsProps) {
  const { datalist } = props;
  return (
    <ul className="breadcrumb">
      {datalist?.map((item, i) => {
        if (datalist.length - 1 > i) {
          return (
            <li>
              <a href={`${item.link}`}>{item.title}</a>
            </li>
          );
        }
        return <li>{item.title}</li>;
      })}
    </ul>
  );
}

export default PtgUiBreadcrumbs;
