import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import './carousel.scss';
import { useTranslation } from 'react-i18next';
import { CarouselWithDefaultProps } from './CarouselWithDefaultProps';
import { CarouselWithMaxWidth } from './CarouselWithMaxWidth';
import { CarouselWithThumbnail } from './CarouselWithThumbnail';
import { CarouselWithCustomPropsOne } from './CarouselWithCustomPropsOne';
import { CarouselWithAllCustomProps } from './CarouselWithAllCustomProps';

const CarouselExample = () => {
  const [showCodeDefaultCarousel, setShowCodeDefaultCarousel] =
    useState<boolean>(false);
  const [showCodeWithMaxWidth, setShowCodeWithMaxWidth] =
    useState<boolean>(false);

  const [showCodeWithThumbnail, setShowCodeWithThumbnail] =
    useState<boolean>(false);

  const [showCodeWithCustomPropsOne, setShowCodeWithCustomPropsOne] =
    useState<boolean>(false);

  const [showCodeWithAllCustomProps, setShowCodeWithAllCustomProps] =
    useState<boolean>(false);
  const { t } = useTranslation();

  // Note: Handle function to show code
  const ShowExampleWithDefaultProps = () =>
    setShowCodeDefaultCarousel(!showCodeDefaultCarousel);

  const ShowExampleWithCustomMaxWidth = () =>
    setShowCodeWithMaxWidth(!showCodeWithMaxWidth);

  const ShowExampleWithThumbnail = () =>
    setShowCodeWithThumbnail(!showCodeWithThumbnail);

  const ShowExampleWithCustomPropsOne = () =>
    setShowCodeWithCustomPropsOne(!showCodeWithCustomPropsOne);

  const ShowExampleWithAllCustomProps = () =>
    setShowCodeWithAllCustomProps(!showCodeWithAllCustomProps);

  return (
    <div>
      {/* Carousel With Default Props */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('CAROUSEL-WITH-DEFAULT-PROPERTY')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithDefaultProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <CarouselWithDefaultProps
            showCodeDefaultCarousel={showCodeDefaultCarousel}
          />
        </div>
      </section>

      {/* Carousel with Custom Properties Related with CSS */}
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('CAROUSEL-WITH-COSTOMIZE-WIDTH-FOR-IMAGE')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithCustomMaxWidth}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <CarouselWithMaxWidth showCodeWithMaxWidth={showCodeWithMaxWidth} />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t(
                'THUMBNAIL-NAVIGATION-AND-BUTTON-POSITION-MIDDLE-AND-IMAGE-IN-CIRCLE'
              )}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithThumbnail}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <CarouselWithThumbnail
            showCodeWithThumbnail={showCodeWithThumbnail}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('CAROUSEL-WITH-CARD-AND-CUSTOM-BACKGROUND')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithCustomPropsOne}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <CarouselWithCustomPropsOne
            showCodeWithCustomPropsOne={showCodeWithCustomPropsOne}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading">
              {' '}
              {t('CARAUSEL-WITH-ALL-CUSTOM-PROPS')}
            </h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleWithAllCustomProps}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <CarouselWithAllCustomProps
            showCodeWithAllCustomProps={showCodeWithAllCustomProps}
          />
        </div>
      </section>
    </div>
  );
};

export default CarouselExample;
