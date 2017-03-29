import {NgModule} from '@angular/core';
import {SearchModule} from './search.module';
import {HomeModule} from './home.module';
@NgModule({
  imports: [SearchModule.forRoot()],
  exports: [HomeModule]
})

export class CoreModule {
  public static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}
