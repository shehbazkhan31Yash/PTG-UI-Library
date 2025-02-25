/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-calendarexample2;
 * @description This component for calendarexample2
**/

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { calendarValidator } from '@ptg-angular-app/common/utils/validators';
import { resources } from "../../../../resource/resource";

@Component({
  selector: 'ptg-ui-calendarexample2',
  templateUrl: './calendarexample2.component.html',
  styleUrls: ['./calendarexample2.component.scss']
})
export class Calendarexample2Component implements OnInit {
  calendarForm!: FormGroup;
  startDate!:any;
  endDate!:any;
  endMinDate!:any;
  resources=resources

  get f() {
    return this.calendarForm.controls;
  }

  get endDateDetail() {
    return this.calendarForm.get('endDate');
  }

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.calendarForm = this.formBuilder.group({
      startDate: [null, [Validators.required]], 
      endDate: [null, [Validators.required]],
      calendar1Value: [null, [Validators.required]],
      calendar2Value: [null, Validators.required]
    },{
      validators: calendarValidator("startDate","endDate", "calendar2Value")
    });
  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  onDateChange(event:any){

  }

  onFormSubmit(event:any){

  }

}
