import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import {
  ICarouselWithDefaultProps,
  ImageItem,
} from '@ptg-react-app/interfaces';
import { PtgUiCarousel } from '@ptg-react-libs/carousel/carousel';

export const CarouselWithDefaultProps = (props: ICarouselWithDefaultProps) => {
  const imageList: ImageItem[] = [
    {
      id: '0',
      image: 'https://picsum.photos/id/328/3264/2448',
    },
    {
      id: '1',
      image: 'https://picsum.photos/id/431/5000/3334',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/5/5000/3334',
    },
  ];

  const componentCode = `
  import {PtgUiCarouselWithCard} from '@ptg-ui/react';

  interface ImageItem {
  id: string;
  image: string;
}

  const sampleImages: ImageItem[] = [
    {
      id: '0',
      image: 'https://picsum.photos/id/328/3264/2448',
    },
    {
      id: '1',
      image: 'https://picsum.photos/id/431/5000/3334',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/5/5000/3334',
    },
  ];  `;

  // Note: HTML code for carousel
  const htmlCode = `<PtgUiCarousel items={imageList}></PtgUiCarousel>`;

  return (
    <section>
      {props?.showCodeDefaultCarousel && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="carousel-component">
          <PtgUiCarousel
            backgroundColor="#222"
            items={imageList}
          ></PtgUiCarousel>
        </div>
      </div>
    </section>
  );
};
