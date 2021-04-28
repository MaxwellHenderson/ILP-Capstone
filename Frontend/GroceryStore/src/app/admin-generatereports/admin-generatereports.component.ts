import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { OrderService } from '../order.service';
import { OrderReport } from '../shared/order.model';

@Component({
  selector: 'app-admin-generatereports',
  templateUrl: './admin-generatereports.component.html',
  styleUrls: ['./admin-generatereports.component.css']
})
export class AdminGeneratereportsComponent implements OnInit {

  reports?:Array<OrderReport>
  constructor(public reportSer:OrderService) { }

  ngOnInit(): void {
  }

  dailyReport(){
    this.reportSer.generateReportDaily().subscribe(result=>this.reports=result);
  }
  weeklyReport(){
    this.reportSer.generateReportDaily().subscribe(result=>this.reports=result);
  }
  monthlyReport(){
    this.reportSer.generateReportDaily().subscribe(result=>this.reports=result);
  }

}
