import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiAccordion } from './Accordion';
import { IPtgUiAccordionProps } from '../interfaces';

export default {
  title: 'Components/Accordion',
  component: PtgUiAccordion,
  parameters: {
    docs: {
      description: {
        component: 'A customizable accordion component for collapsible sections.',
      },
    },
  },
  argTypes: {
    accordionItems: { control: 'object', description: 'Array of accordion items with title and content.' },
    handleToggle: { action: 'toggle', description: 'Callback triggered when an accordion item is clicked.' },
    activeIndex: { control: 'number', description: 'Index of the currently active accordion item.' },
  },
} satisfies Meta<IPtgUiAccordionProps>;

const Template: StoryFn<IPtgUiAccordionProps> = (args) => {
  const [activeIndex, setActiveIndex] = useState<number>(args.activeIndex || 0);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return <PtgUiAccordion {...args} activeIndex={activeIndex} handleToggle={handleToggle} />;
};

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {
  accordionItems: [
    { title: 'Section 1', content: 'This is the content of section 1.' },
    { title: 'Section 2', content: 'This is the content of section 2.' },
    { title: 'Section 3', content: 'This is the content of section 3.' },
  ],
  activeIndex: 0,
};

export const MultipleSectionsAccordion = Template.bind({});
MultipleSectionsAccordion.args = {
  accordionItems: [
    { title: 'HTML', content: 'HTML stands for HyperText Markup Language. It defines the structure of web pages.' },
    { title: 'CSS', content: 'CSS stands for Cascading Style Sheets. It helps style HTML elements.' },
    { title: 'JavaScript', content: 'JavaScript is a programming language that adds interactivity to web pages.' },
    { title: 'React', content: 'React is a JavaScript library for building user interfaces.' },
  ],
  activeIndex: 1,
};

export const SingleSectionAccordion = Template.bind({});
SingleSectionAccordion.args = {
  accordionItems: [
    { title: 'About Us', content: 'We are a team dedicated to building scalable software solutions.' },
  ],
  activeIndex: 0,
};
