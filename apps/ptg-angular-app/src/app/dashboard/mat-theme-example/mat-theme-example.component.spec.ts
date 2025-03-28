import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatThemeExampleComponent } from './mat-theme-example.component';

describe('MatThemeExampleComponent', () => {
  let component: MatThemeExampleComponent;
  let fixture: ComponentFixture<MatThemeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatThemeExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatThemeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
