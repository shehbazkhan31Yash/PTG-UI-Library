import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiRating } from './rating';
import { IRatingProps } from '../interfaces';

export default {
  title: 'Components/Rating',
  component: PtgUiRating,
  argTypes: {
    value: { control: 'number' },
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    precision: { control: 'number' },
    icon: { control: 'text' },
    emptyIcon: { control: 'text' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
    size: { control: 'number' },
    hoverSize: { control: 'number' },
    defaultValue: { control: 'number' },
    onChange: { action: 'changed' },
    onHover: { action: 'hovered' },
  },
} as Meta;

const FeedbackTemplate: StoryFn<IRatingProps> = (args) => {
    const [hoverFeedback, setHoverFeedback] = useState('Useless');
  
    const handleHover = (hoverValue: number) => {
      const feedbackMap = {
        1: 'Useless',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent',
      };
      setHoverFeedback(feedbackMap[hoverValue] ?? 'Useless');
    };
  
  
    return (
      <div>
        <PtgUiRating
          {...args}
          onHover={(hoverValue) => {
            handleHover(hoverValue);
          }}
        />
        <div style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
          {hoverFeedback}
        </div>
      </div>
    );
  };
const Template: StoryFn<IRatingProps> = (args) => <PtgUiRating {...args} />;

export const NoRating = Template.bind({});
NoRating.args = {
  value: 0,
  readOnly: false,
  disabled: false,
  precision: 1,
  icon: '★',
  emptyIcon: '☆',
  color: '#FFD700',
  borderColor: '#ccc',
  size: 24,
  hoverSize: 28,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: 4,
  readOnly: true,
  disabled: false,
  precision: 1,
  icon: '★',
  emptyIcon: '☆',
  color: '#FFD700',
  borderColor: '#ccc',
  size: 24,
  hoverSize: 28,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 2,
  readOnly: false,
  disabled: true,
  precision: 1,
  icon: '★',
  emptyIcon: '☆',
  color: '#FFD700',
  borderColor: '#ccc',
  size: 24,
  hoverSize: 28,
};

export const HalfStarPrecision = Template.bind({});
HalfStarPrecision.args = {
  value: 3.5,
  readOnly: false,
  disabled: false,
  precision: 0.5,
  icon: '★',
  emptyIcon: '☆',
  color: '#FFD700',
  borderColor: '#ccc',
  size: 24,
  hoverSize: 28,
};

export const HoverFeedback = FeedbackTemplate.bind({});
HoverFeedback.args = {
  value: 1,
  readOnly: false,
  disabled: false,
  precision: 1,
  icon: '★',
  emptyIcon: '☆',
  color: '#FFD700',
  borderColor: '#ccc',
  size: 24,
  hoverSize: 28,
};

export const VariousSizes = (args: IRatingProps) => (
    <div>
      <h4>Small Size</h4>
      <PtgUiRating {...args} size={16} hoverSize={20} />
      <h4>Medium Size</h4>
      <PtgUiRating {...args} size={24} hoverSize={28} />
      <h4>Large Size</h4>
      <PtgUiRating {...args} size={32} hoverSize={36} />
    </div>
  );
  VariousSizes.args = {
    value: 3,
    readOnly: false,
    disabled: false,
    precision: 1,
    icon: '★',
    emptyIcon: '☆',
    color: '#FFD700',
    borderColor: '#ccc',
  };

  export const VariousIcons = (args: IRatingProps) => (
    <div>
      <h4>Heart Icon</h4>
      <PtgUiRating {...args} icon="❤️" emptyIcon="🤍" color="red" borderColor="lightgray" />
      <h4>Thumbs Up Icon</h4>
      <PtgUiRating {...args} icon="👍" emptyIcon="👎" color="blue" borderColor="gray" />
      <h4>Dollar Icon</h4>
      <PtgUiRating {...args} icon="💵" emptyIcon="💸" color="green" borderColor="lightgreen" />
    </div>
  );
  VariousIcons.args = {
    value: 3,
    readOnly: false,
    disabled: false,
    precision: 1,
    size: 24,
    hoverSize: 28,
  };