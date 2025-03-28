import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatDatatableComponent } from './mat-datatable.component';
import { MatDatatableModule } from '../mat-datatable.module';
import { GRID_DATA } from './mat-datatable';

const meta: Meta<MatDatatableComponent> = {
  title: 'Component/MatDatatableComponent',
  component: MatDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [MatDatatableModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<MatDatatableComponent>;

export const Primary: Story = {
  args: {
    data: GRID_DATA,
    columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver', 'total'],
    emptyStateMessage: 'No data matching the filter',
    limit: 10,
    showFiter: false,
  },
};

export const EmptyStateMessage: Story = {
  args: {
    data: GRID_DATA,
    columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver', 'total'],
    emptyStateMessage: 'No data matching the filter',
    limit: 10,
    showFiter: false,
  },
};

export const Limit: Story = {
  args: {
    data: GRID_DATA,
    columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver', 'total'],
    emptyStateMessage: 'No data matching the filter',
    limit: 10,
    showFiter: false,
  },
};

export const Filter: Story = {
  args: {
    data: GRID_DATA,
    columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver', 'total'],
    emptyStateMessage: 'No data matching the filter',
    limit: 10,
    showFiter: true,
  },
};