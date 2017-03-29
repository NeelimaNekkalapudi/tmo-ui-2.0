import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {ProductComponent} from './product/product.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path:'searchProducts', component:ProductComponent}

];
