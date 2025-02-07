import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';
import { ConfirmPasswordValidator } from '@ptg-angular-app/common/utils/validators';


@Component({
  selector: 'ptg-ui-multistep-form-layout',
  templateUrl: './multistep-form-layout.component.html',
  styleUrls: ['./multistep-form-layout.component.scss'],
})
export class MultistepFormLayoutComponent {
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
  stepLabels = ['Account Info','Personal Information','Payment Details' 
   
  ];
  formGroups:FormGroup[];
  constructor(private fb: FormBuilder) {
    this.formGroups=[
      this.fb.group({
        name: ['', Validators.required],
      }),
      this.fb.group({
        address: ['', Validators.required],
      }),
      this.fb.group({
        confirmation: [false, Validators.requiredTrue],
      })
    ];
    this.formGroup1 = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required]
    }, { validator: this.confirmPasswordValidator });


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

  confirmPasswordValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;
    return password === confirm ? null : { confirmPasswordValidator: true };
  }
  onSubmit() {
    if (this.formGroup1.valid && this.formGroup2.valid && this.formGroup3.valid) {
      const formData = {
        ...this.formGroup1.value,
        ...this.formGroup2.value,
        ...this.formGroup3.value
      };
      console.log('Form Submitted', formData);
    }
  }
}

//   cardList: any = [];
//   countryList: any = [];
//   genderList: any = [];
//   stateList: any = [];
//   titleArray: any = [];
//   expMonthList: any = [];
//   myForm: Array<string> | any;
//   firstFormGroup!: FormGroup;
//   secondFormGroup!: FormGroup;
//   thirdFormGroup!: FormGroup;
//   submitted = false;
//   submitted1 = false;
//   submitted2 = false;
//   isLinear = true;
//   isLoaded = true;
//   constructor(
//     public router: Router,
//     private formBuilder: FormBuilder,
//     private cdr: ChangeDetectorRef,
//     private mocksApiService: mocksService
//   ) {}

//   ngOnInit(): void {
//     //card list
//     this.mocksApiService.getCardList().subscribe((response) => {
//       this.cardList = response?.data[0].attributes.card;
//     });
//     //country list
//     this.mocksApiService.getCountryList().subscribe((response) => {
//       this.countryList = response?.data[0].attributes.country;
//     });
//     //gender list
//     this.mocksApiService.getGenderList().subscribe((response) => {
//       this.genderList = response?.data[0].attributes.gender;
//     });
//     //state list
//     this.mocksApiService.getStateList().subscribe((response) => {
//       this.stateList = response?.data[0].attributes.state;
//     });
//     //title list
//     this.mocksApiService.getSalutationList().subscribe((response) => {
//       this.titleArray = response?.data[0].attributes.salutation;
//     });
//     //exp months
//     this.mocksApiService.getExpMonthList().subscribe((response) => {
//       this.expMonthList = response?.data[0].attributes.data;
//     });
//     this.firstFormGroup = this.formBuilder.group(
//       {
//         userName: ['', [Validators.required]],
//         email: ['', [Validators.required, Validators.email]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         confirm: ['', Validators.required],
//       },
//       {
//         validator: ConfirmPasswordValidator('password', 'confirm'),
//       }
//     );
//     this.secondFormGroup = this.formBuilder.group({
//       title: [null, [Validators.required]],
//       firstName: ['', [Validators.required]],
//       lastName: ['', [Validators.required]],
//       email: ['', [Validators.required, Validators.email]],
//       phoneNo: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern('[- +()0-9]{10,12}'),
//           Validators.maxLength(10),
//         ],
//       ],
//       zipCode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
//       state: [null, [Validators.required]],
//       address: ['', [Validators.required]],
//       country: [null, [Validators.required]],
//     });
//     this.thirdFormGroup = this.formBuilder.group({
//       cardType: [null, [Validators.required]],
//       cardNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
//       cvv: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
//       name: ['', [Validators.required]],
//       expMonth: [null, [Validators.required]],
//       expyear: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
//     });
//   }

//   get firstForm() {
//     return this.firstFormGroup.controls;
//   }
//   get secondForm() {
//     return this.secondFormGroup.controls;
//   }
//   get thirdForm() {
//     return this.thirdFormGroup.controls;
//   }

//   firstFormSubmit() {
//     this.submitted = true;
//    if (this.firstFormGroup.invalid) {
//       return;
//     }
//   }
//   secondFormSubmit() {
//     this.submitted1 = true;
//     if (this.secondFormGroup.invalid) {
//       return;
//     }
//   }
//   thirdFormsubmit() {
//     this.submitted2 = true;
//     if (this.thirdFormGroup.invalid) {
//       return;
//     }
//   }
//   onReset() {
//     this.submitted = false;
//     this.firstFormGroup.reset();
//   }
//   ngAfterViewInit() {
//     this.cdr.detectChanges();
//   }
// }
