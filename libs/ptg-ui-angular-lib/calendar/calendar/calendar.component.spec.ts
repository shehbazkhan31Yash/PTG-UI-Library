import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarComponent ],
      imports:[BsDatepickerModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => CalendarComponent),
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('writeValue button',fakeAsync(()=>{
    const obj = {}
    const spyCloseDialog = jest.spyOn(component, 'writeValue');
    component.writeValue(obj);
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
  it('registerOnChange button',fakeAsync(()=>{
    const obj:any = {}
    const spyCloseDialog = jest.spyOn(component, 'registerOnChange');
    component.registerOnChange(obj);
    component.onChange = obj
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
  it('registerOnTouched button',fakeAsync(()=>{
    const obj:any = {}
    const spyCloseDialog = jest.spyOn(component, 'registerOnTouched');
    component.registerOnTouched(obj);
    component.onTouched = obj
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
  it('handleBlur button',fakeAsync(()=>{
    const spyCloseDialog = jest.spyOn(component, 'handleBlur');
    component.handleBlur();
    component.onTouched();
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
  it('onBlur button',fakeAsync(()=>{
    const spyCloseDialog = jest.spyOn(component, 'onBlur');
    component.onBlur();
    component.onTouched();
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
  it('onDateChanged button',fakeAsync(()=>{
    const obj:any = {}
    const spyCloseDialog = jest.spyOn(component, 'onDateChanged');
    component.onDateChanged(obj);
    component.onChange(obj);
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
  it('onScrollEvent button',fakeAsync(()=>{
    const spyCloseDialog = jest.spyOn(component, 'onScrollEvent');
    component.onScrollEvent();
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

});
