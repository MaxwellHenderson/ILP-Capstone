import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderReport } from './shared/order.model';
import { Observable } from 'rxjs';
import { ProductReport } from './shared/product.model';
import { User } from './shared/user.model';


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
      userName: orderInfo.userName,
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

  retrieveOrderById(id: any): Observable<OrderReport[]> {
    return this.http.get<OrderReport[]>(
      'http://localhost:9090/order/getOrderByUser/' + id
    );
  }

  updateOrderStatusById(orderRef: any): Observable<any> {
    console.log(orderRef['_id']);
    return this.http.post(
      'http://localhost:9090/order/updateOrderStatus',
      orderRef
    );
  }

  generateReportDaily(): Observable<OrderReport[]> {
    return this.http.get<OrderReport[]>(
      'http://localhost:9090/order/getReportDaily'
    );
  }

  retrieveOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:9090/order/getOrders');
  }

  generateReportWeekly(): Observable<OrderReport[]> {
    return this.http.get<OrderReport[]>(
      'http://localhost:9090/order/getReportWeekly'
    );
  }
  generateReportMonthly(): Observable<OrderReport[]> {
    return this.http.get<OrderReport[]>(
      'http://localhost:9090/order/getReportMonthly'
    );
  }

  generateProductReports(productRef:any): Observable<ProductReport[]> {
    return this.http.post<ProductReport[]>(
      'http://localhost:9090/order/getProductReports',productRef
    );
  }

  generateCostumerReports(userRef:any): Observable<OrderReport> {
    console.log(userRef)
    return this.http.post<OrderReport>(
      'http://localhost:9090/order/getCustomerReports',userRef
    );
  }
}
