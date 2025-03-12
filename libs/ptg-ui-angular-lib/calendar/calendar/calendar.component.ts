/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-calendar;
 * @description This component for calendar
 **/

import {
  Component,
  ViewChild,
  forwardRef,
  Input,
  HostListener,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { BsDatepickerConfig, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';


@Component({
  selector: 'ptg-ui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
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
      useExisting: forwardRef(() => CalendarComponent),
    },
  ],
})
export class CalendarComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild(BsDatepickerDirective, { static: false })
  datepickerVal!: BsDatepickerDirective;
  @ViewChild('datePicker', { static: true }) datePicker!: ElementRef;
  bsConfig?: Partial<BsDatepickerConfig>;

  @Input() placeholder?: string = '';
  @Input() className?: string = '';
  @Input() id?: string = '';
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @Input() disabled = false;
  @Input() isReadOnly = false;
  @Input() aria_placeholder = 'MM-DD-YYYY';
  @Input() aria_label = 'given-name';
  @Input() themeColor: 'theme-default' | 'theme-green' | 'theme-blue' | 'theme-dark-blue' | 'theme-red' | 'theme-orange' = 'theme-green';
  @Output() calendarValueChange = new EventEmitter<any>();
  inputDate: any;

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) { }
  ngOnInit(){
    this.bsConfig = { dateInputFormat: 'MM-DD-YYYY', adaptivePosition: true };
  }
  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(obj: any): void {
    this.inputDate = obj;
    this._changeDetectorRef.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onDateChanged(event: any): void {
    this.onChange(event);
    this.calendarValueChange.emit(event);
  }

  handleBlur(): void {
    this.onTouched();
  }

  onBlur(): void {
    this.onTouched();
  }

  applyTheme(pop: BsDatepickerDirective): void {
    this.bsConfig = { ...{}, containerClass: this.themeColor };
  }
  ngAfterViewInit(): void {
    this.applyTheme(this.datepickerVal);
  }
  @HostListener('window:scroll')
  onScrollEvent() {
  }
}
