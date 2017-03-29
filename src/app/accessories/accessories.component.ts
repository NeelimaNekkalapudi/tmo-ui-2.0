import {Component, OnInit} from '@angular/core';
import {MockService} from '../services/mock.service';
import {AppState} from '../app.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Accessories} from '../vo/accessories.vo';
import {CartModel} from '../model/cart.model';
@Component({
  selector: 'accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.less']
})

export class AccessoriesComponent implements OnInit {

  public showLoader = true;
  public viewBy = 3;
  public totalItems;
  public currentPage = 1;
  public itemsPerPage = this.viewBy;
  public skuForm: FormGroup;

  private accessoriesList = [];

  constructor(private appState: AppState,
              private fb: FormBuilder,
              private cartModel: CartModel,
              private mockService: MockService) {
    console.log('Here In Constructor');
  }

  public ngOnInit() {
    console.log('Here In NG ON Init');
    this.skuForm = this.fb.group({
      searchItems: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
    this.submitState('accessories');
    this.getAllAccessories();
  }

  public getAccessoryDetails(id) {
    console.log('Selected Id is', id);
  }

  public getAccessories(value) {
    let enterValue = value.searchItems;
    if (enterValue.length > 0 && enterValue.trim() !== '') {
      console.log('Go Button Clicked', value);
    }
  }

  public addCartItems(item) {
    (item as Accessories).isAccessory = true;
    this.cartModel.addItems(item);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }

  public previous(pageNo) {
    console.log('Previous page Is :::', pageNo);
    this.currentPage--;
  }

  public next(pageNo) {
    console.log('Next page Is :::', pageNo);
    this.currentPage++;
  }

  private getAllAccessories() {
    this.mockService.getAccessoriesList().then((accessories) => {
      this.accessoriesList = accessories;
      this.showLoader = false;
      this.totalItems = this.accessoriesList.length;
      console.log(' Here is the data is coming :: ', accessories);
    })
      .catch((error) => console.log(error));
  }
}
