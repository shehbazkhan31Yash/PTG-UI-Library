import './breadcrumbs.scss';
import { Link } from 'react-router-dom';
import { IPtgUiBreadcrumbsProps } from '../interfaces'; 
import React from 'react';

export class PtgUiBreadcrumbs extends React.Component<IPtgUiBreadcrumbsProps> {
  constructor(props:IPtgUiBreadcrumbsProps){
    super(props)
  }
   
  override render() {
    const { datalist } = this.props;
    return (
      <ul className="breadcrumb">
        {datalist?.map((item, i) => {
          if (datalist.length-1>i) {
            return (
              <li key={item.title}>
                <Link to={`${item.link}`}>{item.title}</Link>
              </li>
            );
          }
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    );
  }
}

export default PtgUiBreadcrumbs;
