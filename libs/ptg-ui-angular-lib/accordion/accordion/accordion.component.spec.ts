import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent]
    }).compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle item open state', () => {
    component.listData = [
      { title: 'Item 1', description: 'Description 1', isOpen: false },
      { title: 'Item 2', description: 'Description 2', isOpen: false }
    ];
    fixture.detectChanges();

    component.toggleItem(0);
    expect(component.listData[0].isOpen).toBe(true);
    component.toggleItem(0);
    expect(component.listData[0].isOpen).toBeFalsy();
  });

  it('should close other items when oneAtATime is true', () => {
    component.oneAtATime = true;
    component.listData = [
      { title: 'Item 1', description: 'Description 1', isOpen: false },
      { title: 'Item 2', description: 'Description 2', isOpen: true }
    ];
    fixture.detectChanges();

    component.toggleItem(0);
    expect(component.listData[0].isOpen).toBe(true);
    expect(component.listData[1].isOpen).toBeFalsy();
  });

  it('should emit handleChange event on toggle', () => {
    spyOn(component.handleChange, 'emit');
    component.listData = [
      { title: 'Item 1', description: 'Description 1', isOpen: false }
    ];
    fixture.detectChanges();

    component.toggleItem(0);
    expect(component.handleChange.emit).toHaveBeenCalledWith({ index: 0, isOpen: true });
  });

  it('should apply correct classes based on inputs', () => {
    component.isAnimated = true;
    component.oneAtATime = true;
    fixture.detectChanges();

    const classes = component.classes;
    expect(classes).toContain('isAnimated');
    expect(classes).toContain('oneAtATime');
  });
})