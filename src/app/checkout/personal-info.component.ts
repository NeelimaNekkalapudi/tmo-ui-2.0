import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormHelperService} from '../services/form-helper.service';
import {Router} from '@angular/router';
import {PersonalInfo} from '../vo/personal-info.vo';
import {GlobalValidator} from '../validators/global.validators';

@Component({
  selector: 'personalInformation',
  templateUrl: 'personal-info.html'
})

export class CheckoutPersonalComponent implements OnInit {
  public personalForm: FormGroup;
  public isFormSubmitted: boolean;
  public firstName: AbstractControl;
  public lastName: AbstractControl;
  public email: AbstractControl;
  public confirm: AbstractControl;
  public phoneNumber: AbstractControl;
  public carrier: AbstractControl;
  public carrierList = [{name: 'Verizon'}, {name: 'AT&T'}, {name: 'Sprint'}, {name: 'Others'}];

  constructor(private appState: AppState,
              private fb: FormBuilder,
              private router: Router,
              public fh: FormHelperService,) {
  }

  public ngOnInit(): void {
    this.personalForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, GlobalValidator.mailFormat]),
      confirm: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(14)]),
      carrier: new FormControl('', [Validators.required]),
    }, {
      validator: this.fh.matchingEmails('email', 'confirm')
    });
    this.submitState('cart');
  }

  public personalInfo(data: FormGroup): void {
    this.isFormSubmitted = true;
    if (data.valid) {
      let personalInfo: PersonalInfo = new PersonalInfo();
      personalInfo.firstName = data.controls['firstName'].value;
      personalInfo.lastName = data.controls['lastName'].value;
      personalInfo.carrier = data.controls['carrier'].value;
      personalInfo.confirm = data.controls['confirm'].value;
      personalInfo.email = data.controls['email'].value;
      personalInfo.phoneNumber = data.controls['phoneNumber'].value;
      console.log(' ::: personalInfo ::: ', personalInfo);
      //this.mockService.savePersonalInfo(personalInfo);
      this.router.navigateByUrl('/checkout/billedShip');
    }
  }

  private submitState(value): void {
    console.log('submitState', value);
    this.appState.set('value', value);
  }
}
