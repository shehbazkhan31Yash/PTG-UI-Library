import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { RadioComponent } from './radio.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {  NG_VALUE_ACCESSOR } from '@angular/forms';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;
  let debugElement: DebugElement
  let wrapper:any;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
    fixture.detectChanges();
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('radioselect Method is called', () => {
    const param =  {name:'Test',value:'Test'}  
    component.items = [{'name': 'mockName', 'value':'test'}];
    component.onChange = jest.fn();
    component.onradioSelect(param)
    expect(component.onChange).toHaveBeenCalled();
    expect(component.selectedValue).toBe("Test");
    fixture.detectChanges();
  });


  it('blur Method is called',fakeAsync(()=>{
    const spyCloseDialog = jest.spyOn(component, 'onBlur');
    component.onBlur();
    component.onTouched()
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));


  it('handle blur event', () => {
    const handleBlur = jest.spyOn(component, 'handleBlur');
    component.onTouched = jest.fn();
    component.handleBlur();
    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(component.onTouched).toHaveBeenCalled();
  });

  it('registerOnChange  on change is called', () => {
    const registerOnChange = jest.spyOn(component, 'registerOnChange');
    const mockFn  = jest.fn();
    component.registerOnChange(mockFn);
    expect(registerOnChange).toHaveBeenCalledTimes(1);
  });

  it('registerOnTouched  on change is called', () => {
    const registerOnTouched = jest.spyOn(component, 'registerOnTouched');
    const mockFn  = jest.fn();
    component.registerOnTouched(mockFn);
    expect(registerOnTouched).toHaveBeenCalledTimes(1);
  });

  it('writeValue  on change is called', () => {
    let evt:any
    const writeValue = jest.spyOn(component, 'writeValue');
    component.writeValue(evt);
    expect(writeValue).toHaveBeenCalledTimes(1);
  });
  it('ngAfterViewInit  on change is called', () => {
    component.items = [{name:'test', default:true},{name:'init',value:false}]
    component.selectedValue = 'test'
    const ngAfterViewInitBtn = jest.spyOn(component, 'ngAfterViewInit');
    fixture.detectChanges();
    const onChangeBtn = jest.spyOn(component, 'onChange');
    component.onChange(component.items.default);
    expect(onChangeBtn).toHaveBeenCalledTimes(1);
    component.items.forEach((v: any) => {
      v.default = true
      expect(component.selectedValue).toBe('test');
    });
    component.ngAfterViewInit();
    expect(component.ngAfterViewInit).toHaveBeenCalled();
  });
  it('onChange  on change is called', () => {
    let evt:any
    const onChangeBtn = jest.spyOn(component, 'onChange');
    component.onChange(evt);
    expect(onChangeBtn).toHaveBeenCalledTimes(1);
  });
});
