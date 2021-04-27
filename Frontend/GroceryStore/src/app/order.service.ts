import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './shared/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(public http: HttpClient) {}

  placeOrder(orderInfo: Order) {
    this.http
      .post('http://localhost:9090/order/placeOrder', orderInfo)
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
}
