/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Grid Layout Example
 */

import './grid-layout.scss';
import { useTranslation } from 'react-i18next';
import {
  PtgUiCard,
  PtgUiGridColumn,
  PtgUiRow,
} from '@ptg-ui/libs/ptg-ui-react-lib/src';
import CodeIcon from '@mui/icons-material/Code';
import { useState } from 'react';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';

/* eslint-disable-next-line */

export function GridLayout() {
  const { t } = useTranslation();
  const [showCode, setShowCode] = useState(false);
  const onClick = () => {};

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const cardItems = [
    {
      image: 'assets/images/img1.png',
      title: 'Card title',
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: 'Go somewhere',
    },
    {
      image: 'assets/images/img1.png',
      title: 'Card title',
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: 'Go somewhere',
    },
    {
      image: 'assets/images/img1.png',
      title: 'Card title',
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: 'Go somewhere',
    },
    {
      image: 'assets/images/img1.png',
      title: 'Card title',
      content:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      button: 'Go somewhere',
    },
  ];

  const componentCode = ` const onClick = () => {};`;
  const htmlCode = ` 
  import { PtgUiRow, PtgUiGridColumn, PtgUiCard } from '@ptg-ui/react';
  import "@ptg-ui/react/lib/styles/index.css";

  <PtgUiRow>
    <PtgUiGridColumn
      xl={3}
      lg={6}
      md={6}
      sm={12}
      className={'mb-8'}
    >       
      <PtgUiCard
        image={image}
        title={title}
        description={content}
        buttonText={button}
        onClick={onClick}
        buttonColor={'#002144'}
        buttonWidth={'165px'}
        imageWidth={'100%'}
        imageHeight={'100%'}
        backgroundColor={'#ffffff'}
      />
    </PtgUiGridColumn> 
  </PtgUiRow>`;

  return (
    <div className="card-section-two bg-white rounded pt-2 mb-2 mt-2 ">
      <PtgUiRow>
        <PtgUiGridColumn md={10} className={'mt-1 mb-2'}>
          <h5 className="font-weight-bold example-heading">
            {t('GRID_LAYOUT_EXAMPLE_HEADING')}
          </h5>
        </PtgUiGridColumn>
        <div className="col-2 mr-5 mb-2">
          <CodeIcon
            onClick={ShowExampleCode}
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
      </PtgUiRow>
      <section className="bg-dark-primary m-4">
        <div className="container">
          <PtgUiRow>
            {cardItems.map((item) => {
              return (
                <PtgUiGridColumn
                  xl={3}
                  lg={6}
                  md={6}
                  sm={12}
                  className={'grid-item mb-8'}
                >
                  <PtgUiCard
                    image={item.image}
                    title={item.title}
                    description={item.content}
                    buttonText={item.button}
                    onClick={onClick}
                    buttonColor={'#002144'}
                    buttonWidth={'165px'}
                  />
                </PtgUiGridColumn>
              );
            })}
          </PtgUiRow>
        </div>
      </section>
      <section className="bg-image m-4">
        <div className="container">
          <PtgUiRow>
            <PtgUiGridColumn md={12} className={'text-center mb-5'}>
              <h2 className="text-white">{t('GRID_LAYOUT_OFFSET_HEADING')}</h2>
            </PtgUiGridColumn>
          </PtgUiRow>
          <PtgUiRow>
            <PtgUiGridColumn
              lg={4}
              md={4}
              sm={12}
              xs={12}
              className={'mb-8 mb-md-0'}
            >
              <PtgUiCard
                image={'assets/images/img1.png'}
                title={'New Card'}
                description={t('ADD_SOME_QUICK_EX_TEXT')}
                buttonText={t('GO_SOME_WHERE_TEXT')}
                onClick={onClick}
                buttonColor={'#002144'}
                buttonWidth={'180px'}
              />
            </PtgUiGridColumn>
            <PtgUiGridColumn
              lg={4}
              md={4}
              sm={12}
              xs={12}
              offsetMd={4}
              offsetSm={0}
            >
              <PtgUiCard
                image={'assets/images/img1.png'}
                title={'New Card'}
                description={t('ADD_SOME_QUICK_EX_TEXT')}
                buttonText={t('GO_SOME_WHERE_TEXT')}
                onClick={onClick}
                buttonColor={'#002144'}
                buttonWidth={'180px'}
              />
            </PtgUiGridColumn>
          </PtgUiRow>
        </div>
      </section>
    </div>
  );
}

export default GridLayout;
