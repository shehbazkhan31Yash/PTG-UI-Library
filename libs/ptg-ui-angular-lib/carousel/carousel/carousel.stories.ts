import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CarouselComponent } from './carousel.component';


export default {
  title: 'Component/CardComponent',
  component: CarouselComponent,


  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CarouselComponent>;

const Template: Story<CarouselComponent> = (args: CarouselComponent) => ({
  props: args,
  component: CarouselComponent,
});


export const Primary = Template.bind({});
Primary.args = {
    carouselItems: {
    title: 'card title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!'
  }
};

export const Image = Template.bind({});
Image.args = {
    carouselItems: {
    title: 'card title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
    src: 'https://img.freepik.com/free-photo/high-angle-spring-gerbera-flowers_23-2148894171.jpg?w=900&t=st=1728473029~exp=1728473629~hmac=29ea62b6f59d41d8bcec424bd447ec38d6a17b8d94235bd040b9dd424ff34a1f'
  }
};

export const Subtitle = Template.bind({});
Subtitle.args = {
    carouselItems: {
    title: 'card title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
    subtitle: 'card subtitle'
  }
};

export const Footer = Template.bind({});
Footer.args = {
  cardObj: {
    title: 'card title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
    footer: 'card footer'
  }
};


export const Classes = Template.bind({});
Classes.args = {
  cardObj: {
    title: 'card title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
    cardClass: 'text-center',
    cardHeaderClass: 'border-success',
    cardBodyClass: 'text-success',
    cardFooterClass: 'bg-transparent border-success'
  }
};
