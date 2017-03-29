import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {ProductComponent} from './product/product.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {CartComponent} from './cart/cart.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'searchProducts', component: ProductComponent},
  {path: 'searchAccessories', component: AccessoriesComponent},
  {path: 'cart', component: CartComponent}
];
