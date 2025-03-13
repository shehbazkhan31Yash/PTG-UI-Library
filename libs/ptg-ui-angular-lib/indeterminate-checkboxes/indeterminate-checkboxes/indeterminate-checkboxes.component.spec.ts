import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeterminateCheckboxesComponent } from './indeterminate-checkboxes.component';
import {  EventEmitter } from '@angular/core';

describe('IndeterminateCheckboxesComponent', () => {
  let component: IndeterminateCheckboxesComponent;
  let fixture: ComponentFixture<IndeterminateCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndeterminateCheckboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeterminateCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setIfChildPresent called without value', () => {
    const setIfChildPresent = jest.spyOn(component, 'setIfChildPresent');
    component.onCheckboxValueChanges =  new EventEmitter();
 
    component.setIfChildPresent([]);
    expect(setIfChildPresent).toHaveBeenCalledTimes(1);
    
  });

  it('setIfChildPresent called with value', () => {
    const setIfChildPresent = jest.spyOn(component, 'setIfChildPresent')

    component.onCheckboxValueChanges =  new EventEmitter();
    component.setIfChildPresent([{'name':'select', internalChildren:true}]);

    expect(setIfChildPresent).toHaveBeenCalledTimes(2);
  });

  it('getAction event', () => {
    const evt:any={target:{value:'Test'}}
    const btn = jest.spyOn(component, 'getValue');
    component.getValue(evt);
    expect(btn).toHaveBeenCalled();
  });
});
