import React from 'react';
import './breadcrumbs.scss';
import { Link } from 'react-router-dom';

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
              <Link to={`${item.link}`}>{item.title}</Link>
            </li>
          );
        }
        return <li>{item.title}</li>;
      })}
    </ul>
  );
}

export default PtgUiBreadcrumbs;
