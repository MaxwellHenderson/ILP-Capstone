import { Component, OnInit } from '@angular/core';
import { Order, OrderReport } from '../shared/order.model';
import { OrderService } from '../order.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css'],
})
export class UserOrderStatusComponent implements OnInit {
  resultMsg?: string;
  orderArr: Array<OrderReport> = [];
  dataLoaded: boolean = false;
  constructor(public orderSer: OrderService, public sessServ: SessionService) {}

  ngOnInit(): void {
    let uid = this.sessServ.getUserId();

    console.log(uid);
    this.orderSer.retrieveOrderById(uid).subscribe((result) => {
      console.log(result);
      this.orderArr = result;
      this.dataLoaded = true;
    });
  }
}
