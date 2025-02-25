import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on closed handleKeyDown', fakeAsync(() => {
    const event = new KeyboardEvent('keydown', {'keyCode': 13,'which':13});
    document.dispatchEvent(event);
    const spyCloseDialog = jest.spyOn(component, 'handleKeyDown');
    component.handleKeyDown(event)
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));

  it('on closed handleKeyDown with default value', fakeAsync(() => {
     const event = new KeyboardEvent('keydown', {'keyCode': 0,'which':0});
     document.dispatchEvent(event);
     const spyCloseDialog = jest.spyOn(component, 'handleKeyDown');
     component.handleKeyDown(event)
     const button = fixture.debugElement.nativeElement.querySelector('button');
     button.click();
     fixture.detectChanges();
     expect(spyCloseDialog).toHaveBeenCalledTimes(1);
   }));
});



