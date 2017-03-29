import {HomeComponent} from '../home/home.component';
import {NgModule} from '@angular/core';
import {SharedModule} from './shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})

export class HomeModule {

}
