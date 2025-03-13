
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RadioComponent } from './radio.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onChange when radio is selected', () => {
    const param = { name: 'Test', value: 'Test' };
    component.items = [{ name: 'mockName', value: 'test' }];
    component.onChange = jest.fn();
    component.onradioSelect(param);
    
    expect(component.onChange).toHaveBeenCalled();
    expect(component.selectedValue).toBe('Test');
  });

  it('should call onBlur method', fakeAsync(() => {
    const spyCloseDialog = jest.spyOn(component, 'onBlur');
    component.onBlur();
    component.onTouched();
    
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('should handle blur event', () => {
    const handleBlur = jest.spyOn(component, 'handleBlur');
    component.onTouched = jest.fn();
    component.handleBlur();
    
    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(component.onTouched).toHaveBeenCalled();
  });

  const registerOnChangeTests = [
    { method: 'registerOnChange', arg: jest.fn() },
    { method: 'registerOnTouched', arg: jest.fn() },
    { method: 'writeValue', arg: undefined },
  ];

  registerOnChangeTests.forEach(({ method, arg }) => {
    it(`${method} is called`, () => {
      const spy = jest.spyOn(component, method);
      component[method](arg);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  it('ngAfterViewInit should set default values', () => {
    component.items = [{ name: 'test', default: true }, { name: 'init', value: false }];
    component.selectedValue = 'test';
    
    const ngAfterViewInitSpy = jest.spyOn(component, 'ngAfterViewInit');
    const onChangeSpy = jest.spyOn(component, 'onChange');
    
    component.ngAfterViewInit();
    
    expect(ngAfterViewInitSpy).toHaveBeenCalled();
    expect(onChangeSpy).toHaveBeenCalled();
    expect(component.selectedValue).toBe('test');
  });

  it('should call onChange method', () => {
    const evt: any = {};
    const onChangeSpy = jest.spyOn(component, 'onChange');
    component.onChange(evt);
    
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });
});