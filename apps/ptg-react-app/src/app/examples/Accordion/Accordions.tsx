import './Accordion.scss';
import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import { IAccordion } from '../../interfaces';
import { PtgUiAccordion } from '@ptg-ui/react';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { useTranslation } from 'react-i18next';
import { accordionMockData } from '../../mock/mocks';

export default function () {
  const { t } = useTranslation();
  const [showCode, setShowCode] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleShowCode = () => setShowCode((prev) => !prev);
  const accordionItems:IAccordion[] = accordionMockData(t)

  // Note : handle toggle function is used to toggle the accordion item
  const handleToggle = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  // Note: TS code is used to show the code snippet of the component
  const componentCode = `
   interface IAccordion {
     title: string;
     content: string;
   };
   
   const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
   const handleToggle = (index: number | null) => {
      if (index === activeIndex) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };

    const accordionItems: IAccordion[] = [
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
//  Note: HTML code is used to show the code snippet of the component
  const htmlCode = `
  import { PtgUiAccordion } from '@ptg-ui/react';
  import "@ptg-ui/react/lib/styles/index.css";
    
    <PtgUiAccordion
      accordionItems={accordionItems}
      handleToggle={handleToggle}
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
        <div className="accordion-component col-md-12 px-4">
          <PtgUiAccordion
            accordionItems={accordionItems}
            handleToggle={handleToggle}
            activeIndex={activeIndex}
          />
        </div>
      </div>
    </section>
  );
}
