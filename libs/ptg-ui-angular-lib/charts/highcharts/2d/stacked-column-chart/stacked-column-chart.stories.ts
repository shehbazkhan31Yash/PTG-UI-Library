import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { StackedColumnChartComponent } from './stacked-column-chart.component';
import { STACKED_COLUMN_DATA } from './stacked-column-chart';
import { ChartModule } from '../../../chart.module';

const meta: Meta<StackedColumnChartComponent> = {
  title: 'Component/StackedColumnChartComponent',
  component: StackedColumnChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<StackedColumnChartComponent>;

export const Primary: Story = {
  args: {
    remainingOptions: STACKED_COLUMN_DATA.remainingOptions,
    title: STACKED_COLUMN_DATA.title,
    categories: STACKED_COLUMN_DATA.categories,
    yTitle: 'Values',
  },
};

export const Title: Story = {
  args: {
    remainingOptions: STACKED_COLUMN_DATA.remainingOptions,
    title: STACKED_COLUMN_DATA.title,
    categories: STACKED_COLUMN_DATA.categories,
    yTitle: 'Values',
  },
};

export const Subtitle: Story = {
  args: {
    title: STACKED_COLUMN_DATA.title,
    subtitle: STACKED_COLUMN_DATA.subtitle,
    remainingOptions: STACKED_COLUMN_DATA.remainingOptions,
    categories: STACKED_COLUMN_DATA.categories,
  },
};

export const RemainingOptions: Story = {
  args: {
    title: STACKED_COLUMN_DATA.title,
    subtitle: STACKED_COLUMN_DATA.subtitle,
    remainingOptions: STACKED_COLUMN_DATA.remainingOptions,
    categories: STACKED_COLUMN_DATA.categories,
  },
};

export const Yaxistitle: Story = {
  args: {
    remainingOptions: STACKED_COLUMN_DATA.remainingOptions,
    title: STACKED_COLUMN_DATA.title,
    categories: STACKED_COLUMN_DATA.categories,
    yTitle: 'Values',
  },
};
