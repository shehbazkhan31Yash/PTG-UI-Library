import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ThemeGeneratorComponent } from './theme-generator.component';

describe('ThemeGeneratorComponent', () => {
  let component: ThemeGeneratorComponent;
  let fixture: ComponentFixture<ThemeGeneratorComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule.forRoot(),

      ],
      declarations: [ThemeGeneratorComponent],
      providers: [
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeGeneratorComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


})
