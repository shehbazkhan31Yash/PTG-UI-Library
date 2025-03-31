
/**
 * @since Feb 2025
 * @author Prasad Londhe
 * @Component ptg-ui-dragexample2;
 * @description This component for drag and drop example2
 **/

import { Component } from '@angular/core';
@Component({
  selector: 'ptg-ui-dragexample3',
  templateUrl: './dragexample3.component.html',
  styleUrls: ['./dragexample3.component.scss'],
})
export class Dragexample3Component {
  // Data required to drag and drop the box/element
  todoData = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  doneData = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  dragAndDropHtmlCode = `
  <h3>Todo List</h3>
  <div
    class="list-group mt-5"
    (dragover)="onDragOver($event)"
    (drop)="onDrop($event, 'todo')"
  >
    <div
      *ngFor="let item of todoData; let i = index"
      class="list-group-item d-flex justify-content-between align-items-center"
      draggable="true"
      (dragstart)="onDragStart($event, i, 'todo')"
    >
      {{ i + 1 }} - {{ item }}
    </div>
  </div>

  <h3 class="mt-4">Done List</h3>
  <div
    class="list-group"
    (dragover)="onDragOver($event)"
    (drop)="onDrop($event, 'done')"
  >
    <div
      *ngFor="let item of doneData; let i = index"
      class="list-group-item d-flex justify-content-between align-items-center"
      draggable="true"
      (dragstart)="onDragStart($event, i, 'done')"
    >
      {{ i + 1 }} - {{ item }}
    </div>
  </div>`;
dragAndDropTsCode = `
import { Component } from '@angular/core';
@Component({
  selector: 'ptg-ui-dragexample3',
  templateUrl: './dragexample3.component.html',
  styleUrls: ['./dragexample3.component.scss'],
})
export class Dragexample3Component {
   todoData = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
   doneData = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
   draggedItemIndex: number | null = null;
   draggedFromList: 'todo' | 'done' | null = null;

  onDragStart(event: DragEvent, index: number, list: 'todo' | 'done') {
    this.draggedItemIndex = index;
    this.draggedFromList = list;
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDrop(event: DragEvent, targetList: 'todo' | 'done') {
    event.preventDefault();
    const fromIndex = this.draggedItemIndex;
    const toIndex = parseInt(event.dataTransfer?.getData('text/plain') || '0', 10);

    if (fromIndex !== null && this.draggedFromList !== null) {
      if (this.draggedFromList === targetList) {
        // Move within the same list
        const data = targetList === 'todo' ? this.todoData : this.doneData;
        const movedItem = data[fromIndex];
        data.splice(fromIndex, 1);
        data.splice(toIndex, 0, movedItem);
      } else {
        // Move between lists
        const fromData = this.draggedFromList === 'todo' ? this.todoData : this.doneData;
        const toData = targetList === 'todo' ? this.todoData : this.doneData;
        const movedItem = fromData[fromIndex];
        fromData.splice(fromIndex, 1);
        toData.splice(toIndex, 0, movedItem);
      }
    }

    // Reset dragged item index
    this.draggedItemIndex = null;
    this.draggedFromList = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
  
  `;

  // Store the index of the dragged item
  draggedItemIndex: number | null = null;
  draggedFromList: 'todo' | 'done' | null = null;

  onDragStart(event: DragEvent, index: number, list: 'todo' | 'done') {
    this.draggedItemIndex = index;
    this.draggedFromList = list;
    event.dataTransfer?.setData('text/plain', index.toString());
  }

  onDrop(event: DragEvent, targetList: 'todo' | 'done') {
    event.preventDefault();
    const fromIndex = this.draggedItemIndex;
    const toIndex = parseInt(event.dataTransfer?.getData('text/plain') || '0', 10);

    if (fromIndex !== null && this.draggedFromList !== null) {
      if (this.draggedFromList === targetList) {
        // Move within the same list
        const data = targetList === 'todo' ? this.todoData : this.doneData;
        const movedItem = data[fromIndex];
        data.splice(fromIndex, 1);
        data.splice(toIndex, 0, movedItem);
      } else {
        // Move between lists
        const fromData = this.draggedFromList === 'todo' ? this.todoData : this.doneData;
        const toData = targetList === 'todo' ? this.todoData : this.doneData;
        const movedItem = fromData[fromIndex];
        fromData.splice(fromIndex, 1);
        toData.splice(toIndex, 0, movedItem);
      }
    }

    // Reset dragged item index
    this.draggedItemIndex = null;
    this.draggedFromList = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}