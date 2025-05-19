import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CarouselComponent } from './carousel.component';

const meta: Meta<CarouselComponent> = {
  title: 'Component/CarouselComponent',
  component: CarouselComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<CarouselComponent>;

export const Primary: Story = {
  args: {
    carouselItems: [
      { image: 'https://picsum.photos/id/328/3264/2448', alt: 'image1' },
      { image: 'https://picsum.photos/id/431/5000/3334', alt: 'image2' },
      { image: 'https://picsum.photos/id/5/5000/3334', alt: 'image3' },
    ],
    showControls: false,
    showIndicators: false,
    carouselId: 'carouselSlide',
  },
};

export const ShowControls: Story = {
  args: {
    carouselItems: [
      { image: 'https://picsum.photos/id/328/3264/2448', alt: 'image1' },
      { image: 'https://picsum.photos/id/431/5000/3334', alt: 'image2' },
      { image: 'https://picsum.photos/id/5/5000/3334', alt: 'image3' },
    ],
    showControls: true,
    showIndicators: false,
    carouselId: 'carouselControls',
  },
};

export const ShowIndicators: Story = {
  args: {
    carouselItems: [
      { image: 'https://picsum.photos/id/328/3264/2448', alt: 'image1' },
      { image: 'https://picsum.photos/id/431/5000/3334', alt: 'image2' },
      { image: 'https://picsum.photos/id/5/5000/3334', alt: 'image3' },
    ],
    showControls: true,
    showIndicators: true,
    carouselId: 'carouselIndicator',
  },
};

export const ShowContent: Story = {
  args: {
    carouselItems: [
      {
        image: 'https://picsum.photos/id/5/5000/3334',
        alt: 'image1',
        captionLabel: 'First slide label',
        captionContent: 'Some representative placeholder content for the first slide.',
      },
      {
        image: 'https://picsum.photos/id/431/5000/3334',
        alt: 'image2',
        captionLabel: 'Second slide label',
        captionContent: 'Some representative placeholder content for the second slide.',
      },
      {
        image: 'https://picsum.photos/id/328/3264/2448',
        alt: 'image3',
        captionLabel: 'Third slide label',
        captionContent: 'Some representative placeholder content for the third slide.',
      },
    ],
    showControls: true,
    showIndicators: true,
    carouselId: 'carouselContent',
  },
};