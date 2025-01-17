/**
 * @since April 2022
 * @author Harsha Zalawa
 * @desc Grid Layout Example
 */

import './grid-layout.scss';
import { useTranslation } from 'react-i18next';
import { PtgUiCard, PtgUiGridColumn } from '@ptg-ui/libs/ptg-ui-react-lib/src';

/* eslint-disable-next-line */
export interface GridLayoutProps {}

export function GridLayout(props: GridLayoutProps) {
  const { t } = useTranslation();
  const onClick = () => {};
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

  return (
    <div className="card-section-two bg-white rounded pt-2 mb-2 mt-2 pb-4">
      <div className="row">
        <div className="col-md-11 text-center mb-2 mt-1">
          <h5 className="text-black">{t('GRID_LAYOUT_EXAMPLE_HEADING')}</h5>
        </div>
        <hr className="horizontal-line" />
      </div>

      <section className="bg-dark-primary m-4">
        <div className="container">
          <div className="row">
          {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-8">
                    <div className="card">
                        <img src="assets/images/img1.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{t('CARD_TITLE_TEXT')}</h5>
                            <p className="card-text">{t('ADD_SOME_QUICK_EX_TEXT')}</p>
                            <a href="#" className="btn btn-primary go-somewhere-button">{t('GO_SOME_WHERE_TEXT')}</a>
                        </div>
                    </div>
                </div>
                 */}
            {cardItems.map((item) => {
              return (
                <PtgUiGridColumn
                  xl={3}
                  lg={6}
                  md={6}
                  sm={12}
                  className={'mb-8'}
                >
                  <PtgUiCard
                    image={item.image}
                    // title={item.title}
                    description={item.content}
                    buttonText={item.button}
                    onClick={onClick}
                    buttonColor={'#002144'}
                    buttonWidth={'165px'}
                  />
                </PtgUiGridColumn>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-image m-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="text-white">{t('GRID_LAYOUT_OFFSET_HEADING')}</h2>
            </div>
          </div>
          <div className="row">
            <PtgUiGridColumn lg={4} md={4} sm={12} xs={12} className={"mb-4 mb-md-0"}>
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
            <PtgUiGridColumn lg={4} md={4} sm={12} xs={12} offsetMd={4} offsetSm={0}>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default GridLayout;
