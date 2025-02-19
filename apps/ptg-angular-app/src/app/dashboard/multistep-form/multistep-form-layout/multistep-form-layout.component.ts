import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';
import { ConfirmPasswordValidator } from '@ptg-angular-app/common/utils/validators';


@Component({
  selector: 'ptg-ui-multistep-form-layout',
  templateUrl: './multistep-form-layout.component.html',
  styleUrls: ['./multistep-form-layout.component.scss'],
})
export class MultistepFormLayoutComponent {
  htmlCode = `
  <ptg-ui-stepper [steps]="stepLabels" [formGroups]="[formGroup1, formGroup2, formGroup3]" (formReset)="onReset()"
        (formSubmit)="onSubmit()">
            <ng-template>Your form group1 template</ng-template>
             <ng-template>Your form group2 template</ng-template>
              <ng-template>Your form group3 template</ng-template></ptg-ui-stepper>
  `;
  tsCode = `
  import { Component } from '@angular/core';

  @Component({
  selector: 'ptg-ui-multistep-form-layout',
  templateUrl: './multistep-form-layout.component.html',
  styleUrls: ['./multistep-form-layout.component.scss'],
  })
  
  export class MultistepFormLayoutComponent {
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  titleArray = ['Mr', 'Mrs', 'Ms'];
  genderList = ['Male', 'Female', 'Other'];
  stateList = ['State1', 'State2', 'State3'];
  countryList = ['Country1', 'Country2', 'Country3'];
  submitted2 = false;
  cardList = ['Visa', 'MasterCard', 'American Express'];
  expMonthList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  stepLabels = ['Account Info', 'Personal Information', 'Payment Details'
  constructor(private fb: FormBuilder) {

    this.formGroup1 = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]]
    }, { validators: ConfirmPasswordValidator('password', 'confirm'), });


    this.formGroup2 = this.fb.group({
      title: [null, [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: [
        '',
        [
          Validators.required,
          Validators.pattern('[- +()0-9]{10,12}'),
          Validators.maxLength(10),
        ],
      ],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      state: [null, [Validators.required]],
      address: ['', [Validators.required]],
      country: [null, [Validators.required]],
    });

    this.formGroup3 = this.fb.group({
      cardType: ['', Validators.required],
      cardNo: ['', Validators.required],
      cvv: ['', Validators.required],
      name: ['', Validators.required],
      expMonth: ['', Validators.required],
      expyear: ['', Validators.required]
    });
  }
    onSubmit(): void {}
    onReset(): void {}
  }
  `;
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  submitted = false;
  submitted1 = false;
  titleArray = ['Mr', 'Mrs', 'Ms'];
  genderList = ['Male', 'Female', 'Other'];
  stateList = ['State1', 'State2', 'State3'];
  countryList = ['Country1', 'Country2', 'Country3'];
  submitted2 = false;
  cardList = ['Visa', 'MasterCard', 'American Express'];
  expMonthList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  stepLabels = ['Account Info', 'Personal Information', 'Payment Details'];
  constructor(private fb: FormBuilder) {

    this.formGroup1 = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]]
    }, { validators: ConfirmPasswordValidator('password', 'confirm'), });


    this.formGroup2 = this.fb.group({
      title: [null, [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: [
        '',
        [
          Validators.required,
          Validators.pattern('[- +()0-9]{10,12}'),
          Validators.maxLength(10),
        ],
      ],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      state: [null, [Validators.required]],
      address: ['', [Validators.required]],
      country: [null, [Validators.required]],
    });

    this.formGroup3 = this.fb.group({
      cardType: ['', Validators.required],
      cardNo: ['', Validators.required],
      cvv: ['', Validators.required],
      name: ['', Validators.required],
      expMonth: ['', Validators.required],
      expyear: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formGroup1.valid && this.formGroup2.valid && this.formGroup3.valid) {
      const formData = {
        ...this.formGroup1.value,
        ...this.formGroup2.value,
        ...this.formGroup3.value
      };
      console.log('Form Submitted', formData);
    }
  }

  onReset(): void {
    this.submitted = false;
    this.submitted1 = false;
    this.submitted2 = false;
  }
}

