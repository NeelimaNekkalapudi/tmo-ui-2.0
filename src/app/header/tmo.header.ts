import {Component, OnInit} from '@angular/core';
import {AppState} from '../app.service';
import {CartModel} from '../model/cart.model';
@Component({
  selector: 'tmo-header',
  templateUrl: './tmo.header.html'
})

export class TmoHeaderComponent implements OnInit {
  public canShowNavElements: boolean;
  private _totalCartSize: number;

  constructor(private appState: AppState,
              private cartModel: CartModel) {
    this.totalCartSize = this.cartModel.cartItems.length;
  }

  public ngOnInit() {
    let state = this.appState.get('value');
    this.canShowNavElements = state !== 'home';

  }

  set totalCartSize(value: number) {
    this._totalCartSize = value;
  }

  get totalCartSize(): number {
    return this.cartModel.cartItems.length;
  }
}
