/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module dashboardRoutingModule;
 * @description This module for dashboard routing
**/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarexampleComponent } from './calendarexample/calendarexample.component';
import { ChartComponent } from './charts/chart-layout/chart.component';
import { D3ChartsComponent } from './charts/d3-charts/d3-charts.component';
import { HighChartsComponent } from './charts/high-charts/high-charts.component';
import { AgGridComponent } from './datatables/ag-grid/ag-grid.component';
import { DatatableComponent } from './datatables/datatable-layout/datatable.component';
import { MaterialDatatableComponent } from './datatables/material-datatable/material-datatable.component';
import { NgxDatatableComponent } from './datatables/ngx-datatable/ngx-datatable.component';
import { HomeComponent } from './home/home.component';
import { RoleBasedDirectiveComponent } from './role-based-directive/role-based-directive.component';
import { SelectexampleComponent } from './selectexample/selectexample.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { WebaccessibilityComponent } from './webaccessibility/webaccessibility.component';
import { PipeexamplesComponent } from './pipeexamples/pipeexamples.component';
import { DownloadExampleComponent } from './download-example/download-example.component';
import { CheckboxExamplesComponent } from './checkbox-examples/checkbox-examples.component';
import { GridlayoutexampleComponent } from './gridlayoutexample/gridlayoutexample.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';
import { MultistepFormLayoutComponent } from './multistep-form/multistep-form-layout/multistep-form-layout.component';
import { DialogExampleComponent } from './dialog-component/dialog-example.component';
import { CardExampleComponent } from './card-component/card-example.component';
import { BreadcrumbsExampleComponent } from './breadcrumbs-component/breadcrumbs-example.component';
import { CarouselExampleComponent } from './carousel-component/carousel-example.component';
import { ThemeGeneratorComponent } from './theme-generator-example/theme-generator.component';
import { MatThemeExampleComponent } from './mat-theme-example/mat-theme-example.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'calendar',
    component: CalendarexampleComponent,
  },
  {
    path: 'carousel',
    component: CarouselExampleComponent,
  },
  {
    path: 'select',
    component: SelectexampleComponent,
  },
  {
    path:'charts',
    component:ChartComponent,
    children:[
      {
        path:'',
        redirectTo:'d3-charts',
        pathMatch:'full'
      },
      {
        path:'d3-charts',
        component:D3ChartsComponent
      },
      {
        path:'high-charts',
        component:HighChartsComponent
      }
    ]
  },
  {
    path: 'draganddrop',
    component: DraganddropComponent,
  },
  {
    path: 'role',
    component: RoleBasedDirectiveComponent,
  },
  {
    path: 'accessibility',
    component: WebaccessibilityComponent,
  },
  {
    path: 'pipes',
    component: PipeexamplesComponent,
  },
  {
    path: 'datatable',
    component: DatatableComponent,
    children: [
      {
        path: '',
        redirectTo: 'ag-grid',
        pathMatch: 'full',
      },
      {
        path: 'ag-grid',
        component: AgGridComponent,
      },
      {
        path: 'ngx-datatable',
        component: NgxDatatableComponent,
      },
      {
        path:'material-datatable',
        component: MaterialDatatableComponent
      }
    ]
  },
  {
    path: 'dialog',
    component: DialogExampleComponent
  },
  {
    path:'download',
    component: DownloadExampleComponent
  },
  {
    path:'indeterminate-checkbox',
    component: CheckboxExamplesComponent
  },
  {
    path:'grid-layout',
    component: GridlayoutexampleComponent
  },
  {
    path:'accordian-example',
    component: AccordionExampleComponent
  },
  {
    path:'multistep-form',
    component:MultistepFormLayoutComponent
  },
  {
    path:'card',
    component:CardExampleComponent
  },
  {
    path:'breadcrumbs',
    component:BreadcrumbsExampleComponent
  },
  {
    path:'theme-generator',
    component:ThemeGeneratorComponent
  },
  {
    path:'mat-theme',
    component:MatThemeExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {}
