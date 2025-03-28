/* import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PtgNgxDatatableComponent } from './ptg-ngx-datatable.component';
import { PtgNgxDatatableModule } from '../ptg-ngx-datatable.module';
import {GRID_DATA} from './ptg-ngx-datatable';

export default {
  title: 'Component/PtgNgxDatatableComponent',
  component: PtgNgxDatatableComponent,
  decorators: [
    moduleMetadata({
      imports: [PtgNgxDatatableModule],
    }),
  ],
} as Meta<PtgNgxDatatableComponent>;

const Template: Story<PtgNgxDatatableComponent> = (
  args: PtgNgxDatatableComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
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
};


export const scrollbarV = Template.bind({});
scrollbarV.args = {
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
};



export const scrollbarH = Template.bind({});
scrollbarH.args = {
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
};



export const HeaderHeight = Template.bind({});
HeaderHeight.args = {
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
};



export const FooterHeight = Template.bind({});
FooterHeight.args = {
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
};



export const RowHeight = Template.bind({});
RowHeight.args = {
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
};


export const LoaderShowWhen = Template.bind({});
LoaderShowWhen.args = {
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
};


export const Limit = Template.bind({});
Limit.args = {
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
};


export const ExternalSorting = Template.bind({});
ExternalSorting.args = {
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
};


export const RowClass = Template.bind({});
RowClass.args = {
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
};


export const ShowFiter = Template.bind({});
ShowFiter.args = {
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
};


export const ShowActionButton = Template.bind({});
ShowActionButton.args = {
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
};

export const ActionButtonLabel = Template.bind({});
ActionButtonLabel.args = {
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
};


export const ActionButtonHeaderLabel = Template.bind({});
ActionButtonHeaderLabel.args = {
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
}; */