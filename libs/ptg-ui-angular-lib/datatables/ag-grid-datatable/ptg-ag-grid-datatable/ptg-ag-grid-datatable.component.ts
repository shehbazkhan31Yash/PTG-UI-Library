/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-inferrable-types */

/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component Ag grid datatable;
 * @description This component used for reusable ag-grid datatable
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {GridOptions, CellValueChangedEvent, ColDef, FilterChangedEvent, FilterModifiedEvent, FilterOpenedEvent, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'ptg-ui-ptg-ag-grid-datatable',
  templateUrl: './ptg-ag-grid-datatable.component.html',
  styleUrls: ['./ptg-ag-grid-datatable.component.scss']
})
export class PtgAgGridDatatableComponent implements OnInit {
  gridOptions: GridOptions | any

  @Input() rowData: any;
  @Input() columnData: any;
  @Input() themeClassName: string = 'ag-theme-alpine';
  @Input() sortable: boolean = false;
  @Input() editable: boolean = false;
  // row heignt is on pixle 

  // Styling
  @Input() rowHeight: number = 50;
  @Input() rowDrag: boolean = false;
  @Input() animateRow: boolean = true;
  @Input() rowStyle: any;
  @Input() rowClass: string = '';
  @Output() getRowStyle: EventEmitter<any> = new EventEmitter();
  @Input() rowSelection: string = 'multiple'

  // filter events & Configs
  @Input() filter: boolean = true;
  @Input() filterParms: any;
  @Output() onFilterOpen: EventEmitter<any> = new EventEmitter();
  @Output() onFilterChanged: EventEmitter<any> = new EventEmitter();
  @Output() onFilterModified: EventEmitter<any> = new EventEmitter();
  @Output() onCellValueChanges: EventEmitter<any> = new EventEmitter();

  // Pagination 
  @Input() pagination: boolean = false;
  @Input() paginationLimit: number = 5;
  @Input() customPaginationClass: string = '';
  @Input() enableCustomFilter: boolean = true;
  @Output() onPaginationChanged: EventEmitter<any> = new EventEmitter();
  @Output() onNavigateToNext: EventEmitter<any> = new EventEmitter();
  @Output() onNavigateToPrevious: EventEmitter<any> = new EventEmitter();
  @Output() onNavigateToPage: EventEmitter<any> = new EventEmitter();
  @Output() onrowSelect: EventEmitter<any> = new EventEmitter();

  @Input() frameworkComponents: any;

  public defaultColDef: ColDef = {
    sortable: false
  };

  public columnDef: ColDef[] = [];
  gridApi!: GridApi | any;
  totalPage: number = 0;
  currentPage: any = 0;
  offset: number = 0;
  totalRowCount: number = 0;
  pageArray: any = [];

  ngOnInit(): void {
    // configuration for default functionlity for table(this works for each row and column) 
    this.defaultColDef = {
      sortable: this.sortable,
      filter: this.filter,
      filterParams: this.filterParms,
      editable: this.editable,
      resizable: true,
    }
    this.columnDef = this.columnData;
  }

  filterOpend(event: FilterOpenedEvent) {
    // onFilterOpened is called when the filter is opened.
    this.onFilterOpen.emit(event)
  }

  filterChanged(event: FilterChangedEvent) {
    // onFilterModified is called when the filter changes regardless of whether the Apply button is present.
    this.onFilterChanged.emit(event);
  }

  filterModified(event: FilterModifiedEvent) {
    // onFilterChanged is called only after a new filter is applied.
    this.onFilterModified.emit(event);
  }


  onCellValueChanged(event: CellValueChangedEvent) {
    this.onCellValueChanges.emit(event);
  }

// Pagination functionlity 
  paginationChanged() {
    // Workaround for bug in events order
    if (this.gridApi!) {
      this.offset = this.gridApi.paginationGetPageSize();
      this.totalPage = this.gridApi.paginationGetTotalPages();
      // we +1 to current page, as pages are zero based
      this.currentPage = this.gridApi.paginationGetCurrentPage() + 1;
      this.totalRowCount = this.gridApi.paginationGetRowCount();
      this.pageArray = this.counter();
    }
  }

  onBtFirst() {
    // function used for navigagridOptionste to first page 
    this.gridApi.paginationGoToFirstPage();
  }

  onBtLast() {
    // function used for navigate to last page 
    this.gridApi.paginationGoToLastPage();
  }

  onBtNext(event:any) {
    // function used for navigate to next page 
    this.gridApi.paginationGoToNextPage();
  }

  onBtPrevious() {
    // function used for navigate to previous page
    this.gridApi.paginationGoToPreviousPage();
    this.onNavigateToPrevious.emit({total:this.totalPage, currentPage: this.currentPage-1, totalRowCount: this.totalRowCount});
  }

  onBtPage(index:number) {
    // we say page 4, as the first page is zero
    this.gridApi.paginationGoToPage(index);
    this.onNavigateToPage.emit({total:this.totalPage, currentPage: index+1, totalRowCount: this.totalRowCount});
  }

  onBtPageFifty() {
    // we say page 49, as the first page is zero
    this.gridApi.paginationGoToPage(49);
  }

  onGridReady(params: GridReadyEvent | any) {
    this.gridApi = params?.api;
  }

  counter() {
    // used for set custom pagination numbers
    let pageArray:any = [];
    if(this.totalPage > 5){

      // this used when we have current page count less then or equle to 3 pages 
      if(this.currentPage <= 3 || this.currentPage == null){
        pageArray = Array.from({length: 5}, (_, i) => i);
      }

      // this used when we have current page count more then 7 pages 
      if(this.currentPage > 3 && (this.totalPage - this.currentPage >= 2)){
        for (let index = this.currentPage - 2; index < parseInt(this.currentPage)+3; index++) {
          pageArray.push(index);
        }
      }

      // this used when we have current page count less then 7 pages
      if(this.currentPage > 3 && (this.totalPage - this.currentPage) < 2){
        for (let index = this.totalPage-4; index < this.totalPage + 1; index++) {
          pageArray.push(index);
        }
      }
      return pageArray;
    }else if(this.totalPage <= 5){
      return Array.from({length: this.totalPage}, (_, i) => i)
    }
  }

  // Get selected row by chekbox 
  getSelectedRow(event:any){ 
    let selectedRows = this.gridApi.getSelectedRows();
    let selectedNodes = this.gridApi.getSelectedNodes();
    this.onrowSelect.emit({
      'rows': selectedRows,
      'nodes': selectedNodes
    })
  }
}
