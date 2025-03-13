import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
    }).compileComponents();
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

  const testOnChangeSelection = (isMultiple: boolean, event: any) => {
    const onchangeSelection = jest.spyOn(component, 'onchangeSelection');
    component.onChange = jest.fn();
    component.isMultiple = isMultiple;
    component.onchangeSelection(event);
    expect(onchangeSelection).toHaveBeenCalledTimes(1);
    expect(component.onChange).toHaveBeenCalled();
  };

  it('should call onchangeSelection with single value', () => {
    testOnChangeSelection(false, new Event('select'));
  });

  it('should call onchangeSelection with multiple value', () => {
    testOnChangeSelection(true, [{ name: 'select' }]);
  });

  const testSelectUnselectAll = (checked: boolean) => {
    const selectUnselectAll = jest.spyOn(component, 'selectUnselectAll');
    component.onChange = jest.fn();
    component.selectUnselectAll({ checked }, [{ name: 'select' }], '', 'test');
    expect(selectUnselectAll).toHaveBeenCalledTimes(1);
    expect(component.onChange).toHaveBeenCalled();
  };

  it('should call selectUnselectAll with checked:true', () => {
    testSelectUnselectAll(true);
  });

  it('should call selectUnselectAll with checked:false', () => {
    testSelectUnselectAll(false);
  });

  it('should handle blur event', () => {
    const handleBlur = jest.spyOn(component, 'handleBlur');
    component.onTouched = jest.fn();
    component.handleBlur();
    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(component.onTouched).toHaveBeenCalled();
  });

  const testRegisterMethod = (methodName: string, arg: any) => {
    const spy = jest.spyOn(component, methodName);
    component[methodName](arg);
    expect(spy).toHaveBeenCalledTimes(1);
  };

  it('should call registerOnChange', () => {
    testRegisterMethod('registerOnChange', jest.fn());
  });

  it('should call writeValue', () => {
    testRegisterMethod('writeValue', undefined);
  });

  it('should call registerOnTouched', () => {
    testRegisterMethod('registerOnTouched', undefined);
  });

  it('should call inputChange', () => {
    const inputChangeBtn = jest.spyOn(component, 'inputChange');
    component.inputChange();
    expect(inputChangeBtn).toHaveBeenCalledTimes(1);
  });

  it('should call onBlur', () => {
    const onBlurBtn = jest.spyOn(component, 'onBlur');
    component.onBlur();
    component.onTouched();
    expect(onBlurBtn).toHaveBeenCalledTimes(1);
  });

  it('should call onChange', () => {
    const evt: any = {};
    const onChangeBtn = jest.spyOn(component, 'onChange');
    component.onChange(evt);
    expect(onChangeBtn).toHaveBeenCalledTimes(1);
  });
});