/**
 * Created by vvenkateshwarlu on 3/30/2017.
 */
import {Component, OnInit} from '@angular/core';
import {CartModel} from '../model/cart.model';
import {Observable} from 'rxjs';
import {Item} from '../vo/item.vo';
import {Accessories} from '../vo/accessories.vo';
import {AppState} from '../app.service';
import {Router} from "@angular/router";

@Component({
  selector: 'personalInformation',
  templateUrl: 'checkout.personalcomponent.html'
})

export class CheckoutPersonalComponent implements OnInit {

  constructor(private appState: AppState,
              private cartModel: CartModel, private router:Router) {

  }

  public ngOnInit() {
    this.submitState('cart');
  }


  private submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }

  public savePersonalInfo(){
    let link = ['/checkout/billandship'];
    this.router.navigate(link);
  }

  public onWizardClick(){
    alert('clicked');
  }
}
