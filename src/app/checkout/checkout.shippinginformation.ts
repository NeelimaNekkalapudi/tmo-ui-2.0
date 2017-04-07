/**
 * Created by vvenkateshwarlu on 3/31/2017.
 */
import {Component, OnInit} from '@angular/core';
import {CartModel} from '../model/cart.model';
import {Observable} from 'rxjs';
import {Item} from '../vo/item.vo';
import {Accessories} from '../vo/accessories.vo';
import {AppState} from '../app.service';
import {Router} from "@angular/router";
import {ShippingInfoForm} from '../vo/shippingInfoForm.vo';
import {MockService} from '../services/mock.service';

@Component({
  selector: 'shipping',
  templateUrl: './checkout.shippinginformation.html'
})

export class CheckoutShippingInforamtionComponent implements OnInit {
  constructor(private appState: AppState,
              private cartModel: CartModel,
              private router:Router,
              private mockService:MockService) {

  }

  public shippingInfo:ShippingInfoForm;
  public stateList:any;
  public creditTypesList:any;

  public ngOnInit() {
    this.submitState('cart');

    this.shippingInfo = {
      shippingAddress1 : '',
      shippingAddress2 : '',
      shipCity : '',
      shipState : '',
      shipZip : '',
      isSameAddress : false,
      billingAddress1 : '',
      billingAddress2 : '',
      billingCity : '',
      billingState : '',
      billingZip : '',
      cardName : '',
      cardNumber : '',
      cardMonth : '',
      cardYear : '',
      cardCvv : '',
      creditRating : ''
    };
    this.stateList = ["AL","AK","AZ","AR","CA","CO"];
    this.creditTypesList=["AWESOME-CREDIT", "AVERAGE-CREDIT", "GOOD-CREDIT"];
    //this.getCreditRatingTypes();
  }

  private submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }

  public  saveBillShipInfo()
  {
    if (this.shippingInfo && this.shippingInfo.isSameAddress)
    {
      this.shippingInfo.billingAddress1 = this.shippingInfo.shippingAddress1;
      this.shippingInfo.billingAddress2 = this.shippingInfo.shippingAddress2;
      this.shippingInfo.billingCity = this.shippingInfo.shipCity;
      this.shippingInfo.billingState = this.shippingInfo.shipState;
      this.shippingInfo.billingZip = this.shippingInfo.shipZip;
    }
    let link = ['/checkout/creditInfo'];
    this.router.navigate(link);
  }
  /*private getCreditRatingTypes() {
    this.mockService.getCreditRatingTypes().then((creditRatingTypes) => {
     this.creditTypes = creditRatingTypes;
     })
     .catch((error) => console.log(error));
     console.log('CreditRatingData - ' + this.creditTypes.items.length)
  }*/
}

