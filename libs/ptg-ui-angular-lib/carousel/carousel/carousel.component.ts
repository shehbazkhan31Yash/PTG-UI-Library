/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-carousel;
 * @description This component for carousel
 **/

import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'ptg-ui-carousels',
  templateUrl: './Carousel.component.html',
  styleUrls: ['./Carousel.component.scss'],
})

export class CarouselComponent implements OnInit {
  @Input() CarouselObj:any;
  
  constructor() { }
  ngOnInit(): void {

  }

}
