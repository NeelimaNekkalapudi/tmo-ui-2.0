import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormHelperService} from '../services/form-helper.service';
import {MockService} from '../services/mock.service';
import {creditCardValidator} from '../validators/CreditCardValidator';
import {CCTypes} from '../validators/CCTypes';
import {CCValidator} from '../validators/CCValidator';
import {Router} from '@angular/router';

@Component({
  selector: 'shipping',
  templateUrl: './shipping-info.html'
})

export class ShippingInformationComponent implements OnInit {
  public shippingForm: FormGroup;
  public address1: AbstractControl;
  public address2: AbstractControl;
  public city: AbstractControl;
  public zip: AbstractControl;
  public copyShippingAddress: boolean;
  public statesList = [];
  public billAddress1: AbstractControl;
  public billAddress2: AbstractControl;
  public billCity: AbstractControl;
  public billState: AbstractControl;
  public billZip: AbstractControl;
  public state: AbstractControl;
  public customerName: AbstractControl;
  public cardNumber: AbstractControl;
  public expMonth: AbstractControl;
  public expYear: AbstractControl;
  public cvv: AbstractControl;
  public rating: AbstractControl;
  public isFormSubmitted: boolean = false;
  public creditTypesList: string[];
  private ccImgSrc = '../../assets/img/card/credit-card.png';
  private selectedCard = 'Card: NONE';

  constructor(private appState: AppState,
              private fb: FormBuilder,
              public fh: FormHelperService,
              private mockService: MockService,
              private router: Router) {

  }

  public ngOnInit() {
    this.shippingForm = this.fb.group({
      address1: new FormControl('', [Validators.required, Validators.minLength(5)]),
      address2: new FormControl('', [Validators.required, Validators.minLength(5)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      zip: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
      state: new FormControl('', [Validators.required]),
      billAddress1: new FormControl('', [Validators.required, Validators.minLength(5)]),
      billAddress2: new FormControl('', [Validators.required, Validators.minLength(5)]),
      billCity: new FormControl('', [Validators.required, Validators.minLength(3)]),
      billState: new FormControl('', [Validators.required]),
      billZip: new FormControl('', [Validators.required, Validators.maxLength(5)]),
      customerName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      cardNumber: new FormControl('', [Validators.required, creditCardValidator]),
      expMonth: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      expYear: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]),
      rating: new FormControl('', [Validators.required])
    }, {
      validator: this.fh.expireValidator('expMonth', 'expYear')
    });
    this.submitState('cart');
    this.getStateList();
    this.creditTypesList = ['AWESOME-CREDIT', 'AVERAGE-CREDIT', 'GOOD-CREDIT'];
  }

  public cardNumberKeyUp(): void {
    let cardNumber: string = this.shippingForm.controls['cardNumber'].value.toString();
    let cardType: string = CCTypes.NONE;
    if (CCValidator.isValid(cardNumber)) {
      cardType = CCValidator.getCardType(cardNumber);
      //console.log(' Card Type is ::: ', cardType);
    }

    switch (cardType) {
      case CCTypes.AMERICAN_EXPRESS:
        this.ccImgSrc = '../../assets/img/card/amex.png';
        this.selectedCard = 'American Express';
        break;

      case CCTypes.DISCOVER:
        this.ccImgSrc = '../../assets/img/card/discover.png';
        this.selectedCard = 'Discover';
        break;

      case CCTypes.MASTERCARD:
        this.ccImgSrc = '../../assets/img/card/mastercard.png';
        this.selectedCard = 'Mastercard';
        break;

      case CCTypes.VISA:
        this.ccImgSrc = '../../assets/img/card/visa.png';
        this.selectedCard = 'Visa';
        break;

      case CCTypes.NONE:
        this.ccImgSrc = '../../assets/img/card/credit-card.png';
        this.selectedCard = 'Card: NONE';
        break;
    }
  }

  public shoppingFormHandler(data: FormGroup): void {
    //console.log(' Is Data Valid :: ', data.valid, ' Value is :: ', data.value);
    console.dir(' Is Data Valid :: ', data.valid, ' Value is :: ', data.value);
    this.isFormSubmitted = true;
    //this.copyAddressToBillingAddress();
    if (data.valid) {
      this.router.navigateByUrl('/checkout/creditInfo');
    }
    console.log(data);
  }

  public copyAddressToBillingAddress(checked: boolean): void {
    if (checked) {
      this.shippingForm.controls['billAddress1'].setValue(this.shippingForm.controls['address1'].value);
      this.shippingForm.controls['billAddress2'].setValue(this.shippingForm.controls['address2'].value);
      this.shippingForm.controls['billCity'].setValue(this.shippingForm.controls['city'].value);
      this.shippingForm.controls['billZip'].setValue(this.shippingForm.controls['zip'].value);
      this.shippingForm.controls['billState'].setValue(this.shippingForm.controls['state'].value);
    } else {
      this.shippingForm.controls['billAddress1'].setValue('');
      this.shippingForm.controls['billAddress2'].setValue('');
      this.shippingForm.controls['billCity'].setValue('');
      this.shippingForm.controls['billZip'].setValue('');
      this.shippingForm.controls['billState'].setValue('');
    }
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
