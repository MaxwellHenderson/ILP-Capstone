import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
import { OrderService } from '../order.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css'],
})
export class UserOrderStatusComponent implements OnInit {
  resultMsg?: string;
  orderArr: Array<Order> = [];
  constructor(public orderSer: OrderService,public sessServ:SessionService) {}

  ngOnInit(): void {
    let uid=this.sessServ.getUserId()
    
    this.orderSer.retrieveOrderById(uid).subscribe((result) => {
      console.log(result);
      this.orderArr = result;
    });
  }
}
