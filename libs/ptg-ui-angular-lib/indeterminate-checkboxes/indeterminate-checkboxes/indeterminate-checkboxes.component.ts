/**
 * @since April 2022
 * @author Aakash Patidar
 * @Component IndeterminateCheckboxesComponent;
 * @description This component for indeterminate checkboxes
 * @PackageUrl https://github.com/leovo2708/ngx-treeview
**/

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import {IndeterminateCheckboxesModule } from '../indeterminate-checkboxes.module'

@Component({
  selector: 'ptg-ui-indeterminate-checkboxes',
  templateUrl: './indeterminate-checkboxes.component.html',
  styleUrls: ['./indeterminate-checkboxes.component.scss']
})
export class IndeterminateCheckboxesComponent implements OnInit {
  dropdownEnabled = true;
  values: number[] = [];
  
  config = TreeviewConfig.create({
    hasAllCheckBox: false,
    hasFilter: false,
    hasCollapseExpand: false,
    //  If you want deCouple the child checkbox please set true
    // (Means IndeterminateCheckboxes functionlity not worked when you set true this value) 
    decoupleChildFromParent: false,
  });

  items: TreeviewItem[] = [];

  @Input() checkBoxList:any = [];
  @Output() onCheckboxValueChanges: EventEmitter<any> = new EventEmitter();
  
  ngOnInit(): void {
    this.items = [this.checkBoxList]
    // this.setIfChildPresent(this.items);
  }

  // Function called when you want to uncheck all the checkbox on page onInit
  setIfChildPresent(arr?:any){
    this.onCheckboxValueChanges.emit(arr);
    if(!arr.length){
      return;
    }else{
      arr.forEach((item:any) => {
        item.checked = false;
        // this.onCheckboxValueChanges.emit(item);
        if(item.internalChildren){
          return this.setIfChildPresent(item.internalChildren)
        }
      })
    }
  }

  // Get checkbox value 
  getValue(event:any){
    this.onCheckboxValueChanges.emit(event);
  }
}
