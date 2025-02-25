import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/calendar/calendar/calendar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { Calendarexample1Component } from './calendarexample1.component';

describe('Calendarexample1Component', () => {
  let component: Calendarexample1Component;
  let fixture: ComponentFixture<Calendarexample1Component>;
  let formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        
      ],
      declarations: [ Calendarexample1Component, CalendarComponent ],
      providers:[
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calendarexample1Component);
    component = fixture.componentInstance;
    component.calendarForm = formBuilder.group({
      startDate: [null, [Validators.required]], //
      endDate: [null, [Validators.required]],
      calendar1Value: [null, [Validators.required]],
      calendar2Value: [null, Validators.required]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should get controls', ()=>{
    expect(component.f).toBeTruthy;
  })

  it('Should get endDateDetail', ()=>{
    expect(component.endDateDetail).toBeTruthy;
    
  })
  it('Should get onFormSubmit', ()=>{
    let event:any;
    let submitBtn = jest.spyOn(component, 'onFormSubmit');
    component.onFormSubmit(event);
    expect(submitBtn).toHaveBeenCalled()

  })

  it('onStartDateChange button', ()=>{
    let event:any
    let date = jest.spyOn(component, 'onStartDateChange');
    component.onStartDateChange(event);
    expect(date).toHaveBeenCalled()
  })
})
