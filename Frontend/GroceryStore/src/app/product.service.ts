import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendUrlService } from './backend-url.service';
import { CartItem } from './shared/cart-item.model';
import { Product } from './shared/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  serverUrl: string = `${this.backendUrlService.getBackendUrl()}/product`;

  constructor(
    public http: HttpClient,
    public backendUrlService: BackendUrlService
  ) {}

  getAllProductDetails(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.serverUrl}/getProducts`);
  }

  getProductQuantity(productId: number): Observable<Number> {
    return this.http.get<Number>(
      `${this.serverUrl}/getProductQuantity?productId=${productId}`
    );
  }

  getMultpileProducts(products: number[]): Observable<Object> {
    let req = {
      products: products,
    };
    console.log(req);
    return this.http.post<Object>(`${this.serverUrl}/getMultipleProducts`, req);
  }

  reduceManyProductQuantity(cart: Map<number, CartItem>) {
    console.log('removing products');
    // Turn the cart into an object to pass
    let productInfo: CartItem[] = [];
    cart.forEach((item) => {
      productInfo.push(item);
    });
    let req = {
      productInfo: productInfo,
    };
    this.http
      .post(`${this.serverUrl}/reduceManyProductQuantity`, req)
      .subscribe((result) => console.log(result));
  }
}
