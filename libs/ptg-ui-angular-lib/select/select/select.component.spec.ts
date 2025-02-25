import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('on onchangeSelection with single value', () => {
    const onchangeSelection = jest.spyOn(component, 'onchangeSelection');
    component.onChange = jest.fn();
    component.onchangeSelection(new Event('select'));

    expect(onchangeSelection).toHaveBeenCalledTimes(1);
    expect(component.onChange).toHaveBeenCalled();

  });

  it('on onchangeSelection with multiple value', () => {
    const onchangeSelection = jest.spyOn(component, 'onchangeSelection');
    component.onChange = jest.fn();
    component.isMultiple = true;
    component.onchangeSelection([{'name':'select'}]);
    expect(onchangeSelection).toHaveBeenCalledTimes(1);
    expect(component.onChange).toHaveBeenCalled();
  });

  it('on selectUnselectAll with checked:true', () => {
    const selectUnselectAll = jest.spyOn(component, 'selectUnselectAll');
    component.onChange = jest.fn();
    component.selectUnselectAll({checked:true},[{'name':'select'}],'','test');
    expect(selectUnselectAll).toHaveBeenCalledTimes(1);
    expect(component.onChange).toHaveBeenCalled();
  });

  it('on selectUnselectAll with checked:false', () => {
    const selectUnselectAll = jest.spyOn(component, 'selectUnselectAll');
    component.onChange = jest.fn();
    component.selectUnselectAll({checked:false},[{'name':'select'}],'','test');
    expect(selectUnselectAll).toHaveBeenCalledTimes(1);
    expect(component.onChange).toHaveBeenCalled();
  });

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
   // expect(component.onChange).toHaveBeenCalled();
  });

  it('writeValue  on change is called', () => {
    let evt:any
    const writeValueBtn = jest.spyOn(component, 'writeValue');
    component.writeValue(evt);
    expect(writeValueBtn).toHaveBeenCalledTimes(1);
  });
  it('registerOnChange  on change is called', () => {
    let evt:any
    const registerOnChangeBtn = jest.spyOn(component, 'registerOnChange');
    component.registerOnChange(evt);
    expect(registerOnChangeBtn).toHaveBeenCalledTimes(1);
  });
  it('registerOnTouched  on change is called', () => {
    let evt:any
    const registerOnTouchedBtn = jest.spyOn(component, 'registerOnTouched');
    component.registerOnTouched(evt);
    expect(registerOnTouchedBtn).toHaveBeenCalledTimes(1);
  });
  it('inputChange  on change is called', () => {
    const inputChangeBtn = jest.spyOn(component, 'inputChange');
    component.inputChange();
    expect(inputChangeBtn).toHaveBeenCalledTimes(1);
  });
  it('onBlur  on change is called', () => {
    const onBlurBtn = jest.spyOn(component, 'onBlur');
    const onTouchedBtn = jest.spyOn(component, 'onBlur');
    component.onBlur();
    component.onTouched()
    expect(onBlurBtn).toHaveBeenCalledTimes(1);
    expect(onTouchedBtn).toHaveBeenCalledTimes(1);
  });
  it('onChange is called', () => {
    let evt:any
    const onChangeBtn = jest.spyOn(component, 'onChange');
    component.onChange(evt);
    expect(onChangeBtn).toHaveBeenCalledTimes(1);
  });

});
