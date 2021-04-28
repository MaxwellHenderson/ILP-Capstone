import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {

  orderStatus = ["shipped",
  "outForDeliver",
  "delivered",
  "canceled"]

  orders?:Array<Order>
  constructor(public orService:OrderService) { }

  ngOnInit(): void {
    this.orService.retrieveOrders()
    //.subscribe(result=>this.orders=result);
  }

  updateStatus(selStatus:any){
    console.log(selStatus.value);
  }

}
