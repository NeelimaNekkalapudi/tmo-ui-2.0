import {NgModule} from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared.module';
import {MockService} from '../services/mock.service';

@NgModule({
  imports: [BrowserModule, RouterModule, SharedModule],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})

export class SearchModule {
  // pattern for adding app-wide services
  public static forRoot() {
    return {
      ngModule: SearchModule,
      providers: [MockService]
    };
  }
}
