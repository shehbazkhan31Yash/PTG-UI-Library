import React, { useState } from 'react';
import { PtgUiAccordian } from '@ptg-ui/react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import './accordion.scss';
import { useTranslation } from 'react-i18next';

export default function Accordian() {
  const { t } = useTranslation();
  const [showCode, setShowCode] = useState(false);
  const [activeIndex, setActiveIndex] = useState<any>(0);

  const accordionItems = [
    {
      title: `${t('ACCORDION_TITLE')} - #1`,
      content: `${t('ACCORDION_CONTENT')}`,
    },
    {
      title: `${t('ACCORDION_TITLE')} - #2`,
      content: `${t('ACCORDION_CONTENT')}`,
    },
    {
      title: `${t('ACCORDION_TITLE')} - #3`,
      content: `${t('ACCORDION_CONTENT')}`,
    },
  ];

  const handleToggle = (index) => {
    if (index == activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const componentCode = `
    import { PtgUiAccordian } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    const [activeIndex, setActiveIndex] = useState<any>(0);

    const handleToggle = (index) => {
      if (index == activeIndex) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };

    const accordionItems = [
      {
        title: 'Accordion Item #1',
        content:
          'Lorem ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken.',
      },
      {
        title: 'Accordion Item #2',
        content:
          'Lorem ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken.',
      },
      {
        title: 'Accordion Item #3',
        content:
          'Lorem ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken.',
      },
    ];
 `;
  const htmlCode = `
    <PtgUiAccordian
      accordionItems={accordionItems}
      handleToggle={(index) => handleToggle(index)}
      activeIndex={activeIndex}
    />
 `;
  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
      <div className="row">
        <div className="col-10 mb-2 mt-2">
          <h5 className="font-weight-bold example-heading">{t('ACCORDION')}</h5>
        </div>
        <div className="col-2 mb-2 mt-1">
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
        <div className="accordion-component col-md-11 col-sm-7 ms-3">
          <PtgUiAccordian
            accordionItems={accordionItems}
            handleToggle={(index) => handleToggle(index)}
            activeIndex={activeIndex}
          />
        </div>
      </div>
    </section>
  );
}
