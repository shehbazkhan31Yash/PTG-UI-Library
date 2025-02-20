
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample2;
 * @description This component for drag and drop example2
 **/

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Subject, takeUntil } from 'rxjs';
import { resources } from '../../../../resource/resource';
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

@Component({
  selector: 'ptg-ui-dragexample2',
  templateUrl: './dragexample2.component.html',
  styleUrls: ['./dragexample2.component.scss'],
})
export class Dragexample2Component implements OnInit, OnDestroy {
  public personaldetails: any = [];
  loading = false;
  unsubscribe: Subject<any> = new Subject();
  resources = resources;
  USERSDATA: any = [];

  dragAndDropHtmlCode = `
  <div cdkDropList #personList="cdkDropList" [cdkDropListData]="userDetails"
       (cdkDropListDropped)="onDrop($event)">
    <div *ngFor="let item of userDetails; let i = index" cdkDrag>
      <p cdkDragHandle class="px-2"><i class="fa-solid fa-bars"></i></p>
      <p>{{i+1}} - {{item.username}}</p>
      <p cdkDragHandle class="px-2">
        <i class="fa-solid fa-bars"></i>
      </p>
    </div>
  </div>
  `;
  dragAndDropTsCode = `
  import { Component } from '@angular/core';
  import {
    CdkDragDrop,
    moveItemInArray,
    transferArrayItem,
  } from '@angular/cdk/drag-drop';

  @Component({
    selector: 'drag-and-drop-component',
    templateUrl: './drag-and-drop-component.html'
  })
  export class DragAndDropComponent {
    // Data required to drag and drop the box/element
    userDetails = [
      {username: 'nimish.yash', name: 'Nimish'},
      {username: 'kumar.yash', name: 'Raj Kumar'},
    ]
  }
  `;

  constructor(
    private authService: AuthService,
    private mocksApiService: mocksService
  ) {}

  ngOnInit(): void {
    this.loading = true;

    this.loading = false;
    this.mocksApiService.getUserList().subscribe((response) => {
      this.USERSDATA = response?.data[0].attributes.users.filter((res: any) => {
        if (res.role.type === 'admin') {
          return res;
        }
      });
      this.personaldetails = this.USERSDATA;
    });
  }


  // Drop method for example 1
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next(0);
    this.unsubscribe.complete();
  }
}
