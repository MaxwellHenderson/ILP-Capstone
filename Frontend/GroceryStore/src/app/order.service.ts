import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './mode.Order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http:HttpClient) { }
  
    retrieveOrderById(id:any):Observable<Order[]>{
      return this.http.get<Order[]>("http://localhost:9090/order/getOrderByUser/"+id)
    }
  
}
