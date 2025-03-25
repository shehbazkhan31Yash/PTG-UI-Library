import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, from, of } from 'rxjs';
import tinycolor from 'tinycolor2';
import { Color } from '../interface';
@Injectable({
  providedIn: 'root'
})
export class MatThemeService {

  private platformId = inject(PLATFORM_ID);
  queryParameters: any = {};
  private activeThemeSubject = new BehaviorSubject<string>('#44474e');
  activeTheme$ = this.activeThemeSubject.asObservable();
  // tinycolor: any
  primaryColorPallate: Color[] = [];
  accentColorPallate: Color[] = [];
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  getQueryParamsFromRoute() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.queryParameters = params;
    });
    return this.queryParameters;
  }

  // for only two colors
  getDealerTheme() {
    return this.http.get('/theme.json');
  }

  getActiveTheme(): string {
    return this.activeThemeSubject.value;
  }

  savePrimaryColor(color: string) {
    this.primaryColorPallate = this.computeThemeColor(color);
    this.updateColorTheme(this.primaryColorPallate, 'primary');
  }

  saveAccentColor(color: string) {
    this.accentColorPallate = this.computeThemeColor(color);
    this.updateColorTheme(this.accentColorPallate, 'accent');
  }

  // ======= MAT Theme =======
  computeThemeColor(hex: string) {
    return [
      this.getColorObject(tinycolor(hex).lighten(52), '50'),
      this.getColorObject(tinycolor(hex).lighten(37), '100'),
      this.getColorObject(tinycolor(hex).lighten(26), '200'),
      this.getColorObject(tinycolor(hex).lighten(12), '300'),
      this.getColorObject(tinycolor(hex).lighten(6), '400'),
      this.getColorObject(tinycolor(hex), '500'),
      this.getColorObject(tinycolor(hex).darken(6), '600'),
      this.getColorObject(tinycolor(hex).darken(12), '700'),
      this.getColorObject(tinycolor(hex).darken(18), '800'),
      this.getColorObject(tinycolor(hex).darken(24), '900'),
      this.getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'),
      this.getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'),
      this.getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'),
      this.getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')
    ]
  }

  getColorObject(value: any, name: string): any {
    const c = tinycolor(value)
    return {
      name: name,
      hex: c.toHexString(),
      darkContrast: c.isLight()
    };
  }

  updateColorTheme(colors: Color[], theme: string) {
    console.log(colors,"colors");
    if (isPlatformBrowser(this.platformId)) {
      const colorObservable = from(colors);
      colorObservable.subscribe(
        {
          next: (colorEle: Color) => {
            document.documentElement.style.setProperty(
              `--theme-${theme}-${colorEle?.name}`,
              colorEle?.hex
            );
            document.documentElement.style.setProperty(
              `--theme-${theme}-contrast-${colorEle?.name}`,
              colorEle?.darkContrast ? 'rgba(black, 0.87)' : 'white'
            );
          },
          error: (e) => {
            console.log('pallate setting error', e);
          },
          complete: () => {console.log("color completed") }
        }
      )
    }
  }

}
