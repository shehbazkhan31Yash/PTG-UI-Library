import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { ICarouselWithMaxWidth, ImageItem } from '@ptg-react-app/interfaces';
import { PtgUiCarousel } from '@ptg-react-libs/carousel/carousel';

export const CarouselWithMaxWidth = (props: ICarouselWithMaxWidth) => {
  const imageList: ImageItem[] = [
    {
      id: '0',
      image: 'https://picsum.photos/id/328/3264/2448',
      maxWidth: '800px',
    },
    {
      id: '1',
      image: 'https://picsum.photos/id/431/5000/3334',
      maxWidth: '800px',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/5/5000/3334',
      maxWidth: '800px',
    },
  ];

  const componentCode = `
  import {PtgUiCarouselWithCard} from '@ptg-ui/react';

  interface ImageItem {
  id: string;
  image: string;
  maxWidth?: string;
}

  const sampleImages: ImageItem[] = [
    {
      id: '0',
      image: 'https://picsum.photos/id/328/3264/2448',
      maxWidth: '800px',
    },
    {
      id: '1',
      image: 'https://picsum.photos/id/431/5000/3334',
      maxWidth: '800px',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/5/5000/3334',
      maxWidth: '800px',
    },
  ];  `;

  // Note: HTML code for carousel
  const htmlCode = `<PtgUiCarousel items={imageList}></PtgUiCarousel>`;

  return (
    <section>
      {props?.showCodeWithMaxWidth && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="carousel-component">
          <PtgUiCarousel
            items={imageList}
            backgroundColor="#222"
          ></PtgUiCarousel>
        </div>
      </div>
    </section>
  );
};
