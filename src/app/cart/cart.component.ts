import {Component, OnInit} from '@angular/core';
import {CartModel} from '../model/cart.model';
import {Router} from '@angular/router';
import {Item} from '../vo/item.vo';
import {Accessories} from '../vo/accessories.vo';
import {AppState} from '../app.service';

@Component({
  selector: 'addTo-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
  public cartItemsDetails: Item[] = [];
  public totalCartAmount = 0;

  constructor(private appState: AppState,
              private cartModel: CartModel,
              private router: Router) {

  }

  public ngOnInit() {
    this.submitState('cart');
    this.getProductList();
  }

  public getProductList() {
    //this.cartItemsDetails = this.cartModel.cartItems;
    let currentCartItem = this.cartModel.cartItems;
    this.cartModel.totalCartSize = currentCartItem.length;
    for (let item of currentCartItem) {
      if ((item as Accessories).isAccessory) {
        this.totalCartAmount = this.totalCartAmount + parseFloat(item.salePrice);
        this.cartItemsDetails.push(item);
      } else {
        this.totalCartAmount = this.totalCartAmount + parseFloat(item.salePrice);
        this.cartItemsDetails.push(item);
      }
    }
    console.log(this.cartItemsDetails, this.totalCartAmount);
  }

  public checkout(cartItems: Item[]) {
    let link = ['/checkout'];
    this.router.navigate(link);
  }

  private submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }
}
