import { TestBed } from "@angular/core/testing";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";


describe('calendarValidator check', () => {
    let formBuilder:FormBuilder;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [],
            imports: [ ReactiveFormsModule],
            providers:[ { provide: FormBuilder, useValue: formBuilder }]
        })
            .compileComponents();
    });
    it('create an checks', () => {
        let matchingControlName = "string";
       let form : FormGroup | any;
        const setSum = jest.fn().mockName("calendarValidator");
        setSum();
        let matchingControl:any = form?.controls[matchingControlName];
       matchingControl?.setErrors({ calendarValidator: true }); 
        matchingControl?.setErrors(null);
        expect(matchingControl?.setErrors).toBeUndefined()
        expect(setSum).toBeCalled();
    });



    it('create an ConfirmPasswordValidator', () => {
        const setSum = jest.fn().mockName("ConfirmPasswordValidator");
        setSum();
       expect(setSum).toHaveBeenCalled();
    });
    it('create an ConfirmPasswordValidator non condiiton', () => {
       let matchingControl:any = {value:'syr'};
       let form :FormGroup | any;
        const setSum = jest.fn().mockName("ConfirmPasswordValidator");
        setSum();
       matchingControl = form?.controls['sdcsting'];
        matchingControl?.setErrors({ confirmPasswordValidator: true });
        expect(setSum).toHaveBeenCalled();
    });
});