import { PtgUiLoading } from './loading';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiLoadingProps } from '../interfaces';

export default {
    title: 'Components/Loading',
    component: PtgUiLoading,
} as Meta;

const Template: StoryFn<PtgUiLoadingProps> = (args) => <PtgUiLoading {...args} />;

export const DotLoader = Template.bind({});
DotLoader.args = {
    type: 'dot',
    color: '#3498db',
};

export const LinearLoader = Template.bind({});
LinearLoader.args = {
    type: 'linear',
    color: '#e74c3c',
};

export const CircularLoader = Template.bind({});
CircularLoader.args = {
    type: 'circular',
    color: '#2ecc71',
};