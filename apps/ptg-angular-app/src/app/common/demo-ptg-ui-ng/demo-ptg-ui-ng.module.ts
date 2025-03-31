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
import { DialogModule } from '@ptg-ui/angular/dialog';
import { BreadcrumbsModule } from '@ptg-ui/angular/breadcrumbs';
import { CardModule } from '@ptg-ui/angular/card';
import { CarouselModule } from '@ptg-ui/angular/carousel';
import { GridModule } from '@ptg-ui/angular/grid';
import { StepperModule } from '@ptg-ui/angular/stepper';
import { ThemeGeneratorModule } from '@ptg-ui/angular/theme-generator';
import { MatThemeGeneratorModule } from '@ptg-ui/angular/mat-theme-generator';

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
  BreadcrumbsModule,
  CardModule,
  CarouselModule,
  GridModule,
  StepperModule,
  DialogModule,
  ThemeGeneratorModule,
  MatThemeGeneratorModule
];
@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class DemoPtgUiNgModule {}
