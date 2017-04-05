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

@Component({
  selector: 'shipping',
  templateUrl: './checkout.shippinginformation.html'
})

export class CheckoutShippingInforamtionComponent implements OnInit {

  constructor(private appState: AppState,
              private cartModel: CartModel,private router:Router) {

  }

  public ngOnInit() {
    this.submitState('cart');
  }


  private submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }

  public  saveBillShipInfo()
  {
    let link = ['/checkout/creditInfo'];
    this.router.navigate(link);
  }
}

