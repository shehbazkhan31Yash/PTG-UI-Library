import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { LinebarChartComponent } from './linebar-chart.component';
import { LINE_BAR_DATA } from './linebar-chart';
import { ChartModule } from '../../../chart.module';

const meta: Meta<LinebarChartComponent> = {
  title: 'Component/LinebarChartComponent',
  component: LinebarChartComponent,
  decorators: [
    moduleMetadata({
      imports: [ChartModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<LinebarChartComponent>;

export const Primary: Story = {
  args: {
    title: LINE_BAR_DATA.title,
    subtitle: LINE_BAR_DATA.subtitle,
    remainingOptions: LINE_BAR_DATA.remainingOptions,
    categories: LINE_BAR_DATA.categories,
  },
};

export const Title: Story = {
  args: {
    title: LINE_BAR_DATA.title,
    subtitle: LINE_BAR_DATA.subtitle,
    remainingOptions: LINE_BAR_DATA.remainingOptions,
    categories: LINE_BAR_DATA.categories,
  },
};

export const Subtitle: Story = {
  args: {
    title: LINE_BAR_DATA.title,
    subtitle: LINE_BAR_DATA.subtitle,
    remainingOptions: LINE_BAR_DATA.remainingOptions,
    categories: LINE_BAR_DATA.categories,
  },
};
