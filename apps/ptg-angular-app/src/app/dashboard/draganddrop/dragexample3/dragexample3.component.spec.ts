import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dragexample3Component } from './dragexample3.component';

describe('Dragexample3Component', () => {
  let component: Dragexample3Component;
  let fixture: ComponentFixture<Dragexample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragexample3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Dragexample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct todo and done data', () => {
    expect(component.todoData).toEqual(['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']);
    expect(component.doneData).toEqual(['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']);
  });
});