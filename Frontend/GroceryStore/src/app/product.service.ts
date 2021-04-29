import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from './shared/cart-item.model';
import { Product } from './shared/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public http: HttpClient) {}

  getAllProductDetails(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://localhost:9090/product/getProducts'
    );
  }

  getProductQuantity(productId: number): Observable<Number> {
    return this.http.get<Number>(
      `http://localhost:9090/product/getProductQuantity?productId=${productId}`
    );
  }

  getMultpileProducts(products: number[]): Observable<Object> {
    let req = {
      products: products,
    };
    console.log(req);
    return this.http.post<Object>(
      `http://localhost:9090/product/getMultipleProducts`,
      req
    );
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
      .post(`http://localhost:9090/product/reduceManyProductQuantity`, req)
      .subscribe((result) => console.log(result));
  }
}
