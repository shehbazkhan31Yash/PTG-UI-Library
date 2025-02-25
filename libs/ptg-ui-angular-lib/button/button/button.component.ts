/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-button;
 * @description This component for button
 **/

import {
  Component,
  ElementRef,
  Input, 
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ptg-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[tabindex]': 'disabled ? -1 : 0',
    '(keydown)': 'handleKeyDown($event)',
  },
})
export class ButtonComponent  {
  @Input() type: any = 'button';
  @Input() isDisable = false;
  @Input() isBlock = false;
  @Input() accessKey = '';
  @ViewChild('button', { static: true }) button!: ElementRef;
  @Input() btnStyleType:any;
  @Input() size?: 'small' | 'medium' | 'large';
  @Input() primary = false;
  @Output() onClick = new EventEmitter<Event>();
  @Input() label = 'Button';
  @Input() backgroundColor?: string;

  

  handleKeyDown(event: KeyboardEvent) {
    switch (event.which) {
      case 13:
        this.button.nativeElement.click();
        break;
      default:
        return;
    }
  }




  public get classes(): string[] {

     const mode = this.primary
       ? 'ptg-ui-button--primary'
       : 'ptg-ui-button--secondary';
       
       
     return [`ptg-ui-button`, `ptg-ui-button--${this.size}`, mode];
    
  
   }
   

   
}
