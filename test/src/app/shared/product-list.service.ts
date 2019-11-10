import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  readonly BASE_URL = environment.baseUrl;
  readonly PRODUCT_URL = 'products';

  constructor(private http: HttpClient) {
  }

  getProducts(searchString: string) {
    return this.http.post(this.BASE_URL + this.PRODUCT_URL,
      {
        'searchString': searchString
      });
  }
}
