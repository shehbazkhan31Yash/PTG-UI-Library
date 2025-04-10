import { Component, Input, Output, EventEmitter, OnInit, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ptg-ui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }
  ]
})
export class CalendarComponent implements OnInit, ControlValueAccessor {
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @Input() disabledDates: Date[] = [];
  @Input() isReadOnly?: boolean = false;
  @Input() placeholder = 'Select Date';
  @Input() format = 'MM/DD/YYYY';
  @Input() locale = 'en-IN';
  @Input() colorTheme: 'theme-green' | 'theme-blue' | 'theme-dark-blue' | 'theme-red' | 'theme-orange' = 'theme-green';

  @Output() calendarValueChange = new EventEmitter<Date>();

  showCalendar = false;
  selectedDate: Date | null = null;
  displayValue = '';
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  dates: Date[] = [];
  days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  years: number[] = [];
  private onChange: any = () => { };
  private onTouched: any = () => { };
  private _value: any;

  ngOnInit() {
    this.generateYears();
    this.generateCalendar();
    this.formatMonthsAndWeekdays();
  }
  formatMonthsAndWeekdays() {
    const date = new Date();
    this.months = Array.from({ length: 12 }, (_, i) => new Intl.DateTimeFormat(this.locale, { month: 'long' }).format(new Date(date.getFullYear(), i)));
    this.days = Array.from({ length: 7 }, (_, i) => new Intl.DateTimeFormat(this.locale, { weekday: 'short' }).format(new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)));
  }
  generateYears() {
    const startYear = this.minDate ? this.minDate.getFullYear() : 1900;
    const endYear = this.maxDate ? this.maxDate.getFullYear() : new Date().getFullYear() + 10;
    for (let year = startYear; year <= endYear; year++) {
      this.years.push(year);
    }
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  hideCalendar() {
    this.showCalendar = false;
  }

  selectDate(date: Date) {
    if (this.isDisabled(date)) {
      return;
    }
    this.selectedDate = new Date(date);
    this.displayValue = this.ChangeFormatDate(date);
    this.calendarValueChange.emit(this.selectedDate);
    this.hideCalendar();
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  onMonthOrYearChange() {
    this.currentMonth = Number(this.currentMonth);
    this.generateCalendar();
  }

  generateCalendar() {
    this.dates = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const startDay = firstDay.getDay();

    const prevMonthLastDay = new Date(this.currentYear, this.currentMonth, 0).getDate();

    for (let i = startDay - 1; i >= 0; i--) {
      this.dates.push(new Date(this.currentYear, this.currentMonth - 1, prevMonthLastDay - i));
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      this.dates.push(new Date(this.currentYear, this.currentMonth, i));
    }

    const totalDays = this.dates.length;
    const remainingDays = (totalDays <= 35) ? (35 - totalDays) : (42 - totalDays);
    for (let i = 1; i <= remainingDays; i++) {
      this.dates.push(new Date(this.currentYear, this.currentMonth + 1, i));
    }
  }

  isDisabled(date: Date): boolean {
    if (isNaN(date.getTime())) {
      return true;
    }
    const dateStr = date.toDateString();
    return (
      (this.minDate && date < this.minDate) ||
      (this.maxDate && date > this.maxDate) ||
      this.disabledDates.some(disabledDate => disabledDate.toDateString() === dateStr) ||
      date.getMonth() !== this.currentMonth
    );
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat(this.locale, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
  }

  isSelected(date: Date): boolean {
    return (
      this.selectedDate !== null &&
      !isNaN(date.getTime()) &&
      date.toDateString() === this.selectedDate.toDateString()
    );
  }

  ChangeFormatDate(date: Date): string {
    const day = this.pad(date.getDate());
    const month = this.pad(date.getMonth() + 1);
    const year = date.getFullYear();
    switch (this.format) {
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'DD/MM/YYYY':
        return `${day}/${month}/${year}`;
      case 'YYYY/MM/DD':
        return `${year}/${month}/${day}`;
      default:
        return date.toDateString();
    }
  }

  pad(n: number): string {
    return n < 10 ? `0${n}` : `${n}`;
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.datepicker-wrapper')) {
      this.hideCalendar();
    }
  }

  get value() {
    return this._value;
  }

  set value(val: any) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }
  get classes(): string[] {
    return [
      `ptg-ui-calendar--${this.colorTheme}`];
  }
}