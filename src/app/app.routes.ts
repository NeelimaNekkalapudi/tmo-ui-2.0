import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {SearchComponent} from './search/search.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path:'searchProducts', component:SearchComponent}

];
