import {NgModule} from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared.module';
import {MockService} from '../services/mock.service';
import {AccessoriesComponent} from '../accessories/accessories.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CartComponent} from '../cart/cart.component';
import {CartModel} from '../model/cart.model';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductComponent,
    AccessoriesComponent,
    CartComponent
  ],
  exports: [
    ProductComponent,
    AccessoriesComponent,
    CartComponent
  ]
})

export class SearchModule {
  // pattern for adding app-wide services
  public static forRoot() {
    return {
      ngModule: SearchModule,
      providers: [MockService, CartModel]
    };
  }
}
