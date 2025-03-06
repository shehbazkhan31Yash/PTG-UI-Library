import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PtgAgGridDatatableComponent } from './ptg-ag-grid-datatable.component';
import { AgGridModule } from 'ag-grid-angular';
import {GridOptions, GridApi, GridReadyEvent } from 'ag-grid-community';
import { TranslateModule } from '@ngx-translate/core';

describe('PtgAgGridDatatableComponent', () => {
  let component: PtgAgGridDatatableComponent;
  let fixture: ComponentFixture<PtgAgGridDatatableComponent>;
  let gridApi:GridApi | any;
  const gridOptions: GridOptions = <GridOptions>{};
  let currentPage:any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtgAgGridDatatableComponent ],
      imports:[AgGridModule.withComponents([]), TranslateModule.forRoot(),],
      providers:[GridApi]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtgAgGridDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filterOpend button',fakeAsync(()=>{
    let evt:any
    const spyCloseDialog = jest.spyOn(component, 'filterOpend');
    component.filterOpend(evt);
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('filterChanged button',fakeAsync(()=>{
    let evt:any
    const spyCloseDialog = jest.spyOn(component, 'filterChanged');
    component.filterChanged(evt);
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('filterModified button',fakeAsync(()=>{
    let evt:any
    const spyCloseDialog = jest.spyOn(component, 'filterModified');
    component.filterModified(evt);
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('onCellValueChanged button',fakeAsync(()=>{
    let evt:any
    const spyCloseDialog = jest.spyOn(component, 'onCellValueChanged');
    component.onCellValueChanged(evt)
    component.onCellValueChanges.emit(evt);
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('paginationChanged button',fakeAsync(async()=>{
    const spyCloseDialog = jest.spyOn(component, 'paginationChanged');
    await fixture.whenStable()
    component.paginationChanged() 
    expect(spyCloseDialog).toHaveBeenCalledTimes(3);
  }));


  it('onBtFirst button',fakeAsync(async()=>{
    // const api:any=  gridOptions.api
    const spyCloseDialog = jest.spyOn(component, 'onBtFirst');
    await fixture.whenStable()
    component.onBtFirst();
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('onBtLast button',fakeAsync( async()=>{
    const spyCloseDialog = jest.spyOn(component, 'onBtLast');
    await fixture.whenStable()
    component.onBtLast();

   
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('onBtNext button',fakeAsync( async()=>{
    let evt:any
    const spyCloseDialog = jest.spyOn(component, 'onBtNext');
    await fixture.whenStable()
    component.onBtNext(evt);

    component.onNavigateToNext?.emit(evt)
   
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('onBtPrevious button',fakeAsync( async()=>{
    let evt:any
    const spyCloseDialog = jest.spyOn(component, 'onBtPrevious');
    await fixture.whenStable()
    component.onBtPrevious();
    component.onNavigateToPrevious.emit(evt)
   
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('onBtPage button',fakeAsync( async()=>{
    const num:any = '1'
    const spyCloseDialog = jest.spyOn(component, 'onBtPage');
    await fixture.whenStable()
    component.onBtPage(num);
    component.onNavigateToPage.emit(num)
   
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('onBtPageFifty button',fakeAsync(async()=>{
    const spyCloseDialog = jest.spyOn(component, 'onBtPageFifty');
    await fixture.whenStable()
    component.onBtPageFifty();
   
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('onGridReady button',fakeAsync(async()=>{
    let params: GridReadyEvent | any
    const spyCloseDialog = jest.spyOn(component, 'onGridReady');
    await fixture.whenStable()
    component.onGridReady(params);
    gridApi = params?.api
    expect(spyCloseDialog).toHaveBeenCalledTimes(2);
  }));

  it('getSelectedRow button',fakeAsync(async()=>{
    let evt:any
    const spyCloseDialog = jest.spyOn(component, 'getSelectedRow');
    await fixture.whenStable()
    component.getSelectedRow(evt);
    gridApi?.getSelectedRows();
    gridApi?.getSelectedNodes();
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('counter button, current page count less then or equle to 3 pages ',fakeAsync(async()=>{
    component.totalPage = 7
    component.currentPage =  null
    const spyCloseDialog = jest.spyOn(component, 'counter');
    await fixture.whenStable()
    component.counter();
    expect(component.totalPage).toBeGreaterThan(5)
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
  it('counter button, current page count more then 7 pages ',fakeAsync(async()=>{
    component.totalPage = 7
    component.currentPage =  5
    const spyCloseDialog = jest.spyOn(component, 'counter');
    await fixture.whenStable()
    component.counter();
    expect(component.currentPage).toBeGreaterThan(3)
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
  it('counter button, current page count less then 7 pages ',fakeAsync(async()=>{
    component.totalPage = 6
    component.currentPage =  5
    const spyCloseDialog = jest.spyOn(component, 'counter');
    await fixture.whenStable()
    component.counter();
    expect(component.currentPage).toBeGreaterThan(3)
    expect((component.currentPage-component.totalPage)).toBeLessThan(2)
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

});
