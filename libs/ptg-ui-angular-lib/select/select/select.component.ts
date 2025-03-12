/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-select;
 * @description This component for select
 **/

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ptg-ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
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
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent implements  ControlValueAccessor {
  @Input() id!: string;
  @Input() parentForm: any;
  @Input() fieldname!: string;
  @Input() placeholder: any = '';
  @Input() items: any;
  @Input() bindLabel!: string;
  @Input() bindValue!: string;
  @Input() isMultiple!: boolean;
  @Input() closeOnSelect!: boolean;
  // @Input() accessKey = '';
  @Input() itemCount = 3;
  @Output() change: EventEmitter<any> = new EventEmitter();
  textLimit = '10';
  selectedValue: any = [];


  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.selectedValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  

  onchangeSelection(event: any) {
    this.change.emit(event);
    if (!this.isMultiple) {
      this.onChange(event?.name);
    } else if (this.isMultiple && !event?.target) {
      const selected =
        event && event.map((item: { [x: string]: any }) => item['name']);
      this.onChange(selected);
    }
  }
  inputChange() {
     // Placeholder for future input change logic
  }

  selectUnselectAll(
    isChecked: any,
    items: any[],
    control: any,
    bindValue: string | number
  ): void {
    if (isChecked.checked) {
      const selected =
        items && items.map((item: { [x: string]: any }) => item[bindValue]);
      this.onChange(selected);
    } else {
      this.onChange([]);

    }
  }

  handleBlur() {
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
  }
}
