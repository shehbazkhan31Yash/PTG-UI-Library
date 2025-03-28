/**
 * @since Feb 2025
 * @author Prasad Londhe
 * @Component ptg-ui-dragexample1;
 * @description This component for drag and drop example1
 **/

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ptg-ui-dragexample2',
  templateUrl: './dragexample2.component.html',
  styleUrls: ['./dragexample2.component.scss'],
})
export class Dragexample2Component implements OnInit{
  items: string[] = [];
  gridItems: string[] = []; 
  loading = true;
  dragAndDropHtmlCode = `
  <h3>Drag and Drop List</h3>
  <ul class="list-group mt-5">
    <li
      *ngFor="let item of items; let i = index"
      class="list-group-item"
      draggable="true"
      (dragstart)="onDragStart($event, i)"
      (dragover)="allowDrop($event)"
      (drop)="onDrop($event)"
      [attr.data-index]="i"
    >
      {{ item }}
    </li>
  </ul> 
`;
  dragAndDropTsCode = `
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ptg-ui-dragexample2',
  templateUrl: './dragexample2.component.html',
  styleUrls: ['./dragexample2.component.scss'],
})
export class Dragexample2Component implements OnInit{
  items: string[] = [];
  gridItems: string[] = []; 
  loading = true;
  ngOnInit() {
    this.setItemCount(4); // Pass the count directly 
    
  }
  generateItems(count: number) {
    this.loading = false;
    this.items = Array.from({ length: count }, (_, i) =>
    'Item' +(i + 1));
  }

  setItemCount(count: number) {
    this.generateItems(count);
  }

  onDragStart(event: DragEvent, index: number) {
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDrop(event: DragEvent) {
    event.preventDefault(); 

    const fromIndex = Number(event.dataTransfer?.getData('text/plain'));
    const toIndex = Number((event.currentTarget as HTMLElement).getAttribute('data-index'));

    if (fromIndex !== toIndex) {
      const movedItem = this.items[fromIndex];
      this.items.splice(fromIndex, 1);
      this.items.splice(toIndex, 0, movedItem);
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

}`;

  ngOnInit() {
    this.setItemCount(4); // Pass the count directly 
    
  }

  generateItems(count: number) {
    this.loading = false;
    this.items = Array.from({ length: count }, (_, i) => 'Item' + (i + 1));
  }

  setItemCount(count: number) {
    this.generateItems(count);
  }

  onDragStart(event: DragEvent, index: number) {
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDrop(event: DragEvent) {
    event.preventDefault(); 

    const fromIndex = Number(event.dataTransfer?.getData('text/plain'));
    const toIndex = Number((event.currentTarget as HTMLElement).getAttribute('data-index'));

    if (fromIndex !== toIndex) {
      const movedItem = this.items[fromIndex];
      this.items.splice(fromIndex, 1);
      this.items.splice(toIndex, 0, movedItem);
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

}