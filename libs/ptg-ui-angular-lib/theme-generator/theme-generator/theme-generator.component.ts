/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-cards;
 * @description This component for card
 **/

import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';

import { DialogComponent } from '../dialog/dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ptg-ui-theme-generator',
  templateUrl: './theme-generator.component.html',
  styleUrls: ['./theme-generator.component.scss']
})

export class ThemeGeneratorComponent implements OnInit {

  colorpaletteForm!: FormGroup;
  navBack = 'red';
  readonly dialog = inject(MatDialog);
  // @Input() themeValueJSON = this.colorpaletteForm.value;
  @Output() themeSettings = new EventEmitter<any>();

  constructor(readonly fb: FormBuilder) { }
  ngOnInit(): void {
    this.colorpaletteForm = this.fb.group({
      navHeader: this.fb.group({
        navHeaderBackground: [''],
        navHeaderFont: [''],
      }),
      sideBar: this.fb.group({
        background: [''],
        tabBackground: [''],
        tabFontColor: [''],
        otherFontColor: ['']
      }),
      contentLayout: this.fb.group({
        layoutBackground: [''],
        layoutHeading: [''],
        layoutSubHeading: [''],
        layoutContent: ['']
      }),
      primaryButton: this.fb.group({
        background: [''],
        fontColor: ['']
      }),
      secondaryButton: this.fb.group({
        background: [''],
        fontColor: ['']
      }),
      infoButton: this.fb.group({
        background: [''],
        fontColor: ['']
      }),
      warningButton: this.fb.group({
        background: [''],
        fontColor: ['']
      }),
      dangerButton: this.fb.group({
        background: [''],
        fontColor: ['']
      })
    })

    this.colorpaletteForm.valueChanges.subscribe((values) => {
      this.themeSettings.emit(values);
    })
  }
  applyThemeChanges() {
    console.log(this.colorpaletteForm.value);
  }

  generateFinalJSON() {
    this.dialog.open(DialogComponent, {
      data: {
        themeSettingValues: this.colorpaletteForm.value
      }
    });
    console.log(JSON.stringify(this.colorpaletteForm.value, null, 2));
  }
}

