/**
 * Created by vvenkateshwarlu on 3/31/2017.
 */
import {Component, OnInit} from '@angular/core';
import {CartModel} from '../model/cart.model';
import {Observable} from 'rxjs';
import {Item} from '../vo/item.vo';
import {Accessories} from '../vo/accessories.vo';
import {AppState} from '../app.service';

@Component({
  selector: 'addTo-cart',
  templateUrl: 'checkout.creditinformation.html'
})

export class CheckoutCreditInformation implements OnInit {

  constructor(private appState: AppState,
              private cartModel: CartModel) {

  }

  public ngOnInit() {
    this.submitState('cart');
  }


  private submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }
}


