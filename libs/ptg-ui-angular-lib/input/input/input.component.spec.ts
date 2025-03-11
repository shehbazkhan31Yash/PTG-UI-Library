import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, forwardRef } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  sNG_VALUE_ACCESSOR
} from '@angular/forms';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ],
	   providers: [
        {
          provide: ControlContainer,
          useValue: FormGroupDirective
        },
        { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => InputComponent) }
      ],

    })
    .compileComponents();
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


  it('handle blur event called', () => {
    const handleBlur = jest.spyOn(component, 'handleBlur');
	  component.onTouched = jest.fn();
    component.handleBlur();
    expect(handleBlur).toHaveBeenCalledTimes(1);
	  expect(component.onTouched).toHaveBeenCalled();
  });
 it('on onchangeInput', () => {
    const onchangeInput = jest.spyOn(component, 'onchangeInput');
	  component.onChange = jest.fn();
    component.onchangeInput([{'name':'select','value':'Test'}]);
    expect(onchangeInput).toHaveBeenCalledTimes(1);
	  expect(component.onChange).toHaveBeenCalled();
  });

  it('On blur event called', () => {
    const onBlur = jest.spyOn(component, 'onBlur');
	 component.onTouched = jest.fn();
    component.onBlur();
    expect(onBlur).toHaveBeenCalledTimes(1);
	 expect(component.onTouched).toHaveBeenCalled();
  });

  it('registerOnChange  on change is called', () => {
    const registerOnChange = jest.spyOn(component, 'registerOnChange');
    let mockFn  = jest.fn();
    component.registerOnChange(mockFn);
    expect(registerOnChange).toHaveBeenCalledTimes(1);
	 });

  it('registerOnTouched  on change is called', () => {
    const registerOnTouched = jest.spyOn(component, 'registerOnTouched');
    let mockFn  = jest.fn();
    component.registerOnTouched(mockFn);
    expect(registerOnTouched).toHaveBeenCalledTimes(1);
	 });

  it('ariaValueText event', () => {
    let btn = jest.spyOn(component, 'ariaValueText');
    component.ariaValueText();
    expect(btn).toHaveBeenCalled();
	});

  it('isInteractive event', () => {
    let btn = jest.spyOn(component, 'isInteractive');
    component.isInteractive();
    expect(btn).toHaveBeenCalled();
	});

  it('writeValue event', () => {
    let evt:any={target:{value:'Test'}}
    let btn = jest.spyOn(component, 'writeValue');
    component.writeValue(evt);
    expect(btn).toHaveBeenCalled();
  });
  it('onChange event', () => {
    let evt:any={target:{value:'Test'}}
    let btn = jest.spyOn(component, 'onChange');
    component.onChange(evt);
    expect(btn).toBeDefined();
	  });
  it('onTouched event', () => {
    let btn = jest.spyOn(component, 'onTouched');
    component.onTouched();
    expect(btn).toBeDefined();
});
});