import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dragexample2Component } from './dragexample2.component';

describe('Dragexample2Component', () => {
  let component: Dragexample2Component;
  let fixture: ComponentFixture<Dragexample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragexample2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Dragexample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with loading set to true', () => {
    expect(component.loading).toBeTrue();
  });

  it('should generate 4 items on ngOnInit', () => {
    component.ngOnInit();
    expect(component.items.length).toBe(4);
    expect(component.items).toEqual(['Item1', 'Item2', 'Item3', 'Item4']);
    expect(component.loading).toBeFalse();
  });
});