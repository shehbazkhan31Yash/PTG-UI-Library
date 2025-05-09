import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiGridColumn } from './GridColumns';
import { PtgUiCard } from '../card/Cards';
import { CARD_BUTTON } from '../constants/Constants';
import { PtgUiRow } from '../gridRow/GridRow';
import { CARD_ITEMS } from '../mock/mock';

const cardItems = CARD_ITEMS;

export default {
  title: 'Components/GridColumn',
  component: PtgUiGridColumn,
  argTypes: {
    xl: { control: 'text', description: 'Columns to span on extra-large screens' },
    lg: { control: 'text', description: 'Columns to span on large screens' },
    md: { control: 'text', description: 'Columns to span on medium screens' },
    sm: { control: 'text', description: 'Columns to span on small screens' },
    xs: { control: 'text', description: 'Columns to span on extra-small screens' },
    offsetLg: { control: 'text', description: 'Offset on large screens' },
    offsetMd: { control: 'text', description: 'Offset on medium screens' },
    offsetSm: { control: 'text', description: 'Offset on small screens' },
    className: { control: 'text', description: 'Additional custom class names' },
    children: { control: 'object', description: 'Content inside the grid column' },
  },
} as Meta<typeof PtgUiGridColumn>;

// Common Card Component
const createCard = (image, title, description, buttonText = 'Learn More') => (
  <PtgUiCard
    image={image}
    title={title}
    description={description}
    buttonText={buttonText}
    buttonColor={CARD_BUTTON.COLOR}
    buttonWidth={CARD_BUTTON.WIDTH}
  />
);

// Template for Grid Layout with Cards
const Template: StoryFn<typeof PtgUiGridColumn> = () => (
  <section className="bg-dark-primary m-4">
    <div className="container">
      <PtgUiRow>
        {cardItems.map((item) => (
          <PtgUiGridColumn
            xl={4}
            lg={4}
            md={4}
            sm={4}
            className="ptg-ui-grid-item ptg-ui-mb-8"
            key={item.id}
          >
            {createCard(item.image, item.title, item.content, item.button)}
          </PtgUiGridColumn>
        ))}
      </PtgUiRow>
    </div>
  </section>
);

// Template for Grid Layout with Offset
const TemplateWithOffset: StoryFn<typeof PtgUiGridColumn> = () => (
  <section className="bg-dark-primary m-4">
    <div className="container">
      <PtgUiRow>
        <PtgUiGridColumn lg={4} md={4} sm={4} xs={4} className="ptg-ui-mb-8 ptg-ui-mb-md-0">
          {createCard(
            'https://picsum.photos/id/5/5000/3334',
            'Card Title',
            "Example text for the card content."
          )}
        </PtgUiGridColumn>
        <PtgUiGridColumn lg={4} md={4} sm={4} xs={4} offsetMd={4} offsetSm={0}>
          {createCard(
            'https://picsum.photos/id/431/5000/3334',
            'Card Title',
            "Example text for the card content."
          )}
        </PtgUiGridColumn>
      </PtgUiRow>
    </div>
  </section>
);

// Stories
export const GridLayout = Template.bind({});
GridLayout.args = {};

export const GridLayoutWithOffset = TemplateWithOffset.bind({});
GridLayoutWithOffset.args = {};
