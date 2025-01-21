import './accordion.scss';

import { useState } from 'react';

/* eslint-disable-next-line */
export interface AccordionItemProps {
    title?:any;
    content?:any;
}

export function AccordionItem({title,content}: AccordionItemProps) {
      const [opened, setOpened] = useState(false);
      const className = `accordion-item ${opened && 'accordion-item--opened'}`;
  return (
    <div className={className} onClick={() => setOpened(!opened)}>
    <div className="accordion-item__line">
      <span className="accordion-item__icon" />
    </div>
    <div className="accordion-item__inner">
      <div className="accordion-body">
        {content}
      </div>
    </div>
  </div>
  );
}

export default AccordionItem;
