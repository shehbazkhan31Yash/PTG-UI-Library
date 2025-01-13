/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-breadcrumbs;
 * @description This component for breadcrumbs
 **/

import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'ptg-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {
  @Input() cardObj:any;
  
  constructor() { }
  ngOnInit(): void {

  }

}
