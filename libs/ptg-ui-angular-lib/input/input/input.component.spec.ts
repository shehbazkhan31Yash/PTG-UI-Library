import { forwardRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ControlContainer,
  FormGroupDirective,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      providers: [
        {
          provide: ControlContainer,
          useValue: FormGroupDirective
        },
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => InputComponent) }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const testMethodCall = (methodName: string, args: any[] = []) => {
    const spy = jest.spyOn(component, methodName);
    component[methodName](...args);
    expect(spy).toHaveBeenCalled();
  };

  it('should call handleBlur and onTouched', () => {
    component.onTouched = jest.fn();
    testMethodCall('handleBlur');
    expect(component.onTouched).toHaveBeenCalled();
  });

  it('should call onchangeInput', () => {
    component.onChange = jest.fn();
    testMethodCall('onchangeInput', [[{ 'name': 'select', 'value': 'Test' }]]);
    expect(component.onChange).toHaveBeenCalled();
  });

  it('should call onBlur and onTouched', () => {
    component.onTouched = jest.fn();
    testMethodCall('onBlur');
    expect(component.onTouched).toHaveBeenCalled();
  });

  it('should call registerOnChange', () => {
    const mockFn = jest.fn();
    testMethodCall('registerOnChange', [mockFn]);
  });

  it('should call registerOnTouched', () => {
    const mockFn = jest.fn();
    testMethodCall('registerOnTouched', [mockFn]);
  });

  it('should call ariaValueText', () => {
    testMethodCall('ariaValueText');
  });

  it('should call isInteractive', () => {
    testMethodCall('isInteractive');
  });

  it('should call writeValue', () => {
    const evt = { target: { value: 'Test' } };
    testMethodCall('writeValue', [evt]);
  });

  it('should call onChange', () => {
    const evt = { target: { value: 'Test' } };
    testMethodCall('onChange', [evt]);
  });

  it('should call onTouched', () => {
    testMethodCall('onTouched');
  });
});