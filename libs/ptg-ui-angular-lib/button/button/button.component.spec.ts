import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default type as "button"', () => {
    expect(component.type).toBe('button');
  });

  it('should emit buttonClick event when clicked and not disabled', () => {
    component.isDisable = false;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(component.buttonClick.emit).toHaveBeenCalled();
  });

  it('should not emit buttonClick event when clicked and disabled', () => {
    spyOn(component.buttonClick, 'emit');
    component.isDisable = true;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(component.buttonClick.emit).not.toHaveBeenCalled();
  });

  it('should apply correct classes based on inputs', () => {
    component.btnStyleType = 'success';
    component.size = 'large';
    component.isBlock = true;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    const classes = button.nativeElement.classList;

    expect(classes).toContain('ptg-ui-button--success');
    expect(classes).toContain('ptg-ui-button--large');
    expect(classes).toContain('ptg-ui-button--block');
  });

  it('should apply disabled class when isDisable is true', () => {
    component.isDisable = true;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    const classes = button.nativeElement.classList;

    expect(classes).toContain('ptg-ui-button--disabled');
  });
});