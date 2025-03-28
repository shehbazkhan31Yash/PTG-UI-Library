
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { PtgAgGridDatatableComponent } from './ptg-ag-grid-datatable.component';
import { GRID_DATA } from './ptg-ag-grid-datatable';
import { PtgAgGridDatatableModule } from '../ptg-ag-grid-datatable.module';

const meta: Meta<PtgAgGridDatatableComponent> = {
  title: 'Component/PtgAgGridDatatableComponent',
  component: PtgAgGridDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [PtgAgGridDatatableModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<PtgAgGridDatatableComponent>;

export const Primary: Story = {
  args: {
    rowData: GRID_DATA,
    columnData: [
      { headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter: 'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },

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
    enableCustomFilter: true
  }
};



export const ThemeClassName: Story = {
  args: {
    rowData: GRID_DATA,
    columnData: [
      { headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter: 'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },

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
    enableCustomFilter: true
  }
};


export const Sortable: Story = {
  args: {
    rowData: GRID_DATA,
    columnData: [
      { headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter: 'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },

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
    enableCustomFilter: true
  }
};



export const Editable: Story = {
  args: {
    rowData: GRID_DATA,
    columnData: [
      { headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter: 'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },

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
    enableCustomFilter: true
  }
};


export const RowHeight: Story = {
  args: {
    rowData: GRID_DATA,
    columnData: [
      { headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter: 'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },

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
    enableCustomFilter: true
  }
};


export const RowClass: Story = {
  args: {
    rowData: GRID_DATA,
    columnData: [
      { headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter: 'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },

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
    enableCustomFilter: true
  }
};


export const Pagination: Story = {
  args: {
    rowData: GRID_DATA,
    columnData: [
      { headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter: 'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },

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
    enableCustomFilter: true
  }
};


export const PaginationLimit: Story = {
  args: {
    rowData: GRID_DATA,
    columnData: [
      { headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter: 'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },

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
    enableCustomFilter: true
  }
};


export const CustomPaginationClass: Story = {
  args: {
    rowData: GRID_DATA,
    columnData: [
      { headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter: 'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },

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
    enableCustomFilter: true

  }
};


export const RowSelection: Story = {
  args: {
    rowData: GRID_DATA,
    columnData: [
      { headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter: 'agTextColumnFilter', checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left' },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },

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
    enableCustomFilter: true
  }
};
