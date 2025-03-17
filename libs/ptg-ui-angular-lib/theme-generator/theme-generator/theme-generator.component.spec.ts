import { ComponentFixture, TestBed } from '@angular/core/testing';

import { themeGeneratorComponent } from './theme-generator.component';

describe('themeGeneratorComponent', () => {
  let component: themeGeneratorComponent;
  let fixture: ComponentFixture<themeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [themeGeneratorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(themeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});



