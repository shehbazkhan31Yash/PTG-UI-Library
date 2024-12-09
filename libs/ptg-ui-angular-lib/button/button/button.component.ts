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
  HostListener,
} from '@angular/core';


@Component({
  selector: 'ptg-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  {
  @Input() type? : 'button' | 'submit' | 'reset' = 'button';
  @Input() isDisable? = false;
  @Input() isBlock? = false;
  @ViewChild('button', { static: true }) button!: ElementRef;
  @Input() btnStyleType? : 'primary' | 'secondary'| 'warning' | 'danger' | 'success' | 'info' | 'light' | 'dark' = 'primary';
  @Input() size?: 'small' | 'medium' | 'large' = 'medium';
  @Input() label = 'Button';

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.code) {
      case 'Enter':
        this.button.nativeElement.click();
        break;
      default:
        return;
    }
  }   
}
