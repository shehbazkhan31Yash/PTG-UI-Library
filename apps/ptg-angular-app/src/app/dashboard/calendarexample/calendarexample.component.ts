/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-calendarexample;
 * @description This component for calendarexample
**/

import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { resources } from "../../../resource/resource";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ptg-ui-calendarexample',
  templateUrl: './calendarexample.component.html',
  styleUrls: ['./calendarexample.component.scss'],
  host: {
    class: 'w-100',
  },
})
export class CalendarexampleComponent implements AfterViewInit {
  resources=resources;
  isCollapsed = false;
  htmlCode = `
    <ptg-ui-calendar [minDate]="minDate" [locale]="'ja-JP'" [colorTheme]="'theme-blue'" [maxDate]="endDate" placeholder='MM-DD-YYYY' [disabled]='false'
                     [readOnly]="false" (calendarValueChange)="onDateChange($event)">
    </ptg-ui-calendar>`;

  tsCode =
    `
    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-calendar-component',
      templateUrl: './demo-calendar.component.html'
    })
    export class DemoCalendarComponent {
      minDate = new Date();
      maxDate = new Date();

      constructor() {
        this.maxDate.setDate(this.minDate.getDate() + 30);
      }
    }`
  constructor(private cdr: ChangeDetectorRef, private _snackbar: MatSnackBar){
  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  openSnackBar() {
    this._snackbar.open('Code Copied', '', {
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    })
  }
}
