/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since June 2022
 * @author Akshay Patidar
 * @Component ptg-ui-textarea;
 * @description This component for input
 **/

 import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ptg-ui-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: '',
    '(blur)': 'handleBlur()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextareaComponent),
    },
  ],
})
export class TextareaComponent implements   ControlValueAccessor {
  // @Input() parentForm!: FormGroup;
  // @Input() fieldname!: string;
  @Input() placeholder: string | undefined | null = '';
  @Input() bindValue = '';
  @Input() className = '';
  @Input() type = 'text';
  @Input() id = '';
  @Input() value = '';
  @Input() accessKey = '';
  @Input() aria_placeholder = '';
  @Input() maxlength!: string | number | null;
  @Input() minlength!: string | number | null;
  @ViewChild('textarea', { static: true }) input!: ElementRef;
  textareaValue: any;

  // get formField(): FormControl {
  //   return this.parentForm?.get(this.fieldname) as FormControl;
  // }

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  onChange = (_: any) => {};
  onTouched = () => {};
  ariaValueText() {
    return `${this.textareaValue}`;
  }
  isInteractive(): boolean {
    // return !this.readonly && !this.disabled;
    return false;
  }

  writeValue(obj: any): void {
    this.textareaValue = obj;
    this._changeDetectorRef.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onchangeInput(event: any) {
    this.onChange(event.value);
  }

  

  handleBlur() {
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
  }
}
