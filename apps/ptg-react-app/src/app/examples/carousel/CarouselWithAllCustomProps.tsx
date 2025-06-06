import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import {
  ICarouselWithAllCustomProps,
  ImageItem,
} from '@ptg-react-app/interfaces';
import { PtgUiCarousel } from '@ptg-react-libs/carousel/carousel';

export const CarouselWithAllCustomProps = (
  props: ICarouselWithAllCustomProps
) => {
  const buttonProps = {
    iconLeft: '<',
    iconRight: '>',
    style: {
      backgroundColor: 'brown',
      color: 'white',
      width: '40px',
      height: '40px',
    },
  };

  const imageList: ImageItem[] = [
    {
      id: '0',
      image: 'https://picsum.photos/id/328/3264/2448',
      title: 'Understanding and Managing Self',
      description: {
        __html: `
            <ul>
                <li>Discover your personality preferences</li>
                <li>Identify your strengths</li>
                <li>Your stressors and triggers</li>
                <li>Your ideal roles</li>
                <li>How to manage yourself to be the best you</li>
                <li>To relate to others, first understand & manage yourself</li>
            </ul>`,
      },
      shape: 'circle' as const,
      backgroundColor: '#0047AB',
      margin: '10px',
      padding: '10px',
    },
    {
      id: '1',
      image: 'https://picsum.photos/id/431/5000/3334',
      description: { __html: '<p>This is a description for Image 2.</p>' },
      title: 'Image 2',
      shape: 'square' as const,
      backgroundColor: '#0047AB',
      margin: '10px',
      padding: '10px',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/5/5000/3334',
      shape: 'rectangle' as const,
      backgroundColor: '#0047AB',
      maxWidth: '800px',
    },
  ];

  // Note: Component code for carousel
  const componentCode = `
  import {PtgUiCarouselWithCard} from '@ptg-ui/react';

  interface ImageItem {
  id: string;
  image: string;
  title?: string;
  description?: { __html: string };
  shape?: 'circle' | 'square' | 'rectangle';
  backgroundColor?: string;
  cardModeEnable?: boolean;
  maxWidth?: string;
  margin?: string;
  padding?: string;
  buttonProps?: {
    iconLeft: string;
    iconRight: string;
    style?: React.CSSProperties;
  };
}
  const buttonProps = {
    iconLeft: '<',
    iconRight: '>',
    style: {
      backgroundColor: 'brown',
      color: 'white',
      width: '40px',
      height: '40px',
    },
  };

  const sampleImages: ImageItem[] = [
    {
      image: 'https://picsum.photos/id/328/3264/2448',
      title: 'Understanding and Managing Self',
      description:{ __html: '<p>This is a description for Image 2.</p>' },
      shape: 'circle' as const,
      backgroundColor: '#0047AB',
      margin: '10px',
      padding: '10px',
    },
    {
      image: 'https://picsum.photos/id/431/5000/3334',
      description: { __html: '<p>This is a description for Image 2.</p>' },
      title: 'Image 2',
      shape: 'square' as const,
      backgroundColor: '#0047AB',
      margin: '10px',
      padding: '10px',
    },
    {
      image: 'https://picsum.photos/id/5/5000/3334',
      shape: 'rectangle' as const,
      backgroundColor: '#0047AB',
      maxWidth: '800px',
    },
  ];  `;

  // Note: HTML code for carousel
  const htmlCode = `
       <PtgUiCarousel
                items={imageList}
                backgroundColor="white"
                buttonPosition="middle"
                navigationIconWidth="60px"
                navigationIconHeight="60px"
                navigationOnIcon={true}
                buttonProps = {buttonProps}
              ></PtgUiCarousel>`;

  return (
    <section>
      <div className="mb-3">
        {props?.showCodeWithAllCustomProps && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
        <div className="carousel-component">
          <PtgUiCarousel
            items={imageList}
            backgroundColor="#222"
            buttonPosition="middle"
            navigationIconWidth="60px"
            navigationIconHeight="60px"
            navigationOnIcon={true}
            buttonProps={buttonProps}
          ></PtgUiCarousel>
        </div>
      </div>
    </section>
  );
};
