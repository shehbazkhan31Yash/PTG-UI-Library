/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @validator ;
 * @description This file for custom Validation
**/

import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";


// custom validator for Confirm Password
export function ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName]
      if (
        matchingControl.errors &&
        !matchingControl.errors["confirmPasswordValidator"]
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  // custom validator for Calendar
  export function calendarValidator(startDateKey: string, endDateKey: string, matchingControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as any;
      const control1 = formGroup.controls[startDateKey];
      const control2 = formGroup.controls[endDateKey];
      const matchingControl = formGroup.controls[matchingControlName];
  
      if (!control1?.value && !control2?.value) {
        return null;
      }
  
      if (!matchingControl.value) {
        matchingControl.setErrors({ calendarValidator: true });
        return { calendarValidator: true };
      }
  
      if (control1?.value > matchingControl.value || control2?.value < matchingControl.value) {
        matchingControl.setErrors({ calendarValidator: true });
        return { calendarValidator: true };
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }

