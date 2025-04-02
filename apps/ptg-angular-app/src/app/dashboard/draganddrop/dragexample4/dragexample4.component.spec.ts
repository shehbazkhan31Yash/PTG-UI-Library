
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dragexample4Component } from './dragexample4.component';
import { ReactiveFormsModule } from '@angular/forms';

 
describe('Dragexample4Component', () => {
  let component: Dragexample4Component;
  let fixture: ComponentFixture<Dragexample4Component>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dragexample4Component],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(Dragexample4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
 
  it('should initialize an empty form array', () => {
    expect(component.collectionArray.length).toBe(0);
  });
 
  it('should add a new collection group', () => {
    component.addManual();
    expect(component.collectionArray.length).toBe(1);
expect(component.collectionArray.at(0).value).toEqual({ key: '' });
  });
 
  it('should delete a collection item', () => {
    component.addManual();
    component.addManual();
    expect(component.collectionArray.length).toBe(2);
    component.deleteCollection(0);
    expect(component.collectionArray.length).toBe(1);
  });
 
  it('should reset a collection item', () => {
    component.addManual();
component.collectionArray.at(0).patchValue({ key: 'TestValue' });
expect(component.collectionArray.at(0).value.key).toBe('TestValue');
    component.resetCollection(0);
expect(component.collectionArray.at(0).value.key).toBe('');
  });
 
  it('should handle drag start event', () => {
    component.onDragStart(2);
    expect(component.draggingIndex).toBe(2);
  });
 
  it('should allow drag over event', () => {
    const event = new DragEvent('dragover');
    spyOn(event, 'preventDefault');
    component.onDragOver(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
 
  it('should move item on drop event', () => {
    component.addManual();
    component.addManual();
    component.addManual();
component.collectionArray.at(0).patchValue({ key: 'Item1' });
component.collectionArray.at(1).patchValue({ key: 'Item2' });
component.collectionArray.at(2).patchValue({ key: 'Item3' });
 
    component.onDragStart(0);
    component.onDrop(2);
 
expect(component.collectionArray.at(0).value.key).toBe('Item2');
expect(component.collectionArray.at(1).value.key).toBe('Item3');
expect(component.collectionArray.at(2).value.key).toBe('Item1');
  });
});


