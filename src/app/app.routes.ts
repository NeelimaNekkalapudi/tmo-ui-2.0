import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {ProductComponent} from './product/product.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutPersonalComponent} from './checkout/checkout.personalcomponent';
import {CheckoutShippingInforamtionComponent} from "./checkout/checkout.shippinginformation";
import {CheckoutCreditInformation} from "./checkout/checkout.creditinformation";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'searchProducts', component: ProductComponent},
  {path: 'searchAccessories', component: AccessoriesComponent},
  {path: 'cart', component: CartComponent},
  {path:'checkout', component:CheckoutPersonalComponent},
  {path:'checkout/billandship', component:CheckoutShippingInforamtionComponent},
  {path:'checkout/creditInfo', component:CheckoutCreditInformation},
  {path:'checkout/personalInfo', component:CheckoutPersonalComponent},
  {path:'personalInformation', component:CheckoutPersonalComponent},
  {path:'checkoutcredit',component:CheckoutCreditInformation},
  {path:'shippingInformation',component:CheckoutShippingInforamtionComponent}
];
