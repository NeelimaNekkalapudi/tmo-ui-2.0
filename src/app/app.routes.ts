import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {ProductComponent} from './product/product.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutPersonalComponent} from './checkout/personal-info.component';
import {ShippingInformationComponent} from './checkout/shipping-info.component';
import {CheckoutCreditInformation} from './checkout/credit-info.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'searchProducts', component: ProductComponent},
  {path: 'searchAccessories', component: AccessoriesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutPersonalComponent},
  {path: 'checkout/billedShip', component: ShippingInformationComponent},
  {path: 'checkout/creditInfo', component: CheckoutCreditInformation}
];
