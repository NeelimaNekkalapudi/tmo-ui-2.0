import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Accessories} from '../vo/accessories.vo';
import {Product} from '../vo/product.vo';
import {PersonalInfo} from '../vo/personal-info.vo';

interface StateObj {
  name: string;
  abbreviation: string;
}

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

  public getStateList(): Promise<StateObj[]> {
    return this.http.get('../../assets/mock-data/us-stateList.json').toPromise()
      .then((response) => response.json() as StateObj[])
      .catch(this.handleError);
  }

  /* public getCreditRatingTypes(): Promise<CreditTypeResponse> {
   return this.http.get('../../assets/mock-data/creditratingtypesResponse.json').toPromise()
   .then((response) => response.json() as CreditTypeResponse)
   .catch(this.handleError);
   }*/

  public savePersonalInfo(body: PersonalInfo): Promise<any> {
    console.log('Requesting Save Personal Information');
    let bodyString = JSON.stringify(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('../../assets/mock-data/personalInformationRequest', bodyString, options).toPromise()
      .then((response) => response.json()).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
