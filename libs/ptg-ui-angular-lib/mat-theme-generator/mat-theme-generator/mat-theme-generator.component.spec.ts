import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatThemeGeneratorComponent } from './mat-theme-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatThemeService } from './mat-theme-services/mat-theme.service';

describe('MatThemeGeneratorComponent', () => {
  let component: MatThemeGeneratorComponent;
  let fixture: ComponentFixture<MatThemeGeneratorComponent>;
  let themeService: MatThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatThemeGeneratorComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: MatThemeService,
          useValue: {
            savePrimaryColor: jasmine.createSpy('savePrimaryColor'),
            saveAccentColor: jasmine.createSpy('saveAccentColor')
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatThemeGeneratorComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(MatThemeService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.themeColorsGroup).toBeDefined();
    expect(component.themeColorsGroup.controls['primary']).toBeDefined();
    expect(component.themeColorsGroup.controls['accent']).toBeDefined();
  });

  it('should call themeService methods on form submit', () => {
    component.themeColorsGroup.controls['primary'].setValue('blue');
    component.themeColorsGroup.controls['accent'].setValue('green');
    component.onFormSubmit();
    expect(themeService.savePrimaryColor).toHaveBeenCalledWith('blue');
    expect(themeService.saveAccentColor).toHaveBeenCalledWith('green');
  });
});