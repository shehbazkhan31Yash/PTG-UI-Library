import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import {
  ICarouselWithCustomPropsOne,
  ImageItem,
} from '@ptg-react-app/interfaces';
import { PtgUiCarousel } from '@ptg-react-libs/carousel/carousel';

export const CarouselWithCustomPropsOne = (
  props: ICarouselWithCustomPropsOne
) => {
  const buttonProps = {
    iconLeft: '←',
    iconRight: '→',
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
      title: 'Understanding and Managing Yourself',
      description: {
        __html: `
            <ul>
                <li>Discover your personality preferences and strength</li>
                <li>Identify </li>
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
      description: {
        __html: `<ul>
                <li>Discover your personality preferences and strength</li>
                <li>Identify </li>
                <li>Your stressors and triggers</li>
                <li>Your ideal roles</li>
                <li>How to manage yourself to be the best you</li>
                <li>To relate to others, first understand & manage yourself</li>
            </ul>`,
      },
      title: 'Understanding Power of Thinking',
      shape: 'square' as const,
      backgroundColor: '#0047AB',
      margin: '10px',
      padding: '10px',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/5/5000/3334',
      description: {
        __html: `  <ul>
                <li>Discover your personality preferences and strength</li>
                <li>Identify </li>
                <li>Your stressors and triggers</li>
                <li>Your ideal roles</li>
                <li>How to manage yourself to be the best you</li>
                <li>To relate to others, first understand & manage yourself</li>
            </ul>`,
      },
      title: 'Believe in Yourself',
      shape: 'rectangle' as const,
      backgroundColor: '#0047AB',
      margin: '10px',
      padding: '10px',
    },
  ];

  const componentCode = `
  import {PtgUiCarouselWithCard} from '@ptg-ui/react';

  interface ImageItem {
  id: string;
  image: string;
  maxWidth?: string;
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
      id: '0',
      image: 'https://picsum.photos/id/328/3264/2448',
      title: 'Understanding and Managing Yourself',
      description: {
        __html: '
            <ul>
                <li>Discover your personality preferences and strength</li>
                <li>Identify </li>
                <li>Your stressors and triggers</li>
                <li>Your ideal roles</li>
                <li>How to manage yourself to be the best you</li>
                <li>To relate to others, first understand & manage yourself</li>
            </ul>',
      },
      shape: 'circle' as const,
      backgroundColor: '#0047AB',
      margin: '10px',
      padding: '10px',
    },
    {
      id: '1',
      image: 'https://picsum.photos/id/431/5000/3334',
      description: {
        __html: '<ul>
                <li>Discover your personality preferences and strength</li>
                <li>Identify </li>
                <li>Your stressors and triggers</li>
                <li>Your ideal roles</li>
                <li>How to manage yourself to be the best you</li>
                <li>To relate to others, first understand & manage yourself</li>
            </ul>',
      },
      title: 'Understanding Power of Thinking',
      shape: 'square' as const,
      backgroundColor: '#0047AB',
      margin: '10px',
      padding: '10px',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/5/5000/3334',
      description: {
        __html: '  <ul>
                <li>Discover your personality preferences and strength</li>
                <li>Identify </li>
                <li>Your stressors and triggers</li>
                <li>Your ideal roles</li>
                <li>How to manage yourself to be the best you</li>
                <li>To relate to others, first understand & manage yourself</li>
            </ul>',
      },
      title: 'Believe in Yourself',
      shape: 'rectangle' as const,
      backgroundColor: '#0047AB',
        margin: '10px',
      padding: '10px',
    },
  ];  `;

  // Note: HTML code for carousel
  const htmlCode = `<PtgUiCarousel
            items={imageList}
            buttonProps={buttonProps}
            backgroundColor="brown"
          ></PtgUiCarousel>`;

  return (
    <section>
      {props?.showCodeWithCustomPropsOne && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="mb-3">
        <div className="carousel-component">
          <PtgUiCarousel
            items={imageList}
            buttonProps={buttonProps}
            backgroundColor="#00308F"
          ></PtgUiCarousel>
        </div>
      </div>
    </section>
  );
};
