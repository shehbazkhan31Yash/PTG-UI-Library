import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Component/CardComponent',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: {
    cardObj: {
      title: 'card title',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
    },
  },
};

export const Image: Story = {
  args: {
    cardObj: {
      title: 'card title',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      src: 'https://img.freepik.com/free-photo/high-angle-spring-gerbera-flowers_23-2148894171.jpg?w=900&t=st=1728473029~exp=1728473629~hmac=29ea62b6f59d41d8bcec424bd447ec38d6a17b8d94235bd040b9dd424ff34a1f',
    },
  },
};

export const Subtitle: Story = {
  args: {
    cardObj: {
      title: 'card title',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      subtitle: 'card subtitle',
    },
  },
};

export const Footer: Story = {
  args: {
    cardObj: {
      title: 'card title',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      footer: 'card footer',
    },
  },
};

export const Classes: Story = {
  args: {
    cardObj: {
      title: 'card title',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora velit, nihil expedita sapiente ducimus, vitae qui possimus vero officiis totam itaque maiores perferendis, repellendus amet repellat hic nisi? Blanditiis!',
      cardClass: 'text-center',
      cardHeaderClass: 'border-success',
      cardBodyClass: 'text-success',
      cardFooterClass: 'bg-transparent border-success',
    },
  },
};