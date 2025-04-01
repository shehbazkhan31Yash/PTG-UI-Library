
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dragexample2Component } from './dragexample2.component';
import { By } from '@angular/platform-browser';

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

  it('should initialize with 4 items', () => {
    expect(component.items.length).toBe(4);
    expect(component.items).toEqual(['Item1', 'Item2', 'Item3', 'Item4']);
  });

  it('should allow dragging and dropping items', () => {
    // Simulate drag start on the first item
    const dragStartEvent = new DragEvent('dragstart', {
      dataTransfer: new DataTransfer(),
    });
    const firstItem = fixture.debugElement.query(By.css('li[data-index="0"]'));
    firstItem.nativeElement.dispatchEvent(dragStartEvent);

    // Simulate drop on the second item
    const dropEvent = new DragEvent('drop', {
      dataTransfer: dragStartEvent.dataTransfer,
    });
    const secondItem = fixture.debugElement.query(By.css('li[data-index="1"]'));
    secondItem.nativeElement.dispatchEvent(dropEvent);

    // Check if the items have been rearranged
    fixture.detectChanges();
    expect(component.items).toEqual(['Item2', 'Item1', 'Item3', 'Item4']);
  });

  it('should allow drop event to be prevented', () => {
    const allowDropEvent = new DragEvent('dragover');
    const secondItem = fixture.debugElement.query(By.css('li[data-index="1"]'));
    secondItem.nativeElement.dispatchEvent(allowDropEvent);

    // Check if the allowDrop method is called
    expect(component.allowDrop).toHaveBeenCalled();
  });
});