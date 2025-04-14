/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-calendarexample3;
 * @description This component for calendarexample3
**/

import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { resources } from "../../../../resource/resource";


@Component({
  selector: 'ptg-ui-calendarexample3',
  templateUrl: './calendarexample3.component.html',
  styleUrls: ['./calendarexample3.component.scss']
})
export class Calendarexample3Component implements OnInit, AfterViewInit {
  calendarForm!: FormGroup;
  startDate!:any;
  endDate!:any;
  endMinDate!:any;
  minDate = new Date();
  isDisabled = true;
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
      endDate: [null, [Validators.required]]
    });
  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }
  onStartDateChange(event:any){
    
    if(event){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
    this.startDate = event;
    this.endMinDate = event;
    
    if(this.endDateDetail?.value < event){
      this.endDateDetail?.reset();
    }
    const calendar1Control = this.f['calendar1Value'];
    if(calendar1Control?.value < event){
      calendar1Control?.reset();
    }
  }

  onEndDateChange(event:any){
    this.endDate = event;
    const calendar1Control = this.f['calendar1Value'];
    
    if(calendar1Control?.value > event){
      calendar1Control?.reset();
    }
  }

  onFormSubmit(event:any){

  }

}
