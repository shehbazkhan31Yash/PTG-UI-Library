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
  Input
} from '@angular/core';

interface Card {
  title: string;
  subtitle?: string;
  content: string;
  src?: string;
  footer?: string;
  cardClass?: string;
  cardHeaderClass?: string;
  cardBodyClass?: string;
  cardFooterClass?: string;
}
@Component({
  selector: 'ptg-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent {
  @Input() cardObj:Card={title:"title",content:"content"};
  
}
