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
import {CheckoutPersonalComponent} from '../checkout/personal-info.component';
import {ShippingInformationComponent} from '../checkout/shipping-info.component';
import {CheckoutCreditInformation} from '../checkout/credit-info.component';
import {NumberOnly} from '../directives/number-only.directive';
import {Ng2MaskModule} from 'ng2-mask';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    Ng2MaskModule
  ],
  declarations: [
    ProductComponent,
    AccessoriesComponent,
    CartComponent,
    CheckoutPersonalComponent,
    ShippingInformationComponent,
    CheckoutCreditInformation,
    NumberOnly
  ],
  exports: [
    ProductComponent,
    AccessoriesComponent,
    CartComponent,
    CheckoutPersonalComponent,
    ShippingInformationComponent,
    CheckoutCreditInformation,
    NumberOnly
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
