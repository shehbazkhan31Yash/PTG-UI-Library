import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatThemeGeneratorComponent } from './mat-theme-generator.component';

describe('MatThemeGeneratorComponent', () => {
  let component: MatThemeGeneratorComponent;
  let fixture: ComponentFixture<MatThemeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatThemeGeneratorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatThemeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});



