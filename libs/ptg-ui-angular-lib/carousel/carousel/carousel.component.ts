/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-carousel;
 * @description This component for carousel
 **/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'ptg-ui-carousels',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @Input() carouselItems: {
    image: string;
    alt: string;
    captionLabel?: string;
    captionContent?: string;
  }[] = [];
  @Input() showControls?: boolean = false;
  @Input() showIndicators?: boolean = false;
  @Input() showImageIndicators?: boolean = false;
  @Input() carouselId = '';
}
