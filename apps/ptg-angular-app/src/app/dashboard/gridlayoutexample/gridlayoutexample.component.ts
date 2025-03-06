/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since April 2022
 * @author Priyanka Jain
 * @Component ptg-ui-gridlayoutexample;
 * @description This component for grid layput example
**/

import { Component } from '@angular/core';
import { gridExampleColumnClassData, gridHeadingColumnClassData, gridOffsetExampleColumnClassData } from './grid';

@Component({
  selector: 'ptg-ui-gridlayoutexample',
  templateUrl: './gridlayoutexample.component.html',
  styleUrls: ['./gridlayoutexample.component.scss']
})

export class GridlayoutexampleComponent {
  gridHeadingColumnClass = gridHeadingColumnClassData;
  gridExampleColumnClass = gridExampleColumnClassData;
  gridOffsetExampleColumnClass = gridOffsetExampleColumnClassData;
  htmlOffsetCode = `
  <ptg-ui-grid [columnClasses]="gridOffsetExampleColumnClass">
            <ng-template>Your Column Template</ng-template></ptg-ui-grid>
  `;
  htmlCode = `
  <ptg-ui-grid [columnClasses]="gridExampleColumnClass">
            <ng-template>Your Column Template</ng-template></ptg-ui-grid>
  `;
  tsCode = `
  import { Component } from '@angular/core';

  @Component({
  selector: 'ptg-ui-gridlayoutexample',
  templateUrl: './gridlayoutexample.component.html',
  styleUrls: ['./gridlayoutexample.component.scss']
  })
  
  export class GridlayoutexampleComponent {
  gridExampleColumnClass = [{ xl: 3, lg: 6, md: 6, sm: 12 }, { xl: 3, lg: 6, md: 6, sm: 12 }, { xl: 3, lg: 6, md: 6, sm: 12 }];
  gridOffsetExampleColumnClass = [{ lg: 4, md: 4, sm: 12, xs: 12 }, { lg: 4, md: 4, sm: 12, xs: 12, offsetMd: 4, offsetSm: 0 }];
  }
  `
}
