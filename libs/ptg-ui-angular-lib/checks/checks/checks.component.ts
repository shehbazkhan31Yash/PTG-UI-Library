/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-checks;
 * @description This component for checks
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
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ptg-ui-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.scss'],
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
      useExisting: forwardRef(() => ChecksComponent),
    },
  ],
})
export class ChecksComponent  {
  // @Input() parentForm!: FormGroup;
  // @Input() fieldname!: string;
  @Input() label: string | undefined | null = '';
  @Input() accessKey = '';
  @ViewChild('check', { static: true }) check!: ElementRef;
  isChecked = false;
  randomId = 'checkbox' + (Math.random() * 1000).toFixed(0);

  // get formField(): FormControl {
  //   return this.parentForm?.get(this.fieldname) as FormControl;
  // }

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.isChecked = obj;
    this._changeDetectorRef.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  

  onCheck() {
    this.onChange(this.isChecked);
  }

  onBlur() {
    this.onTouched();
  }

  handleBlur() {
    this.onTouched();
  }
}
