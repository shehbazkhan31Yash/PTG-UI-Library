import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle calendar visibility', () => {
    component.toggleCalendar();
    expect(component.showCalendar).toBe(true);
    component.toggleCalendar();
    expect(component.showCalendar).toBeFalsy();
  });

  it('should select a date', () => {
    const date = new Date(2025, 3, 10);
    component.selectDate(date);
    expect(component.selectedDate).toEqual(date);
    expect(component.displayValue).toBe('04/10/2025');
  });

  it('should disable dates outside min and max range', () => {
    component.minDate = new Date(2025, 0, 1);
    component.maxDate = new Date(2025, 11, 31);
    const dateBeforeMin = new Date(2024, 11, 31);
    const dateAfterMax = new Date(2026, 0, 1);
    expect(component.isDisabled(dateBeforeMin)).toBe(true);
    expect(component.isDisabled(dateAfterMax)).toBe(true);
  });
  

  it('should disable specific dates', () => {
    const disabledDate = new Date(2025, 3, 10);
    component.disabledDates = [disabledDate];
    expect(component.isDisabled(disabledDate)).toBe(true);
  });

  it('should format date correctly', () => {
    const date = new Date(2025, 3, 10);
    expect(component.formatDate(date)).toBe('04/10/2025');
  });

  it('should generate years correctly', () => {
    component.minDate = new Date(2020, 0, 1);
    component.maxDate = new Date(2030, 11, 31);
    component.generateYears();
    expect(component.years).toContain(2020);
    expect(component.years).toContain(2030);
  });

  it('should generate calendar dates correctly', () => {
    component.currentMonth = 3;
    component.currentYear = 2025;
    component.generateCalendar();
    expect(component.dates.length).toBeGreaterThan(0);
  });

  it('should change month and year correctly', () => {
    component.currentMonth = 0; 
    component.currentYear = 2025;
    component.nextMonth();
    expect(component.currentMonth).toBe(1); 
    component.prevMonth();
    expect(component.currentMonth).toBe(0); 
  });

  it('should handle outside click to hide calendar', () => {
    component.showCalendar = true;
    const event = new MouseEvent('click', { bubbles: true });
    document.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.showCalendar).toBe(false);
  });
});
