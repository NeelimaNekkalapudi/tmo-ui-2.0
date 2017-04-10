import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
import {MockService} from '../services/mock.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormHelperService} from '../services/form-helper.service';
import {GlobalValidator} from '../validators/global.validators';

@Component({
  selector: 'addTo-cart',
  templateUrl: 'credit-info.html'
})

export class CheckoutCreditInformation implements OnInit {
  public creditForm: FormGroup;
  public idTypeList = ['State issued ID', 'Drivers License', 'Military ID', 'Passport',
    'Federal issued disability ID', 'US issued alien ID', 'Mexican matricula ID'];
  public statesList = [];
  public state: AbstractControl;
  public ssn: AbstractControl;
  public idType: AbstractControl;
  public idNumber: AbstractControl;
  public expMonth: AbstractControl;
  public expYear: AbstractControl;
  public dob: AbstractControl;
  public isAcceptedTerms: boolean;
  public isFormSubmitted: boolean;
  public currentYear: number = new Date().getFullYear();

  constructor(private appState: AppState,
              private fb: FormBuilder,
              public fh: FormHelperService,
              private mockService: MockService) {

  }

  public ngOnInit() {
    this.creditForm = this.fb.group({
      state: new FormControl('', [Validators.required]),
      idType: new FormControl('', [Validators.required]),
      ssn: new FormControl('', [Validators.required, Validators.maxLength(14)]),
      idNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      expMonth: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      expYear: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      dob: new FormControl('', [Validators.required, GlobalValidator.dobValidator]),
    }, {
      validator: this.fh.expireValidator('expMonth', 'expYear'),
    });
    this.submitState('cart');
    this.getStateList();
  }

  public acceptedTerms(checked: boolean): void {
    this.isAcceptedTerms = checked;
  }

  public saveCreditRating(): void {
    this.isFormSubmitted = true;
  }

  private getStateList(): void {
    this.mockService.getStateList().then((states) => {
      this.statesList = states;
    })
      .catch((error) => console.log(error));
  }

  private submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }
}
