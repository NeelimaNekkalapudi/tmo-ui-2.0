/**
 * Created by vvenkateshwarlu on 3/30/2017.
 */
import {Component, OnInit} from '@angular/core';
import {CartModel} from '../model/cart.model';
import {AppState} from '../app.service';
import {Router} from "@angular/router";
import {PersonalInfoForm} from '../vo/personalInfoForm.vo';
import {MockService} from '../services/mock.service';

@Component({
  selector: 'personalInformation',
  templateUrl: 'checkout.personalcomponent.html'
})

export class CheckoutPersonalComponent implements OnInit {

  public personalInfo:PersonalInfoForm;
  public carrierList:any[];

  constructor(private appState: AppState,
              private cartModel: CartModel,
              private router:Router,
              private mockService:MockService) {

  }

  public ngOnInit() {
    this.submitState('cart');
    this.personalInfo = {
      firstName : '',
      lastName : '',
      email : '',
      confirmEmail : '',
      phoneNumber : '',
      selectedCarrier : '',
      carriers : ["AT&T","Verizon","Sprint","Others"]
    }
  }

  public onChange($event, newValue) {
    console.log(newValue);
    this.personalInfo.selectedCarrier = $event;
  }


  private submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }

  public savePersonalInfo(){
    console.log('firstName: '+this.personalInfo.firstName);
    console.log('lastName: '+this.personalInfo.lastName);
    console.log('email: '+this.personalInfo.email);
    console.log('cemail: '+this.personalInfo.confirmEmail);
    console.log('phone: '+this.personalInfo.phoneNumber);
    console.log('carrier: '+this.personalInfo.selectedCarrier);
    //this.mockService.savePersonalInfo(personalInfo);
    let link = ['/checkout/billandship'];
    this.router.navigate(link);
  }

  public onWizardClick(){
    alert('clicked');
  }
}
