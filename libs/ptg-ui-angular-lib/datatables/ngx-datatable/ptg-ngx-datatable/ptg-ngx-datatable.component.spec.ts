import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtgNgxDatatableComponent } from './ptg-ngx-datatable.component';

describe('PtgNgxDatatableComponent', () => {
  let component: PtgNgxDatatableComponent;
  let fixture: ComponentFixture<PtgNgxDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtgNgxDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtgNgxDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSort event', () => {
    let evt:any={target:{value:'Test'}}
    let btn = jest.spyOn(component, 'onSort');
    component.onSort(evt);
    expect(btn).toHaveBeenCalled();
  });
  
  it('updateFilter event', () => {
    let evt:any={target:{value:'Test'}}
    let btn = jest.spyOn(component, 'updateFilter');
    component.updateFilter(evt);
    expect(btn).toHaveBeenCalled();
  });

  it('onPageChange event', () => {
    let evt:any={target:{value:'Test'}}
    let btn = jest.spyOn(component, 'onPageChange');
    component.onPageChange(evt);
    expect(btn).toHaveBeenCalled();
  });

  it('onScroll event', () => {
    let evt:any={target:{value:'Test'}}
    let btn = jest.spyOn(component, 'onScroll');
    component.onScroll(evt);
    expect(btn).toHaveBeenCalled();
  });

  it('onSelect event', () => {
    let evt:any={target:{value:'Test'}}
    let btn = jest.spyOn(component, 'onSelect');
    component.onSelect(evt);
    expect(btn).toHaveBeenCalled();
  });

  it('getAction event', () => {
    let btn = jest.spyOn(component, 'getAction');
    component.getAction();
    expect(btn).toHaveBeenCalled();
  });

});
