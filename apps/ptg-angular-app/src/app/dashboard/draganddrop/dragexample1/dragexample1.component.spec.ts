import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dragexample1Component } from './dragexample1.component';

describe('Dragexample1Component', () => {
  let component: Dragexample1Component;
  let fixture: ComponentFixture<Dragexample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragexample1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Dragexample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with 4 items', () => {
    expect(component.items.length).toBe(4);
    expect(component.items).toEqual([
      { name: 'Item 1', value: 1 },
      { name: 'Item 2', value: 2 },
      { name: 'Item 3', value: 3 },
      { name: 'Item 4', value: 4 },
    ]);
  });

  it('should set dragIndex on drag start', () => {
    component.onDragStart(2);
    expect(component.dragIndex).toBe(2);
  });

  it('should not change items on drop if dragIndex is null', () => {
    component.dragIndex = null;
    component.onDrop(1);
    expect(component.items).toEqual([
      { name: 'Item 1', value: 1 },
      { name: 'Item 2', value: 2 },
      { name: 'Item 3', value: 3 },
      { name: 'Item 4', value: 4 },
    ]);
  });

  it('should move item on drop', () => {
    component.onDragStart(0); // Start dragging the first item
    component.onDrop(2); // Drop it at index 2
    expect(component.items).toEqual([
      { name: 'Item 2', value: 2 },
      { name: 'Item 3', value: 3 },
      { name: 'Item 1', value: 1 },
      { name: 'Item 4', value: 4 },
    ]);
  });

  it('should reset dragIndex after drop', () => {
    component.onDragStart(1); // Start dragging the second item
    component.onDrop(3); // Drop it at index 3
    expect(component.dragIndex).toBeNull();
  });
});