import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, HostListener, OnInit, forwardRef } from '@angular/core';
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
export class CalendarComponent implements OnInit  , ControlValueAccessor  {
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @Input() disabledDates: Date[] = [];
  @Input() isReadOnly?: boolean = false;
  @Input() placeholder = 'Select Date';
  @Input() formart = 'MM/DD/YYYY';
  @Output() dateSelected = new EventEmitter<Date>();

  showCalendar = false;
  selectedDate: Date | null = null;
  displayValue = '';
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  dates: Date[] = [];
  days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
    private onChange: any = () => {};
    private onTouched: any = () => {};
    private _value: any;
  ngOnInit() {
    this.generateCalendar();
  }
  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }
  hideCalendar() {
    this.showCalendar = false;
  }
  selectDate(date: Date) {
    if (this.isDisabled(date)) {
      return; // Do not select the date if it is disabled
    }
    this.selectedDate = new Date(date);
    this.displayValue = this.formatDate(date);
    this.dateSelected.emit(this.selectedDate);
    this.hideCalendar();
  }
  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    else {
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
  generateCalendar() {
    this.dates = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const startDay = firstDay.getDay();
  
    // Get the last day of the previous month
    const prevMonthLastDay = new Date(this.currentYear, this.currentMonth, 0).getDate();
  
    // Add dates from the previous month
    for (let i = startDay - 1; i >= 0; i--) {
      this.dates.push(new Date(this.currentYear, this.currentMonth - 1, prevMonthLastDay - i));
    }
  
    // Add dates from the current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      this.dates.push(new Date(this.currentYear, this.currentMonth, i));
    }
  
    // Add dates from the next month to fill the last row
    const remainingDays = 42 - this.dates.length; // 42 = 6 weeks * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      this.dates.push(new Date(this.currentYear, this.currentMonth + 1, i));
    }
  }
  
  isDisabled(date: Date): boolean {
    if (isNaN(date.getTime())) {
      return true; // Treat NaN dates as disabled
    }
    const dateStr = date.toDateString();
    return (
      (this.minDate && date < this.minDate) ||
      (this.maxDate && date > this.maxDate) ||
      this.disabledDates.some(disabledDate => disabledDate.toDateString() === dateStr) ||
      date.getMonth() !== this.currentMonth // Disable dates from other months
    );
  }
  

  isSelected(date: Date): boolean {
    return (
      this.selectedDate !== null &&
      !isNaN(date.getTime()) &&
      date.toDateString() === this.selectedDate.toDateString()
    );
  }
  formatDate(date: Date): string {
    const day = this.pad(date.getDate());
    const month = this.pad(date.getMonth() + 1); // Months are zero-based  
    const year = date.getFullYear();
    switch (this.formart) {
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'DD/MM/YYYY':
        return `${day}/${month}/${year}`;
      case 'YYYY/MM/DD':
        return `${year}/${month}/${day}`;
      default:
        return date.toDateString(); // Fallback to default string representation
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
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state if needed
  }

  // Add any other necessary methods and logic for your calendar component

}
