/**
 * @since Feb 2025
 * @author Prasad Londhe
 * @Component ptg-ui-dragexample3;
 * @description This component for drag and drop example3
 **/

import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { resources } from "../../../../resource/resource";

@Component({
  selector: 'ptg-ui-dragexample4',
  templateUrl: './dragexample4.component.html',
  styleUrls: ['./dragexample4.component.scss']
})
export class Dragexample4Component {
  collectionForm!: FormGroup;
  currentCollection?: any;
  codeKey = 'key';
  resources = resources;
  dragAndDropHtmlCode = `
  
<div class="wrapper3 mt-2 p-2 bg-white rounded">
  <div class="row pb-2 text-center">
    <div>
      <button
        id="r_add_manual_btn"
        type="button"
        class="btn btn-primary"
        (click)="addManual()"
      >
        {{ 'ADD_MANUAL' | translate }}
      </button>
    </div>
  </div>
  <div
    class="drag-box-wrapper"
    [ngClass]="{ 'commitment-scroll': collectionArray.length > 0 }"
    [formGroup]="collectionForm"
  >
    <ng-container formArrayName="collection">
      <ng-container
        *ngFor="let requirement of collectionArray.controls; let i = index"
        [formGroupName]="i"
      >
        <div
          class="drag-box d-flex justify-content-between"
          draggable="true"
          (dragstart)="onDragStart(i)"
          (dragover)="onDragOver($event)"
          (drop)="onDrop(i)"
        >
          <div class="d-flex">
            <div class="r-code-section">
              <input
                #code
                id="{{ codeKey }}_{{ i }}"
                [formControlName]="codeKey"
                class="item-name item-desc"
                [ngClass]="{
                  'is-invalid': collectionArray.at(i).get(codeKey)?.errors
                }"
              />
              <span
                class="invalid-feedback"
                *ngIf="
                  collectionArray.at(i).get(codeKey)?.errors?.invalidCode as error
                "
              >
                {{ error }}
              </span>
            </div>
          </div>
          <div class="d-flex r-code-section">
            <button
              id="r_reset_{{ i }}"
              class="icon-btn mx-1"
              (click)="resetCollection(i)"
            >
              <i class="fa-solid fa-arrow-rotate-right"></i>
            </button>
            <button
              id="r_delete_{{ i }}"
              class="icon-btn mx-1"
              (click)="deleteCollection(i)"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <button id="r_drag_{{ i }}" class="icon-btn mx-1">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </ng-container>
    </ng-container>
  </div>
</div>
  `;
dragAndDropTsCode = `
import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ptg-ui-dragexample4',
  templateUrl: './dragexample4.component.html',
  styleUrls: ['./dragexample4.component.scss']
})
export class Dragexample4Component {
  collectionForm!: FormGroup;
  currentCollection?: any;
  codeKey = 'key';
  @ViewChildren('code') codes!: QueryList<any>;
  draggingIndex: number | null = null;

  get collectionArray(): FormArray {
    return this.collectionForm.get('collection') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.collectionForm = this.fb.group({
      collection: this.fb.array([]),
    });
  }
  addCollectionGroup(collection: any): FormGroup {
    return this.fb.group({
      [this.codeKey]: [collection[this.codeKey]],
    });
  }
  deleteCollection(i: number): void {
    this.collectionArray.removeAt(i);
  }
  resetCollection(i: number): void {
    this.collectionArray.at(i)?.reset();
  }
  addManual(): void {
    const collection: any = {
      [this.codeKey]: '',
    };
    this.collectionArray.push(this.addCollectionGroup(collection));
    setTimeout(() => {
      this.codes.last.nativeElement.focus();
    });
  }
  onDragStart(index: number): void {
    this.draggingIndex = index;
  }
  onDrop(index: number): void {
    if (this.draggingIndex !== null && this.draggingIndex !== index) {
      const movedItem = this.collectionArray.at(this.draggingIndex);
      this.collectionArray.removeAt(this.draggingIndex);
      this.collectionArray.insert(index, movedItem);
    }
    this.draggingIndex = null; // Reset dragging index
  }
  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Prevent default to allow drop
  }
}
  `;

  @ViewChildren('code') codes!: QueryList<any>;
  draggingIndex: number | null = null;

  get collectionArray(): FormArray {
    return this.collectionForm.get('collection') as FormArray;
  }

  constructor(private readonly fb: FormBuilder) {
    this.collectionForm = this.fb.group({
      collection: this.fb.array([]),
    });
  }

  // Method for add CollectionGroup
  addCollectionGroup(collection: any): FormGroup {
    return this.fb.group({
      [this.codeKey]: [collection[this.codeKey]],
    });
  }

  // Method for delete list
  deleteCollection(i: number): void {
    this.collectionArray.removeAt(i);
  }

  // Method for reset list field
  resetCollection(i: number): void {
    this.collectionArray.at(i)?.reset();
  }

  // Method for add list item
  addManual(): void {
    const collection: any = {
      [this.codeKey]: '',
    };
    this.collectionArray.push(this.addCollectionGroup(collection));

    // focus on last added row
    setTimeout(() => {
      this.codes.last.nativeElement.focus();
    });
  }

  // Start dragging
  onDragStart(index: number): void {
    this.draggingIndex = index;
  }

  // Drop the item
  onDrop(index: number): void {
    if (this.draggingIndex !== null && this.draggingIndex !== index) {
      const movedItem = this.collectionArray.at(this.draggingIndex);
      this.collectionArray.removeAt(this.draggingIndex);
      this.collectionArray.insert(index, movedItem);
    }
    this.draggingIndex = null; // Reset dragging index
  }

  // Drag over event
  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Prevent default to allow drop
  }
}
