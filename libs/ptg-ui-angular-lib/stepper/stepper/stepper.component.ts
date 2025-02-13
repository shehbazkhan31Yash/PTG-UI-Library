/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-stepper;
 * @description This component for stepper
 **/


import { Component, ContentChildren, QueryList, TemplateRef, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ptg-ui-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent implements AfterContentInit {
  @ContentChildren(TemplateRef) stepTemplates!: QueryList<TemplateRef<any>>;
  @Input() orientation?: string = '';
  @Input() formGroups: FormGroup[] = [];
  @Output() formSubmit = new EventEmitter<void>();
  @Output() formReset = new EventEmitter<void>();
  @Input() steps: string[] = [];
  currentStep = 0;

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  ngAfterContentInit(): void {
    if (!this.stepTemplates) {
      this.stepTemplates = new QueryList<TemplateRef<any>>();
    }
  }

  nextStep(): void {
    if (this.formGroups[this.currentStep].valid) {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      } else {
        this.formSubmit.emit();
      }
    } else {
      this.formGroups[this.currentStep].markAllAsTouched();
      console.log('', this.formGroups[this.currentStep])
    }
  }
  resetForm(): void {
    this.formGroups.forEach(item => {
      item.reset();
    });
    this.currentStep = 0;
    this.formReset.emit();
  }
}

