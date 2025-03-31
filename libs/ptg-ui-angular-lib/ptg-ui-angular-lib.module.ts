/* eslint-disable @nrwl/nx/enforce-module-boundaries */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module PtgUiModule;
 * @description This module for all reusable component 
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InputModule } from './input/input.module';
import { SelectModule } from './select/select.module';
import { ButtonModule } from './button/button.module';
import { RadioModule } from './radio/radio.module';
import { LoadingModule } from './loading/loading.module';
import { AlertModule } from './alert/alert.module';
import { ChecksModule } from './checks/checks.module';
import { CalendarModule } from './calendar/calendar.module';
import { ToastsModule } from './toasts/toasts.module';
import { ChartModule } from './charts/chart.module';
import { PtgAgGridDatatableModule } from './datatables/ag-grid-datatable/ptg-ag-grid-datatable.module';
import { MatDatatableModule } from './datatables/mat-datatable/mat-datatable.module';
import { PtgNgxDatatableModule } from './datatables/ngx-datatable/ptg-ngx-datatable.module';
import { IndeterminateCheckboxesModule } from './indeterminate-checkboxes/indeterminate-checkboxes.module';
import { FileDownloadsModule } from './file-downloads/file-downloads.module';
import { AccordianModule } from './accordion/accordion.module';
import { TextareaModule } from "./textarea/textarea.module";
// import { SidenavModule } from "./sidenav/sidenav.module";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { CardModule } from './card/card.module';
import { CarouselModule } from './carousel/carousel.module';
import { StepperModule } from '@ptg-ui/angular/stepper';
import { DialogModule } from './dialog/dialog.module';
import { ThemeGeneratorModule } from '@ptg-ui/angular/theme-generator';
import { MatThemeGeneratorModule } from '@ptg-ui/angular/mat-theme-generator';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputModule,
    SelectModule,
    RadioModule,
    LoadingModule,
    AlertModule,
    ChecksModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CalendarModule,
    ToastsModule,
    ChartModule,
    PtgAgGridDatatableModule,
    MatDatatableModule,
    PtgNgxDatatableModule,
    IndeterminateCheckboxesModule,
    FileDownloadsModule,
    AccordianModule,
    TextareaModule,
    BreadcrumbsModule,
    CardModule,
    CarouselModule,
    StepperModule,
    // SidenavModule,
    DialogModule,
    ThemeGeneratorModule,
    MatThemeGeneratorModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    InputModule,
    SelectModule,
    RadioModule,
    LoadingModule,
    AlertModule,
    ChecksModule,
    ModalModule,
    CalendarModule,
    ToastsModule,
    ChartModule,
    PtgAgGridDatatableModule,
    MatDatatableModule,
    PtgNgxDatatableModule,
    IndeterminateCheckboxesModule,
    FileDownloadsModule,
    AccordianModule,
    TextareaModule,
    // SidenavModule,
    DialogModule
  ],
})
export class PtgUiAngularLibModule { }
