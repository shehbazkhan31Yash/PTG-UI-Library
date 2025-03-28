/* import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PtgAgGridDatatableComponent } from './ptg-ag-grid-datatable.component';
import {GRID_DATA} from './ptg-ag-grid-datatable';
import {PtgAgGridDatatableModule} from '../ptg-ag-grid-datatable.module'

export default {
  title: 'Component/PtgAgGridDatatableComponent',
  component: PtgAgGridDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [PtgAgGridDatatableModule],
    }),
  ],
} as Meta<PtgAgGridDatatableComponent>;


const Template: Story<PtgAgGridDatatableComponent> = (
  args: PtgAgGridDatatableComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowClass: '',
  rowSelection: 'multiple',
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};



export const ThemeClassName = Template.bind({});
ThemeClassName.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowClass: '',
  rowSelection: 'multiple',
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const Sortable = Template.bind({});
Sortable.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowClass: '',
  rowSelection: 'multiple',
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};



export const Editable = Template.bind({});
Editable.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowClass: '',
  rowSelection: 'multiple',
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const RowHeight = Template.bind({});
RowHeight.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowClass: '',
  rowSelection: 'multiple',
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const RowClass = Template.bind({});
RowClass.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowClass: '',
  rowSelection: 'multiple',
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const Pagination = Template.bind({});
Pagination.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowClass: '',
  rowSelection: 'multiple',
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const PaginationLimit = Template.bind({});
PaginationLimit.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowClass: '',
  rowSelection: 'multiple',
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const CustomPaginationClass = Template.bind({});
CustomPaginationClass.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowClass: '',
  rowSelection: 'multiple',
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};


export const RowSelection = Template.bind({});
RowSelection.args = {
  rowData:GRID_DATA,
  columnData : [
    {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
    {headerName: 'Age', field: 'age'},
    {headerName: 'Country', field: 'country'},
    {headerName: 'Year', field: 'year'},
    {headerName: 'Date', field: 'date'},
    {headerName: 'Sport', field: 'sport'},
    {headerName: 'Silver', field: 'silver'},
    {headerName: 'Total', field: 'total'},
    
  ],
  themeClassName: 'ag-theme-alpine',
  sortable: false,
  editable: false,
  rowHeight: 50,
  rowClass: '',
  rowSelection: 'multiple',
  pagination: false,
  paginationLimit: 5,
  customPaginationClass: '',
  enableCustomFilter: true,
};
 */