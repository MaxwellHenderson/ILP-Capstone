import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css'],
})
export class UserOrderStatusComponent implements OnInit {
  resultMsg?: string;
  orderArr: Array<Order> = [];
  constructor(public orderSer: OrderService) {}

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('userInfo')!);
    this.orderSer.retrieveOrderById(userName).subscribe((result) => {
      console.log(result);
      this.orderArr = result;
    });
  }
}
