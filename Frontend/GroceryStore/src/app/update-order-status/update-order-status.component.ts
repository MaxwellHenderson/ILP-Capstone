import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderService } from '../order.service';
import { Order } from '../shared/order.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css'],
})
export class UpdateOrderStatusComponent implements OnInit {
  public data: any;
  public msg: any;
  public objectData: any;
  public reasonForCancellation: any;

  orderStatuses = ['shipped', 'outForDeliver', 'delivered', 'canceled'];

  // orderStatusRef=new FormGroup({
  //   //orderStatus:new FormControl,
  //   reasonForCancellation:new FormControl(),

  // });

  orderStatus?: string;
  objRef = {};

  orders?: Array<Order>;
  constructor(
    public orService: OrderService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.orService.retrieveOrders().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
    //.subscribe(result=>this.orders=result);
  }

  selectChangeHandler(event: any) {
    //update the ui
    this.orderStatus = event.target.value;
    console.log(this.orderStatus);
  }

  updateStatusData(objectData: any, reason: any) {
    console.log(objectData);
    objectData.orderStatus = this.orderStatus;
    objectData.reasonForCancellation = reason.reasonForCancellation;
    objectData.aid = 123456789;
    objectData.fund = +objectData.totalPrice;

    this.orService.updateOrderStatusById(objectData).subscribe((data) => {
      this.msg = data;
      console.log(this.msg);
      alert(this.msg);
    });

    this.userService.updateAccountFundsByID(objectData).subscribe((data) => {
      this.msg = data;
      console.log(this.msg);
      alert(this.msg);
    });
  }
}
