/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-theme generator-example ;
 * @description This component for theme generator
**/

import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'ptg-ui-theme-generator-example',
  templateUrl: './theme-generator.component.html',
  styleUrls: ['./theme-generator.component.scss']
})
export class ThemeGeneratorComponent implements OnInit {
  htmlCode = `
  <ptg-ui-theme-generator (themeSettings)="recieveThemeSettings($event)"></ptg-ui-theme-generator>`;

  tsCode = `
    import { Component } from '@angular/core';
    @Component({
      selector: 'ptg-ui-theme-generator-example',
      templateUrl: './theme-generator.component.html',
      styleUrls: ['./theme-generator.component.scss']
    })
    export class ThemeGeneratorComponent {
     themesettingsValues: any;
       recieveThemeSettings(event: any) {
         this.themesettingsValues = event;
        }
    }`;
  themesettingsValues: any;
  previousUrl = '';
  currentUrl = '';

  constructor(private router: Router) {
  }
  ngOnInit(): void {
    console.log(this.currentUrl, this.previousUrl)
  }

  recieveThemeSettings(event: any) {
    this.themesettingsValues = event;
  }

  backToPreviusRoute() {
    this.router.navigate(['/'], {
     
    })
  }

}

