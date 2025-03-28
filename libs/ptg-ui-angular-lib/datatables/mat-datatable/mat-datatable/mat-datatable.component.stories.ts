/* import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MatDatatableComponent } from './mat-datatable.component';
import {MatDatatableModule} from '../mat-datatable.module'
import {GRID_DATA} from './mat-datatable';

export default {
  title: 'Component/MatDatatableComponent',
  component: MatDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [MatDatatableModule],
    }),
  ],
} as Meta<MatDatatableComponent>;

const Template: Story<MatDatatableComponent> = (
  args: MatDatatableComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  data: GRID_DATA,
  columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'],
  emptyStateMessage: 'No data matching the filter',
  limit: 10,
  showFiter: false,
};

export const EmptyStateMessage = Template.bind({});
EmptyStateMessage.args = {
  data: GRID_DATA,
  columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'],
  emptyStateMessage: 'No data matching the filter',
  limit: 10,
  showFiter: false,
};


export const Limit = Template.bind({});
Limit.args = {
  data: GRID_DATA,
  columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'],
  emptyStateMessage: 'No data matching the filter',
  limit: 10,
  showFiter: false,
  
};

export const Filter = Template.bind({});
Filter.args = {
  data: GRID_DATA,
  columns: ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'],
  emptyStateMessage: 'No data matching the filter',
  limit: 10,
  showFiter: false,
 
}; */