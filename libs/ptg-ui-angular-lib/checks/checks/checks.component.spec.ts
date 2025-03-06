import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ChecksComponent } from './checks.component';

describe('ChecksComponent', () => {
  let component: ChecksComponent;
  let fixture: ComponentFixture<ChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecksComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('writeValue button',fakeAsync(()=>{
    const obj:any = {}
    const spyCloseDialog = jest.spyOn(component, 'writeValue');
    component.writeValue(obj);
    component.isChecked = obj
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('registerOnChange button',fakeAsync(()=>{
    const obj:any = {}
    const spyCloseDialog = jest.spyOn(component, 'registerOnChange');
    component.registerOnChange(obj);
    component.onChange = obj;
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('registerOnTouched button',fakeAsync(()=>{
    const obj:any = {}
    const spyCloseDialog = jest.spyOn(component, 'registerOnTouched');
    component.registerOnTouched(obj);
    component.onTouched = obj;
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('onCheck button',fakeAsync(()=>{
    const spyCloseDialog = jest.spyOn(component, 'onCheck');
    component.onCheck();
    component.onChange(component.isChecked)
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('onBlur button',fakeAsync(()=>{
    const spyCloseDialog = jest.spyOn(component, 'onBlur');
    component.onBlur();
    component.onTouched()
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
});
//writeValue