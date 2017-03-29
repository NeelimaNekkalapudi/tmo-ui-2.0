import {NgModule} from '@angular/core';
import {TmoHeaderComponent} from '../header/tmo.header';
import {FormsModule} from '@angular/forms';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {ROUTES} from '../app.routes';
import {CommonModule} from '@angular/common';
@NgModule({
  entryComponents: [TmoHeaderComponent],
  declarations: [TmoHeaderComponent],
  exports: [
    TmoHeaderComponent,
    FormsModule,
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
  ]
})
export class SharedModule {

}
