import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CalendarexampleComponent } from './calendarexample.component';
import { Calendarexample1Component } from './calendarexample1/calendarexample1.component';
import { Calendarexample2Component } from './calendarexample2/calendarexample2.component';
import { Calendarexample3Component } from './calendarexample3/calendarexample3.component';
import { Calendarexample4Component } from './calendarexample4/calendarexample4.component';

describe('CalendarexampleComponent', () => {
  let component: CalendarexampleComponent;
  let fixture: ComponentFixture<CalendarexampleComponent>;
  let formBuilder: FormBuilder = new FormBuilder();
  let cdr:ChangeDetectorRef
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        TranslateModule.forRoot({}), 
      ],
      declarations: [ CalendarexampleComponent, Calendarexample1Component, Calendarexample2Component, Calendarexample3Component, Calendarexample4Component ],
      providers:[ { provide: FormBuilder, useValue: formBuilder }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
