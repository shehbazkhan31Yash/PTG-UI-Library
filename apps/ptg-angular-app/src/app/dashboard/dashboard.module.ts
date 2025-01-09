/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module DashboardModule;
 * @description This module for Dashboard
 **/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommonModule } from '../common/common.module';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { ButtonModule } from '@ptg-ui/angular/button';
import { InputModule } from '@ptg-ui/angular/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Calendarexample1Component } from './calendarexample/calendarexample1/calendarexample1.component';
import { Calendarexample2Component } from './calendarexample/calendarexample2/calendarexample2.component';
import { Calendarexample3Component } from './calendarexample/calendarexample3/calendarexample3.component';
import { Calendarexample4Component } from './calendarexample/calendarexample4/calendarexample4.component';
import { SelectexampleComponent } from './selectexample/selectexample.component';
import { CalendarexampleComponent } from './calendarexample/calendarexample.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { Dragexample1Component } from './draganddrop/dragexample1/dragexample1.component';
import { Dragexample2Component } from './draganddrop/dragexample2/dragexample2.component';
import { Dragexample3Component } from './draganddrop/dragexample3/dragexample3.component';
import { Dragexample4Component } from './draganddrop/dragexample4/dragexample4.component';
import { Dragexample5Component } from './draganddrop/dragexample5/dragexample5.component';
import { ChartComponent } from './charts/chart-layout/chart.component';
import { D3ChartsComponent } from './charts/d3-charts/d3-charts.component';
import { HighChartsComponent } from './charts/high-charts/high-charts.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RoleBasedDirectiveComponent } from './role-based-directive/role-based-directive.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WebaccessibilityComponent } from './webaccessibility/webaccessibility.component';
import { AgGridComponent } from './datatables/ag-grid/ag-grid.component';
import { DatatableComponent } from './datatables/datatable-layout/datatable.component';
import { NgxDatatableComponent } from './datatables/ngx-datatable/ngx-datatable.component';
import { MaterialDatatableComponent } from './datatables/material-datatable/material-datatable.component';
import { PipeexamplesComponent } from './pipeexamples/pipeexamples.component';
import { Pipeexamples1Component } from './pipeexamples/pipeexamples1/pipeexamples1.component';
import { Pipeexamples2Component } from './pipeexamples/pipeexamples2/pipeexamples2.component';
import { Pipeexamples3Component } from './pipeexamples/pipeexamples3/pipeexamples3.component';
import { CheckboxExamplesComponent } from './checkbox-examples/checkbox-examples.component';
import { DownloadExampleComponent } from './download-example/download-example.component';
import { GridlayoutexampleComponent } from './gridlayoutexample/gridlayoutexample.component';
import { ActionButtonComponent } from './datatables/action-button/action-button.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';
import { MultistepFormLayoutComponent } from './multistep-form/multistep-form-layout/multistep-form-layout.component';
import { DialogExampleComponent } from './dialog-component/dialog-example.component';
import { CardExampleComponent } from './card-component/card-example.component';
import { BreadcrumbsExampleComponent } from './breadcrumbs-component/breadcrumbs-example.component';

import { CarouselExampleComponent } from './carousel-component/carousel-example.component';

import { ToggleCodeComponent } from './toggle-code/toggle-code.component';
// Material Module
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DemoPtgUiNgModule } from '@ptg-angular-app/common/demo-ptg-ui-ng/demo-ptg-ui-ng.module';

import { WebComponentsAngularModule } from '@ptg-ui/ptg-ui-web-components-angular';
import { defineCustomElements } from '@ptg-ui/ptg-ui-web-components/loader';
defineCustomElements();

@NgModule({
  declarations: [
    HomeComponent,
    Calendarexample1Component,
    Calendarexample2Component,
    Calendarexample3Component,
    Calendarexample4Component,
    SelectexampleComponent,
    CalendarexampleComponent,
    DraganddropComponent,
    ChartComponent,
    D3ChartsComponent,
    HighChartsComponent,
    RoleBasedDirectiveComponent,
    Dragexample1Component,
    Dragexample2Component,
    Dragexample3Component,
    Dragexample4Component,
    Dragexample5Component,
    WebaccessibilityComponent,
    AgGridComponent,
    DatatableComponent,
    NgxDatatableComponent,
    MaterialDatatableComponent,
    PipeexamplesComponent,
    Pipeexamples1Component,
    Pipeexamples2Component,
    Pipeexamples3Component,
    CheckboxExamplesComponent,
    DownloadExampleComponent,
    GridlayoutexampleComponent,
    ActionButtonComponent,
    AccordionExampleComponent,
    MultistepFormLayoutComponent,
    ToggleCodeComponent,
    DialogExampleComponent,
    CardExampleComponent,
    BreadcrumbsExampleComponent,
    CarouselExampleComponent
  ],

  bootstrap: [MultistepFormLayoutComponent],
  imports: [
    CommonModule,
    AllCommonModule,
    dashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
    DragDropModule,
    MatCheckboxModule,
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    MatTableModule,
    NgxDatatableModule,
    TranslateModule,
    MatStepperModule,
    MatIconModule,
    CdkStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    DemoPtgUiNgModule,
    MatSnackBarModule,
    WebComponentsAngularModule,
  ],
})
export class DashboardModule {}
