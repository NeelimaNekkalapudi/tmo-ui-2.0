import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Accessories} from '../vo/accessories.vo';
import {Product} from '../vo/product.vo';

@Injectable()
export class MockService {
  constructor(private http: Http) {

  }

  public getAccessoriesList(): Promise<Accessories[]> {
    return this.http.get('../../assets/mock-data/accessoriesList_Response.json').toPromise()
      .then((response) => response.json() as Accessories[])
      .catch(this.handleError);
  }

  public getProductsList(): Promise<Product[]> {
    return this.http.get('../../assets/mock-data/productsList_Response.json').toPromise()
      .then((response) => response.json() as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
