import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ptg-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type?: string = 'button';
  @Input() isDisable?: boolean = false;
  @Input() isBlock?: boolean = false;
  @Input() btnStyleType: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' | 'extra-large' = 'medium';
  @Input() label?: string = 'Button';
  @Input() backgroundColor?: string;
  @Output() buttonClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    if (!this.isDisable) {
      this.buttonClick.emit(event);
    }
  }

  get classes(): string[] {
    const mode = `ptg-ui-button--${this.btnStyleType}`;
    const sizeClass = this.getSizeClass();
    return [
      mode,
      sizeClass,
      this.isBlock ? 'ptg-ui-button--block' : '',
      this.isDisable ? 'ptg-ui-button--disabled' : ''
    ];
  }

  private getSizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'ptg-ui-button--small';
      case 'large':
        return 'ptg-ui-button--large';
      case 'extra-large':
        return 'ptg-ui-button--extra-large';
      default:
        return 'ptg-ui-button--medium';
    }
  }
}

