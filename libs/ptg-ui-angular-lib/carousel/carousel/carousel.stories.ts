import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CarouselComponent } from './carousel.component';


export default {
  title: 'Component/CarouselComponent',
  component: CarouselComponent,


  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CarouselComponent>;

const Template: Story<CarouselComponent> = (args: CarouselComponent) => ({
  props: args
});


export const Primary = Template.bind({});
Primary.args = {
  carouselItems: [{ image: 'https://picsum.photos/id/328/3264/2448', alt: "image1" },
  { image: 'https://picsum.photos/id/431/5000/3334', alt: "image2" },
  { image: 'https://picsum.photos/id/5/5000/3334', alt: "image3" }],
  showControls: false,
  showIndicators: false,
  carouselId: 'carouselSlide'
};

export const ShowControls = Template.bind({});
ShowControls.args = {
  carouselItems: [{ image: 'https://picsum.photos/id/328/3264/2448', alt: "image1" },
  { image: 'https://picsum.photos/id/431/5000/3334', alt: "image2" },
  { image: 'https://picsum.photos/id/5/5000/3334', alt: "image3" }],
  showControls: true,
  showIndicators: false,
  carouselId: 'carouselControls'
};

export const ShowIndicators = Template.bind({});
ShowIndicators.args = {
  carouselItems: [{ image: 'https://picsum.photos/id/328/3264/2448', alt: "image1" },
  { image: 'https://picsum.photos/id/431/5000/3334', alt: "image2" },
  { image: 'https://picsum.photos/id/5/5000/3334', alt: "image3" }],
  showControls: true,
  showIndicators: true,
  carouselId: 'carouselIndicator'
};

export const ShowContent = Template.bind({});
ShowContent.args = {
  carouselItems: [
    { image: 'https://picsum.photos/id/5/5000/3334', alt: "image1", captionLabel: 'First slide label', captionContent: 'Some representative placeholder content for the first slide.' },
    { image: 'https://picsum.photos/id/431/5000/3334', alt: "image2", captionLabel: 'Second slide label', captionContent: 'Some representative placeholder content for the second slide.' },
    { image: 'https://picsum.photos/id/328/3264/2448', alt: "image3", captionLabel: 'Third slide label', captionContent: 'Some representative placeholder content for the third slide.' }
  ],
  showControls: true,
  showIndicators: true,
  carouselId: 'carouselContent'
};
