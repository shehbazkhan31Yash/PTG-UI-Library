import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiCarousel } from './carousel';

export default {
  title: 'Components/Carousel',
  component: PtgUiCarousel,
  argTypes: {
    items: { control: 'object' },
    backgroundColor: { control: 'color' },
    buttonPosition: { control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] } },
    buttonProps: { control: 'object' },
    navigationOnIcon: { control: 'boolean' },
    navigationIconWidth: { control: 'text' },
    navigationIconHeight: { control: 'text' },
  },
} as Meta<typeof PtgUiCarousel>;

const Template: StoryFn<typeof PtgUiCarousel> = (args) => <PtgUiCarousel {...args} />;

// Default Carousel Story
export const DefaultCarousel = Template.bind({});
DefaultCarousel.args = {
  items: [
    {
      id: '1',
      image: 'https://picsum.photos/id/328/3264/2448',
      backgroundColor: '#f5f5f5',
    },
    {
      id: '2',
      image: 'https://picsum.photos/id/431/5000/3334',
      backgroundColor: '#e5e5e5',
    },
    {
      id: '3',
      image: 'https://picsum.photos/id/5/5000/3334',
      backgroundColor: '#d5d5d5',
    },
  ],
  backgroundColor: '#fff',
  buttonPosition: 'bottom',
  buttonProps: {
    iconLeft: '<',
    iconRight: '>',
    style: { backgroundColor: '#007bff', color: '#fff', width: '40px', height: '40px' },
  },
  navigationOnIcon: false,
  navigationIconWidth: '40px',
  navigationIconHeight: '40px',
};

// Carousel with Icon Navigation
export const CarouselWithIconNavigation = Template.bind({});
CarouselWithIconNavigation.args = {
  items: [
    {
        id: '1',
        image: 'https://picsum.photos/id/328/3264/2448',
        backgroundColor: '#f5f5f5',
      },
      {
        id: '2',
        image: 'https://picsum.photos/id/431/5000/3334',
        backgroundColor: '#e5e5e5',
      },
      {
        id: '3',
        image: 'https://picsum.photos/id/5/5000/3334',
        backgroundColor: '#d5d5d5',
      },
  ],
  navigationOnIcon: true,
  navigationIconWidth: '50px',
  navigationIconHeight: '50px',
  backgroundColor: '#fafafa',
};

// Carousel with Top Controls
export const CarouselWithTopControls = Template.bind({});
CarouselWithTopControls.args = {
  items: [
    {
        id: '1',
        image: 'https://picsum.photos/id/328/3264/2448',
        title: 'Slide 1',
        description: { __html: 'Description for Slide 1'},
        backgroundColor: '#f5f5f5',
      },
      {
        id: '2',
        image: 'https://picsum.photos/id/431/5000/3334',
        title: 'Slide 2',
        description: { __html: 'Description for Slide 2'},
        backgroundColor: '#e5e5e5',
      },
      {
        id: '3',
        image: 'https://picsum.photos/id/5/5000/3334',
        title: 'Slide 3',
        description: { __html: 'Description for Slide 3'},
        backgroundColor: '#d5d5d5',
      },
  ],
  buttonPosition: 'top',
  buttonProps: {
    iconLeft: '«',
    iconRight: '»',
    style: { backgroundColor: '#28a745', color: '#fff', width: '30px', height: '30px' },
  },
  backgroundColor: '#f0f0f0',
};

// Carousel with Middle Controls
export const CarouselWithMiddleControls = Template.bind({});
CarouselWithMiddleControls.args = {
  items: [
    {
        id: '1',
        image: 'https://picsum.photos/id/328/3264/2448',
        title: 'Slide 1',
        description: { __html: 'Description for Slide 1'},
        backgroundColor: '#f5f5f5',
      },
      {
        id: '2',
        image: 'https://picsum.photos/id/431/5000/3334',
        title: 'Slide 2',
        description: { __html: 'Description for Slide 2'},
        backgroundColor: '#e5e5e5',
      },
      {
        id: '3',
        image: 'https://picsum.photos/id/5/5000/3334',
        title: 'Slide 3',
        description: { __html: 'Description for Slide 3'},
        backgroundColor: '#d5d5d5',
      },
  ],
  buttonPosition: 'middle',
  buttonProps: {
    iconLeft: '«',
    iconRight: '»',
    style: { backgroundColor: '#28a745', color: '#fff', width: '30px', height: '30px' },
  },
  backgroundColor: '#f0f0f0',
};

// Carousel with circle image
export const CarouselWithImageInCircle = Template.bind({});
CarouselWithImageInCircle.args = {
  items: [
    {
        id: '1',
        image: 'https://picsum.photos/id/328/3264/2448',
        shape: 'circle',
      },
      {
        id: '2',
        image: 'https://picsum.photos/id/431/5000/3334',
        shape: 'circle',
      },
      {
        id: '3',
        image: 'https://picsum.photos/id/5/5000/3334',
        shape: 'circle',
      },
  ],
  backgroundColor: '#e0f7fa',
  buttonPosition: 'bottom',
  buttonProps: {
    iconLeft: '←',
    iconRight: '→',
    style: { backgroundColor: '#ff4081', color: '#fff', width: '50px', height: '50px' },
  },
  navigationOnIcon: true,
  navigationIconWidth: '70px',
  navigationIconHeight: '70px',
};

// Carousel with Customize Width
export const CarouselWithCustomizeWidth = Template.bind({});
CarouselWithCustomizeWidth.args = {
  items: [
    {
        id: '1',
        image: 'https://picsum.photos/id/328/3264/2448',
        maxWidth: '800px',
      },
      {
        id: '2',
        image: 'https://picsum.photos/id/431/5000/3334',
        maxWidth: '800px',
      },
      {
        id: '3',
        image: 'https://picsum.photos/id/5/5000/3334',
        maxWidth: '800px',
      },
  ],
  navigationOnIcon: false,
  navigationIconWidth: '50px',
  navigationIconHeight: '50px',
  backgroundColor: '#fafafa',
};

export const CarouselOfCards = Template.bind({});
CarouselOfCards.args = {
  items: [
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
  ],
  backgroundColor: 'rgb(0, 48, 143)',
  buttonPosition: 'bottom',
  buttonProps: {
    iconLeft: '←',
    iconRight: '→',
    style: { backgroundColor: 'brown', color: '#fff', width: '40px', height: '40px' },
  },
  navigationOnIcon: false,
  navigationIconWidth: '70px',
  navigationIconHeight: '70px',
};
