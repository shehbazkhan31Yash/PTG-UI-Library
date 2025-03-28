import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { PtgNgxDatatableComponent } from './ptg-ngx-datatable.component';
import { PtgNgxDatatableModule } from '../ptg-ngx-datatable.module';
import { GRID_DATA } from './ptg-ngx-datatable';

const meta: Meta<PtgNgxDatatableComponent> = {
  title: 'Component/PtgNgxDatatableComponent',
  component: PtgNgxDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [PtgNgxDatatableModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<PtgNgxDatatableComponent>;

export const Primary: Story = {
  args: {
    columns: [
      { name: 'Athlete', field: 'athlete', frozenLeft: true },
      { name: 'Age', field: 'age', filtering: true },
      { name: 'Country', field: 'country', filtering: false },
      { name: 'Year', field: 'year', filtering: false },
      { name: 'Date', field: 'date', filtering: false },
      { name: 'Sport', field: 'sport', filtering: false },
      { name: 'Gold', field: 'gold', filtering: false },
      { name: 'Silver', field: 'silver', filtering: false },
      { name: 'Total', field: 'total', filtering: false },
    ],
    rows: GRID_DATA,
    scrollbarV: false,
    scrollbarH: true,
    headerHeight: 50,
    footerHeight: 100,
    rowHeight: 'auto',
    loaderShowWhen: false,
    limit: 2,
    externalSorting: false,
    rowClass: '',
    showFiter: true,
    selected: [],
    // selectionType: this.SelectionType.checkbox,
    showActionButton: false,
    actionButtonLabel: 'Click Here',
    actionButtonHeaderLabel: 'Action',
  },
};


export const scrollbarV : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};



export const scrollbarH : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};



export const HeaderHeight: Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};



export const FooterHeight : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};



export const RowHeight : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};


export const LoaderShowWhen : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};


export const Limit : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};


export const ExternalSorting : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};


export const RowClass : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action',
}
};


export const ShowFiter : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};


export const ShowActionButton : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};

export const ActionButtonLabel : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};


export const ActionButtonHeaderLabel : Story = {
  args: {
  columns :[
    { name: "Athlete", field: "athlete", frozenLeft: true},
    { name: "Age",field: "age",filtering: true },
    { name: "Country" ,field: "country",filtering: false},
    { name: "Year",field: "year",filtering: false },
    { name: "Date",field: "date" ,filtering: false},
    { name: "Sport",field: "sport" ,filtering: false},
    { name: "Gold",field: "gold" ,filtering: false},
    { name: "Silver",field: "silver" ,filtering: false},
    { name: "Total",field: "total" ,filtering: false},
  ],
  rows:GRID_DATA,
  scrollbarV: false,
  scrollbarH: true,
  headerHeight: 50,
  footerHeight: 100,
  rowHeight: 'auto',
  loaderShowWhen: false,
  limit: 2,
  externalSorting: false,
  rowClass: '',
  showFiter: true,
  selected: [],
  // selectionType: this.SelectionType.checkbox,
  showActionButton: false,
  actionButtonLabel: 'Click Here',
  actionButtonHeaderLabel: 'Action'
}
};