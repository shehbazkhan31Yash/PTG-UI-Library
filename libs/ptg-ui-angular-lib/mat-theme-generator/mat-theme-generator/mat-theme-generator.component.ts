/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-cards;
 * @description This component for card
 **/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatThemeService } from './mat-theme-services/mat-theme.service';

@Component({
  selector: 'ptg-ui-mat-theme-generator',
  templateUrl: './mat-theme-generator.component.html',
  styleUrls: ['./mat-theme-generator.component.scss']
})

export class MatThemeGeneratorComponent implements OnInit {

  routeToDealerForm!: FormGroup;
  dealersList: string[] = [];
  dealersWithThemeColors: any = null;
  themeColorsGroup!: FormGroup;
  constructor(readonly themeService: MatThemeService, readonly fb: FormBuilder) {

  }

  ngOnInit() {
    console.log('Dealro home')
    this.themeColorsGroup = this.fb.group({
      primary: [''],
      accent: ['']
    })
  }

  onFormSubmit() {
    console.log('formdata', this.themeColorsGroup.value);
    this.themeService.savePrimaryColor(this.themeColorsGroup.value?.primary);
    this.themeService.saveAccentColor(this.themeColorsGroup.value?.accent);
  }



}

