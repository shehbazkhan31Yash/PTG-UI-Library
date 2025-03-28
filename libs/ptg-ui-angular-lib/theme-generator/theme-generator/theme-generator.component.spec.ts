import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeGeneratorComponent } from './theme-generator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

describe('ThemeGeneratorComponent', () => {
  let component: ThemeGeneratorComponent;
  let fixture: ComponentFixture<ThemeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeGeneratorComponent],
      imports: [ReactiveFormsModule, MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.colorpaletteForm).toBeDefined();
    expect(component.colorpaletteForm.controls['navHeader']).toBeDefined();
  });

  it('should emit themeSettings on form value changes', () => {
    spyOn(component.themeSettings, 'emit');
    component.colorpaletteForm.controls['navHeader'].get('navHeaderBackground')?.setValue('blue');
    expect(component.themeSettings.emit).toHaveBeenCalledWith(component.colorpaletteForm.value);
  });

  it('should log form value on applyThemeChanges', () => {
    spyOn(console, 'log');
    component.applyThemeChanges();
    expect(console.log).toHaveBeenCalledWith(component.colorpaletteForm.value);
  });

  it('should open dialog with correct data on generateFinalJSON', () => {
    spyOn(component.dialog, 'open');
    component.generateFinalJSON();
    expect(component.dialog.open).toHaveBeenCalledWith(jasmine.any(Function), {
      data: { themeSettingValues: component.colorpaletteForm.value }
    });
  });
});