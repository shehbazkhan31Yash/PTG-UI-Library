import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dragexample3Component } from './dragexample3.component';
import { By } from '@angular/platform-browser';

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

  it('should initialize with correct todo and done items', () => {
    expect(component.todoData).toEqual(['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']);
    expect(component.doneData).toEqual(['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']);
  });

  it('should allow dragging and dropping items within the same list', () => {
    const dragStartEvent = new DragEvent('dragstart', {
      dataTransfer: new DataTransfer(),
    });
    const firstTodoItem = fixture.debugElement.query(By.css('div.list-group-item:nth-child(1)'));
    firstTodoItem.nativeElement.dispatchEvent(dragStartEvent);
    const dropEvent = new DragEvent('drop', {
      dataTransfer: dragStartEvent.dataTransfer,
    });
    const secondTodoItem = fixture.debugElement.query(By.css('div.list-group-item:nth-child(2)'));
    secondTodoItem.nativeElement.dispatchEvent(dropEvent);
    fixture.detectChanges();
    expect(component.todoData).toEqual(['Pick up groceries', 'Get to work', 'Go home', 'Fall asleep']);
  });

  it('should allow dragging and dropping items between lists', () => {
    const dragStartEvent = new DragEvent('dragstart', {
      dataTransfer: new DataTransfer(),
    });
    const firstTodoItem = fixture.debugElement.query(By.css('div.list-group-item:nth-child(1)'));
    firstTodoItem.nativeElement.dispatchEvent(dragStartEvent);
    const dropEvent = new DragEvent('drop', {
      dataTransfer: dragStartEvent.dataTransfer,
    });
    const firstDoneItem = fixture.debugElement.query(By.css('div.list-group-item:nth-child(1)'));
    firstDoneItem.nativeElement.dispatchEvent(dropEvent);
    fixture.detectChanges();
    expect(component.todoData).toEqual(['Pick up groceries', 'Go home', 'Fall asleep']);
    expect(component.doneData).toEqual(['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog', 'Get to work']);
  });

  it('should prevent default behavior on drag over', () => {
    const dragOverEvent = new DragEvent('dragover');
    const todoList = fixture.debugElement.query(By.css('.list-group.mt-5'));
    todoList.nativeElement.dispatchEvent(dragOverEvent);
    expect(component.onDragOver).toHaveBeenCalled();
  });
});