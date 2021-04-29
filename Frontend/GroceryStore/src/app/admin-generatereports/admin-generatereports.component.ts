import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { OrderService } from '../order.service';
import { OrderReport, Product, User } from '../shared/order.model';

@Component({
  selector: 'app-admin-generatereports',
  templateUrl: './admin-generatereports.component.html',
  styleUrls: ['./admin-generatereports.component.css']
})
export class AdminGeneratereportsComponent implements OnInit {

  reports?:Array<OrderReport>
  users?:Array<User>
  products?:Array<Product>
  constructor(public reportSer:OrderService) { }

  ngOnInit(): void {
  }

  dailyReport(){
    this.reportSer.generateReportDaily().subscribe(result=>this.reports=result);
  }
  weeklyReport(){
    this.reportSer.generateReportWeekly().subscribe(result=>this.reports=result);
  }
  monthlyReport(){
    this.reportSer.generateReportMonthly().subscribe(result=>this.reports=result);
  }
  productReports(){
    this.reportSer.generateProductReports().subscribe(result=>this.products=result);
  }
  costumerReports(){
    console.log("received")
    this.reportSer.generateCostumerReports().subscribe(result=>this.users=result);
    
  }

}
