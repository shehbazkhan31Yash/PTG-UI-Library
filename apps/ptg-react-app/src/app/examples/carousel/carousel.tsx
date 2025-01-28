/**
 * @since December 2023
 * @author Nimish Jain
 * @uses Example using Carousel as reusable component.
 *
 */

import { useState } from 'react';
import { PtgUiCarousel } from '@ptg-ui/react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import './carousel.scss';
import { useTranslation } from 'react-i18next';
const CarouselExample = () => {
  const [showCode, setShowCode] = useState<boolean>(false);
  const { t } = useTranslation();

  // Note: Handle function to show code
  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

//Note: Sample images for carousel
  const sampleImages = [
    'https://picsum.photos/id/328/3264/2448',
    'https://picsum.photos/id/431/5000/3334',
    'https://picsum.photos/id/5/5000/3334',
  ];

  // Note: Component code for carousel
  const componentCode = `
  import {PtgUiCarousel} from '@ptg-ui/react';

  const sampleImages = [
    'https://picsum.photos/id/328/3264/2448',
    'https://picsum.photos/id/431/5000/3334',
    'https://picsum.photos/id/5/5000/3334',
  ];  `;

  // Note: HTML code for carousel
  const htmlCode = `
      <PtgUiCarousel
        images={sampleImages}
        imgWidth="100%"
        imgHeight="300px"
        showIndicators={true}
      ></PtgUiCarousel>`;


  return (
    <div>
      <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
        <div className="row">
          <div className="col-10 mt-1">
            <h5 className="font-weight-bold example-heading"> {t('CAROUSEL')}</h5>
          </div>
          <div className="col-2 mr-5 mb-2">
            <CodeIcon
              onClick={ShowExampleCode}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
          <div className="mb-3">
            {showCode && (
              <ShowCodeComponent
                componentCode={componentCode}
                htmlCode={htmlCode}
              />
            )}
            <div className="carousel-component">
              <PtgUiCarousel
                images={sampleImages}
                imgWidth="100%"
                imgHeight="300px"
                showIndicators={true}
              ></PtgUiCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselExample;
