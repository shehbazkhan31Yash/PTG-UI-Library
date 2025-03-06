/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component Ngx datatable;
 * @description This module used for reusable Ngx datatable
 */

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'ptg-ui-ptg-ngx-datatable',
  templateUrl: './ptg-ngx-datatable.component.html',
  styleUrls: ['./ptg-ngx-datatable.component.scss']
})
export class PtgNgxDatatableComponent implements OnInit {
ColumnMode = ColumnMode;
// Basic UI and functionlity 
@Input() scrollbarV = false;
@Input() scrollbarH = false;
@Input() headerHeight = 50;
@Input() footerHeight = 100;
@Input() rows: any;
@Input() columns: any;
@Input() rowHeight: any = 'auto';
@Input() vScroll = false;
@Input() hScroll = true;

// if you want to show loader on api call or data load please set it true  
@Input() loaderShowWhen = false;

// Paginaiton
@Input() totalCount = 100;
@Input() offset = 0;
@Input() limit = 1;
@Input() virtualization = true;
@Input() externalPaging = false;
@Output() paginationData: EventEmitter<any> = new EventEmitter(); 

// sorting functionlity 
// If you want to sort any specific column you have to pass a value as array 
@Input() sorts: any; 
// you have to set true value if you want to add external sorting
@Input() externalSorting = false; 
// get event of sorting
@Output() getSortEvent: EventEmitter<any> = new EventEmitter();
@Input() rowClass = '';

// Filter functionlity 
// show hide filter input 
@Input() showFiter = true;
// get event of filter and do filtering
@Output() getFilterEvent: EventEmitter<any> = new EventEmitter();
// get event of Pagination change event
@Output() getPageChangeEvent: EventEmitter<any> = new EventEmitter();

// Row Selection functionality 
@Input() selected: any = [];
SelectionType = SelectionType;
@Input() selectionType: any = this.SelectionType.checkbox;
@Output() getSelectionEvent: EventEmitter<any> = new EventEmitter();

currentPage = 0;
totalPage = 0;
pageArray: any = [];
temp = [];

// Action button vars
@Input() showActionButton = false; 
@Input() actionButtonLabel = 'Click Here';
@Input() actionButtonHeaderLabel = 'Action';
@Output() getActionEvent: EventEmitter<any> = new EventEmitter();


ngOnInit() {
 this.temp = this.rows;

}


  // Sorting functionlity 
  onSort(event:Event){
    // get event of sorting
    this.getSortEvent.emit(event);
  }

  // filter functionlity 
  updateFilter(event: any){
    this.getFilterEvent.emit(event);
  }

  // Pagination
  onPageChange(event:any){
    this.getPageChangeEvent.emit(event);
  }
  // onscroll get event
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onScroll(event: any){
  }

  // On Row selection(working on both single and multiple selction case)
  onSelect(selected:any) {
    this.getSelectionEvent.emit({selected});
  }

  getAction(){
    this.getActionEvent.emit('Button Clicked');
    alert('Button Clicked')
  }
}
