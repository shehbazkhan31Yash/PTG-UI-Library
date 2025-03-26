import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatThemeService } from './mat-theme.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import tinycolor from 'tinycolor2';
import { Color } from '../interface';

describe('MatThemeService', () => {
  let service: MatThemeService;
  let httpMock: HttpTestingController;
  let activatedRouteStub: Partial<ActivatedRoute>;

  beforeEach(() => {
    activatedRouteStub = {
      queryParams: of({ theme: 'dark' })
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MatThemeService,
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });

    service = TestBed.inject(MatThemeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get query parameters from route', () => {
    const params = service.getQueryParamsFromRoute();
    expect(params).toEqual({ theme: 'dark' });
  });

  it('should get active theme', () => {
    const activeTheme = service.getActiveTheme();
    expect(activeTheme).toBe('#44474e');
  });

  it('should save primary color and update theme', () => {
    spyOn(service, 'updateColorTheme');
    const color = '#ff0000';
    service.savePrimaryColor(color);
    expect(service.primaryColorPallate.length).toBeGreaterThan(0);
    expect(service.updateColorTheme).toHaveBeenCalledWith(service.primaryColorPallate, 'primary');
  });

  it('should save accent color and update theme', () => {
    spyOn(service, 'updateColorTheme');
    const color = '#00ff00';
    service.saveAccentColor(color);
    expect(service.accentColorPallate.length).toBeGreaterThan(0);
    expect(service.updateColorTheme).toHaveBeenCalledWith(service.accentColorPallate, 'accent');
  });

  it('should update color theme', () => {
    const colors: Color[] = [
      { name: '500', hex: '#ff0000', darkContrast: true }
    ];
    spyOn(document.documentElement.style, 'setProperty');
    service.updateColorTheme(colors, 'primary');
    expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--theme-primary-500', '#ff0000');
    expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--theme-primary-contrast-500', 'rgba(black, 0.87)');
  });
});
