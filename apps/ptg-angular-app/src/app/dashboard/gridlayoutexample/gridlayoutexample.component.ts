/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-gridlayoutexample;
 * @description This component for grid layput example
**/

import { Component, OnInit } from '@angular/core';
import { resources } from "../../../resource/resource";
@Component({
  selector: 'ptg-ui-gridlayoutexample',
  templateUrl: './gridlayoutexample.component.html',
  styleUrls: ['./gridlayoutexample.component.scss']
})
export class GridlayoutexampleComponent {
  resources = resources;
  gridColData = { xl: 3 };
}
