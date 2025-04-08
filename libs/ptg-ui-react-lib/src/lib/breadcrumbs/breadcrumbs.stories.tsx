import { Meta, StoryFn } from '@storybook/react';
import { PtgUiBreadcrumbs } from './Breadcrumbs';
import { IPtgUiBreadcrumbsProps } from '@ptg-react-libs/interfaces';
import { BrowserRouter as Router } from 'react-router-dom';


export default {
    title: 'Components/Breadcrumbs',
    component: PtgUiBreadcrumbs,
} as Meta;

const Template: StoryFn<IPtgUiBreadcrumbsProps> = (args) => <Router><PtgUiBreadcrumbs {...args} /></Router>;

export const Default = Template.bind({});
Default.args = {
    datalist: [
        { title: 'Home', link: '/' },
        { title: 'Library', link: '/library' },
        { title: 'Data', link: '/data' },
    ],
    handleClick: () => alert('Breadcrumb clicked!'),
};

export const WithoutLinks = Template.bind({});
WithoutLinks.args = {
    datalist: [
        { title: 'Home' },
        { title: 'Library' },
        { title: 'Data' },
    ],
    handleClick: () => alert('Breadcrumb clicked!'),
};
