import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/calendar/calendar/calendar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { Calendarexample3Component } from './calendarexample3.component';

describe('Calendarexample3Component', () => {
  let component: Calendarexample3Component;
  let fixture: ComponentFixture<Calendarexample3Component>;
  let formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        
      ],
      declarations: [ Calendarexample3Component,CalendarComponent ],
      providers:[
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calendarexample3Component);
    component = fixture.componentInstance;
    component.calendarForm = formBuilder.group({
      startDate: [null, [Validators.required]], //
      endDate: [null, [Validators.required]]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('onFormSubmit button', () => {
    let event:any
   let submitButton = jest.spyOn(component, 'onFormSubmit')
   component.onFormSubmit(event);
   expect(submitButton).toHaveBeenCalled()
  });

  it('onStartDateChange check', () => {
    let event:any = new Date();
    let submitButton = jest.spyOn(component, 'onStartDateChange')
    component.onStartDateChange(event);
    expect(submitButton).toHaveBeenCalled()
  });
  it('onStartDateChange if condition check', () => {
    let event:any = new Date();
    let submitButton = jest.spyOn(component, 'onStartDateChange')
    component.onStartDateChange(event);
    if(component.endDateDetail?.value < event){
      component.endDateDetail?.reset()
    }


    expect(submitButton).toHaveBeenCalled()
  });
});
