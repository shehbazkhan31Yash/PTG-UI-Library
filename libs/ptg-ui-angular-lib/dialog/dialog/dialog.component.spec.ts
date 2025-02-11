import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on closed button',fakeAsync(()=>{
    const spyCloseDialog = jest.spyOn(component, 'onClosed');
    component.closeAlert.emit(null);

    component.onClosed();
    tick(50);
    expect(spyCloseDialog).toHaveBeenCalledTimes(1);
  }));
});
