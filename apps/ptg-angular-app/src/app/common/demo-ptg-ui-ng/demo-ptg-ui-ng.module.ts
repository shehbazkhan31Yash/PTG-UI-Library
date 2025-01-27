import { NgModule } from '@angular/core';
import { SelectModule } from '@ptg-ui/angular/select';
import { LoadingModule } from '@ptg-ui/angular/loading';
import { ChecksModule } from '@ptg-ui/angular/checks';
import { ChartModule } from '@ptg-ui/angular/charts';
import { RadioModule } from '@ptg-ui/angular/radio';
import { PtgAgGridDatatableModule } from '@ptg-ui/angular/datatables/ag-grid-datatable';
import { MatDatatableModule } from '@ptg-ui/angular/datatables/mat-datatable';
import { PtgNgxDatatableModule } from '@ptg-ui/angular/datatables/ngx-datatable';
import { TextareaModule } from '@ptg-ui/angular/textarea';
import { FileDownloadsModule } from '@ptg-ui/angular/file-downloads';
import { IndeterminateCheckboxesModule } from '@ptg-ui/angular/indeterminate-checkboxes';
import { SidenavModule } from '@ptg-ui/angular/sidenav';
import { AccordianModule } from '@ptg-ui/angular/accordion';
import { AlertModule } from '@ptg-ui/angular/alert';
import { ButtonModule } from '@ptg-ui/angular/button';
import { InputModule } from '@ptg-ui/angular/input';
import { CalendarModule } from '@ptg-ui/angular/calendar';
import { BreadcrumbsModule } from '@ptg-ui/angular/breadcrumbs';

const modules = [
  SidenavModule,
  ButtonModule,
  InputModule,
  SelectModule,
  LoadingModule,
  ChecksModule,
  ChartModule,
  RadioModule,
  AccordianModule,
  TextareaModule,
  AlertModule,
  PtgAgGridDatatableModule,
  MatDatatableModule,
  PtgNgxDatatableModule,
  FileDownloadsModule,
  IndeterminateCheckboxesModule,
  CalendarModule,
  BreadcrumbsModule
];
@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class DemoPtgUiNgModule {}
