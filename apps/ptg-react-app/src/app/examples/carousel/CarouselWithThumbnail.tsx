import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { ICarouselWithThumbnail, ImageItem } from '@ptg-react-app/interfaces';
import { PtgUiCarousel } from '@ptg-react-libs/carousel/carousel';
import './CarouselWithThumbnail.css';

export const CarouselWithThumbnail = (props: ICarouselWithThumbnail) => {
  const imageList: ImageItem[] = [
    {
      id: '0',
      image: 'https://picsum.photos/id/328/3264/2448',
      maxWidth: '800px',
      shape: 'circle',
      backgroundColor: '#222',
    },
    {
      id: '1',
      image: 'https://picsum.photos/id/431/5000/3334',
      maxWidth: '800px',
      shape: 'circle',
      backgroundColor: '#222',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/5/5000/3334',
      maxWidth: '800px',
      shape: 'circle',
      backgroundColor: '#222',
    },
  ];

  const componentCode = `
  import {PtgUiCarouselWithCard} from '@ptg-ui/react';

  interface ImageItem {
  id: string;
  image: string;
  maxWidth?: string;
  shape?: 'circle' | 'rectangle' | 'square';
}

  const sampleImages: ImageItem[] = [
    {
      id: '0',
      image: 'https://picsum.photos/id/328/3264/2448',
      maxWidth: '800px',
      shape: 'circle'
    },
    {
      id: '1',
      image: 'https://picsum.photos/id/431/5000/3334',
      maxWidth: '800px',
      shape: 'circle'
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/5/5000/3334',
      maxWidth: '800px',
      shape: 'circle'
    },
  ];  `;

  // Note: HTML code for carousel
  const htmlCode = `
          <PtgUiCarousel
            items={imageList}
            navigationOnIcon={true}
            buttonPosition="middle"
          ></PtgUiCarousel>`;

  return (
    <section>
      {props?.showCodeWithThumbnail && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="carousel-component">
          <PtgUiCarousel
            items={imageList}
            navigationOnIcon={true}
            buttonPosition="middle"
          ></PtgUiCarousel>
        </div>
      </div>
    </section>
  );
};
