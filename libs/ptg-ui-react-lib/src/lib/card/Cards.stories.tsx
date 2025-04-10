import { PtgUiCard } from './Cards';
import { Meta, StoryFn } from '@storybook/react';
import { ICardUiProps } from '../interfaces';

export default {
    title: 'Components/Cards',
    component: PtgUiCard,
    argTypes: {
        onClick: { action: 'clicked' },
        backgroundColor: { control: 'color' },
        buttonColor: { control: 'color' },
        buttonTextColor: { control: 'color' },
    },
} as Meta;

const Template: StoryFn<ICardUiProps> = (args) => <PtgUiCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: 'https://picsum.photos/id/1/200/300',
    title: 'Default Card Title',
    description: 'This is a description for the default card.',
    buttonText: 'Click Me',
    buttonColor: '#007bff',
    buttonTextColor: '#ffffff',
    imageWidth: '100%',
    imageHeight: '150px',
    backgroundColor: '#f8f9fa',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
    title: 'Card Without Image',
    description: 'This card does not have an image.',
    buttonText: 'Learn More',
    onClick: () => alert('Button clicked!'),
    backgroundColor: '#e9ecef',
};

export const CustomButtonColors = Template.bind({});
CustomButtonColors.args = {
    image: 'https://picsum.photos/id/1/200/300',
    title: 'Custom Button Colors',
    description: 'This card has custom button colors.',
    buttonText: 'Custom Button',
    buttonColor: '#28a745',
    buttonTextColor: '#ffffff',
    imageWidth: '100%',
    imageHeight: '150px',
    backgroundColor: '#ffffff',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    image: 'https://picsum.photos/id/1/200/300',
    title: 'Card with Children',
    description: 'This card has additional content.',
    buttonText: 'See More',
    children: <p>This is some additional content inside the card.</p>,
    imageWidth: '100%',
    imageHeight: '150px',
    backgroundColor: '#f0f0f0',
};

export const CustomDimensions = Template.bind({});
CustomDimensions.args = {
    image: 'https://picsum.photos/id/1/200/300',
    title: 'Custom Dimensions',
    description: 'This card has custom image dimensions.',
    buttonText: 'Click Here',
    imageWidth: '80%',
    imageHeight: '100px',
    backgroundColor: '#ffffff',
};