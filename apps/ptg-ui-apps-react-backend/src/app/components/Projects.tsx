import React from 'react';
import CardComponent from './CardComponent';
import { DashboardCardItems } from '@ptg-ui-apps-react-backend/utils/DashboardCardItems';

const Projects: React.FC = () => {
  const items = DashboardCardItems;
  return (
    <section id="projects" className="mt-5">
      <div className="row">
        {items.map((item, index) => (
          <CardComponent
            keyName={item.title + '' + index}
            title={item.title}
            content={item.content}
            imageUrl={item.imageUrl}
            viewLink={item.viewLink}
            docLink={item.docLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
