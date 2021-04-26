import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
