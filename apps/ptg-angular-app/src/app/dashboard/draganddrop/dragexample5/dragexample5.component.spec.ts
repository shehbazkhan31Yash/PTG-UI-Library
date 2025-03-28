
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dragexample5Component } from './dragexample5.component';
 
describe('Dragexample5Component', () => {
  let component: Dragexample5Component;
  let fixture: ComponentFixture<Dragexample5Component>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragexample5Component],
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(Dragexample5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
 
  it('should initialize grid items with 6 elements', () => {
    expect(component.gridItems.length).toBe(6);
    expect(component.gridItems).toEqual(['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6']);
  });
 
  it('should generate grid items dynamically', () => {
    component.generateGridItems(4);
    expect(component.gridItems.length).toBe(4);
    expect(component.gridItems).toEqual(['Item1', 'Item2', 'Item3', 'Item4']);
  });
 
  it('should set grid items correctly', () => {
    component.setGridItems(3);
    expect(component.gridItems.length).toBe(3);
    expect(component.gridItems).toEqual(['Item1', 'Item2', 'Item3']);
  });
 
  it('should handle drag start event', () => {
    const event = new DragEvent('dragstart', {
      dataTransfer: new DataTransfer(),
    });
 
    component.onGridDragStart(event, 2);
    expect(event.dataTransfer?.getData('text/plain')).toBe('2');
  });
 
  it('should allow drop event', () => {
    const event = new DragEvent('dragover');
    spyOn(event, 'preventDefault');
 
    component.allowDrop(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
 
  it('should handle grid drop event and rearrange items', () => {
    component.gridItems = ['Item1', 'Item2', 'Item3', 'Item4'];
 
    const event = new DragEvent('drop', {
      dataTransfer: new DataTransfer(),
    });
    event.dataTransfer?.setData('text/plain', '0'); // Moving 'Item1'
 
    // Mock target element and assign it to event.currentTarget
    Object.defineProperty(event, 'currentTarget', {
      writable: true,
      value: {
        getAttribute: () => '2', // Mock dropping at index 2
      },
    });
 
    component.onGridDrop(event);
 
    expect(component.gridItems).toEqual(['Item2', 'Item3', 'Item1', 'Item4']);
  });
});