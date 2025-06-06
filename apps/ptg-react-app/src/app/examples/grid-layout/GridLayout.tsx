/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Grid Layout Example
 */

import '@ptg-react-app/examples/grid-layout/./GridLayout.scss';
import { useTranslation } from 'react-i18next';
import { PtgUiCard, PtgUiGridColumn, PtgUiRow } from '@ptg-ui/react';
import CodeIcon from '@mui/icons-material/Code';
import { useState } from 'react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { CARD_ITEMS } from '@ptg-react-app/mock/mocks';
import { CARD_BUTTON } from '@ptg-react-app/constants/Constant';
import { ICardItems } from '@ptg-react-app/interfaces';
import './GridLayout.scss';

/* eslint-disable-next-line */

export function GridLayout() {
  const { t } = useTranslation();
  const [showCode, setShowCode] = useState<boolean>(false);

  const ShowExampleCode = () => {
    if (!showCode) setShowCode(true);
    else setShowCode(false);
  };

  const cardItems: ICardItems[] = CARD_ITEMS;

  const componentCode = `
    const BUTTON_TEXT_COLOR = "#fff"
    const BUTTON_COLOR = '#002144',
    const BUTTON_WIDTH = '165px';
    const IMAGE_WIDTH='100%';
    const IMAGE_HEIGHT='100%'; 
    const onClick = () => {};`;

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
        image={"assets/images/img1.png"}
        title={"Card title"}
        description={"Card description"}
        buttonText={"Go somewhere"}
        onClick={onClick}
        buttonColor={BUTTON_COLOR}
        buttonWidth={BUTTON_WIDTH}
        imageWidth={IMAGE_WIDTH}
        imageHeight={IMAGE_HEIGHT}
        backgroundColor={BACKGROUND_COLOR}
        buttonTextColor={BUTTON_TEXT_COLOR}
      />
    </PtgUiGridColumn> 
  </PtgUiRow>`;

  return (
    <div>
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <PtgUiRow>
          <PtgUiGridColumn md={9} className={'ptg-ui-mt-1 ptg-ui-mr-4'}>
            <h5 className="font-weight-bold example-heading">
              {t('GRID_LAYOUT_EXAMPLE_HEADING')}
            </h5>
          </PtgUiGridColumn>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleCode}
              fontSize="large"
              className="show-code-icon"
            />
          </div>
          <hr className="horizontal-line" />
          {showCode && (
            <ShowCodeComponent
              componentCode={componentCode}
              htmlCode={htmlCode}
            />
          )}
        </PtgUiRow>
        <PtgUiRow>
          {cardItems.map((item) => {
            return (
              <PtgUiGridColumn
                xl={3}
                lg={6}
                md={6}
                sm={12}
                className={'ptg-ui-grid-item ptg-ui-mb-8'}
                key={item.id}
              >
                <PtgUiCard
                  image={item.image}
                  title={item.title}
                  description={item.content}
                  buttonText={item.button}
                  buttonColor={CARD_BUTTON.COLOR}
                  buttonWidth={CARD_BUTTON.WIDTH}
                />
              </PtgUiGridColumn>
            );
          })}
        </PtgUiRow>
      </section>
      <section className="bg-image m-4">
        <div className="container">
          <PtgUiRow>
            <PtgUiGridColumn
              md={12}
              className={'pgt-ui-text-center ptg-ui-mb-5'}
            >
              <h2 className="text-white">{t('GRID_LAYOUT_OFFSET_HEADING')}</h2>
            </PtgUiGridColumn>
          </PtgUiRow>
          <PtgUiRow>
            <PtgUiGridColumn
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={'ptg-ui-mb-8 ptg-ui-mb-md-0'}
            >
              <PtgUiCard
                image={'assets/images/img1.png'}
                title={t('CARD_TITLE_TEXT')}
                description={t('ADD_SOME_QUICK_EX_TEXT')}
                buttonText={t('GO_SOME_WHERE_TEXT')}
                buttonColor={CARD_BUTTON.COLOR}
                buttonWidth={CARD_BUTTON.WIDTH}
              />
            </PtgUiGridColumn>
            <PtgUiGridColumn
              lg={4}
              md={6}
              sm={12}
              xs={12}
              offsetMd={4}
              offsetSm={0}
            >
              <PtgUiCard
                image={'assets/images/img1.png'}
                title={t('CARD_TITLE_TEXT')}
                description={t('ADD_SOME_QUICK_EX_TEXT')}
                buttonText={t('GO_SOME_WHERE_TEXT')}
                buttonColor={CARD_BUTTON.COLOR}
                buttonWidth={CARD_BUTTON.WIDTH}
              />
            </PtgUiGridColumn>
          </PtgUiRow>
        </div>
      </section>
    </div>
  );
}

export default GridLayout;
