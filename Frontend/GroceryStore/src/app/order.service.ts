import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderReport, Product, User } from './shared/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(public http: HttpClient) {}

  placeOrder(orderInfo: Order) {
    //First have to convert the map to a key-value array to send as http post
    let convertedCart = Array.from(orderInfo.cart).reduce(
      (obj, [key, value]) => Object.assign(obj, { [key.toString()]: value }),
      {}
    );

    console.log('In service');
    console.log(orderInfo);
    let httpOrderInfo = {
      _id: orderInfo._id,
      userName: orderInfo.userId,
      orderDate: orderInfo.orderDate,
      cart: convertedCart,
      orderStatus: orderInfo.orderStatus,
      totalPrice: orderInfo.totalPrice,
      userId: orderInfo.userId,
    };
    this.http
      .post('http://localhost:9090/order/placeOrder', httpOrderInfo)
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }

  retrieveOrderById(id: any): Observable<Order[]> {
    return this.http.get<Order[]>(
      'http://localhost:9090/order/getOrderByUser/'+id);
  }

  generateReportDaily():Observable<OrderReport[]>{
    return this.http.get<OrderReport[]>(
      'http://localhost:9090/order/getReportDaily'
    )
  }

  generateReportWeekly():Observable<OrderReport[]>{
    return this.http.get<OrderReport[]>(
      'http://localhost:9090/order/getReportDaily'
    )
  }

  generateReportMonthly():Observable<OrderReport[]>{
    return this.http.get<OrderReport[]>(
      'http://localhost:9090/order/getReportDaily'
    )
  }

  generateProductReports():Observable<Product[]>{
    return this.http.get<Product[]>(
      'http://localhost:9090/order/getProductReports'
    )
  }

  generateCostumerReports():Observable<User[]>{
    return this.http.get<User[]>(
      'http://localhost:9090/order/getCustomerReports'
    )
  }
}