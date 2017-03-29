import {Item} from '../vo/item.vo';
import {Injectable, Input} from '@angular/core';

@Injectable()
export class CartModel {
  @Input() public cartItems: Item[] = [];
  public totalCartSize: number;

  public addItems(item) {
    this.cartItems.push(item);
  }

  public flushItems() {
    this.cartItems = [];
  }
}
