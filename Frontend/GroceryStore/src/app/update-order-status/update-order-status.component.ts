import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {

  public data:any;
  public data1:any; 
  public msg:any;

  orderStatus = ["shipped",
  "outForDeliver",
  "delivered",
  "canceled"]

  selectedOp?: string;
  printedOp?: string;

  orders?:Array<Order>
  constructor(public orService:OrderService) { }

  ngOnInit(): void {
    // this.orService.retrieveOrders()
    this.orService.retrieveOrders().subscribe(
      (data: any) => {
        this.data=data;
        console.log(this.data)
    });
    //.subscribe(result=>this.orders=result);
  }

  updateStatus(data1:any){
    this.printedOp = this.selectedOp;

    this.orService.updateOrderStatusById(data1).subscribe(data => {
      this.msg = data;
      console.log(this.msg);
      alert(this.msg)
    })
  }

}
