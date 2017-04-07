/**
 * Created by vvenkateshwarlu on 3/31/2017.
 */
import {Component, OnInit} from '@angular/core';
import {CartModel} from '../model/cart.model';
import {AppState} from '../app.service';
import {CreditInfoForm} from '../vo/creditInfoForm.vo';

@Component({
  selector: 'addTo-cart',
  templateUrl: 'checkout.creditinformation.html'
})

export class CheckoutCreditInformation implements OnInit {

  public idTypeList:any;
  public stateList:any;
  public creditInfo:CreditInfoForm;
  public isAgreed:Boolean;

  constructor(private appState: AppState,
              private cartModel: CartModel) {

  }

  public ngOnInit() {
    this.submitState('cart');

    this.idTypeList = ["State issued ID","Drivers License","Military ID","Passport","Federal issued disability ID","US issued alien ID","Mexican matricula ID"];
    this.stateList = ["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
    this.creditInfo = {
      idType : '',
      creditState : '',
      dob : '',
      expYear : '',
      idNumber : '',
      ssn : '',
      expMonth : ''
    };
    this.isAgreed = false;
  }


  private submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }
}


