// stories.tsx

import { StoryFn, Meta } from '@storybook/react';
import { PtgUiBreadcrumbs } from './Breadcrumbs';
import { IPtgUiBreadcrumbsProps } from '@ptg-react-libs/interfaces';

export default {
    title: 'Components/PtgUiBreadcrumbs',
    component: PtgUiBreadcrumbs,
} as Meta;

const Template: StoryFn<IPtgUiBreadcrumbsProps> = (args) => <PtgUiBreadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
    datalist: [
        { title: 'Home', link: '/' },
        { title: 'Nature', link: '/nature' },
        { title: 'Forests', link: '/nature/forests' },
    ],
    handleClick: () => console.log('Breadcrumb clicked!'),
};

export const ActiveBreadcrumb = Template.bind({});
ActiveBreadcrumb.args = {
    datalist: [
        { title: 'Home', link: '/' },
        { title: 'Nature', link: '/nature' },
        { title: 'Rivers', link: '/nature/rivers' },
        { title: 'Amazon River' }, // No link for the active breadcrumb
    ],
    handleClick: () => console.log('Breadcrumb clicked!'),
};

export const LongBreadcrumbs = Template.bind({});
LongBreadcrumbs.args = {
    datalist: [
        { title: 'Home', link: '/' },
        { title: 'Nature', link: '/nature' },
        { title: 'Forests', link: '/nature/forests' },
        { title: 'Tropical Rainforests', link: '/nature/forests/tropical' },
        { title: 'Amazon Rainforest' }, // No link for the active breadcrumb
    ],
    handleClick: () => console.log('Breadcrumb clicked!'),
};

export const NoLinks = Template.bind({});
NoLinks.args = {
    datalist: [
        { title: 'Home' }, // No link
        { title: 'About Us' }, // No link
        { title: 'Contact' }, // No link
    ],
    handleClick: () => console.log('Breadcrumb clicked!'),
};