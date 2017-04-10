import {Component, OnInit} from '@angular/core';
import {MockService} from '../services/mock.service';
import {AppState} from '../app.service';
import {CartModel} from '../model/cart.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../vo/product.vo';
import {ArrayUtil} from '../utils/array.util';
@Component({
  selector: 'search',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})

export class ProductComponent implements OnInit {
  public showLoader = true;
  public viewBy = 3;
  public totalItems;
  public currentPage = 1;
  public localState = {value: ''};
  public itemsPerPage = this.viewBy;
  public skuForm: FormGroup;
  public searchMaxLength: number = 2;
  private productList = [];

  constructor(private appState: AppState,
              private fb: FormBuilder,
              private mockService: MockService,
              private cartModel: CartModel) {

  }

  public ngOnInit() {
    this.skuForm = this.fb.group({
      searchItems: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
    this.submitState('product');
    this.getAllProducts();
  }

  public addCartItems(item) {
    (item as Product).isProduct = true;
    this.cartModel.addItems(item);
  }

  public getFilterProducts(value) {
    let enterValue = value.searchItems;
    console.log(' Enter value is  :: ', enterValue);
    if (enterValue.length > 0 && enterValue.trim() !== '') {
      this.productList = ArrayUtil.filterArray(this.productList, enterValue);
    } else {
      this.getAllProducts();
    }
  }

  public previous(pageNo) {
    this.currentPage--;
  }

  public next(pageNo): void {
    this.currentPage++;
  }

  public getProductDetails(id): void {
    console.log(' Product Details :: ', id);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

  private getAllProducts() {
    this.mockService.getProductsList().then((products) => {
      this.productList = products;
      this.showLoader = false;
      this.totalItems = this.productList.length;
      console.log(' Here is the data is coming :: ', products);
    })
      .catch((error) => console.log(error));
  }
}
