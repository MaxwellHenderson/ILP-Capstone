import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { OrderService } from '../order.service';
import { OrderReport } from '../shared/order.model';
import { ProductReport} from '../shared/product.model';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-admin-generatereports',
  templateUrl: './admin-generatereports.component.html',
  styleUrls: ['./admin-generatereports.component.css']
})
export class AdminGeneratereportsComponent implements OnInit {

  reports?:Array<OrderReport>
  users!:Array<OrderReport>
  products?:Array<ProductReport>
  dataLoaded1:boolean=false
  dataLoaded2:boolean=false
  dataLoaded3:boolean=false
  constructor(public reportSer:OrderService) { }

  ngOnInit(): void {
  }

  dailyReport(){
    this.reportSer.generateReportDaily().subscribe((result)=>{
      this.reports=result
      this.dataLoaded1=true
    });
  }
  weeklyReport(){
    this.reportSer.generateReportWeekly().subscribe((result)=>{
      this.reports=result
      this.dataLoaded1=true
    });
  }
  monthlyReport(){
    this.reportSer.generateReportMonthly().subscribe((result)=>{
      this.reports=result
      this.dataLoaded1=true
    });
  }
  productReports(productRef:any){
    this.reportSer.generateProductReports(productRef).subscribe((result:any)=>{
      
      this.products=result
      this.dataLoaded2=true
      console.log(this.users)
    });
  }
  costumerReports(userRef:any){
    console.log("received")
    this.reportSer.generateCostumerReports(userRef).subscribe((result:any)=>{
      
      this.users=result
      this.dataLoaded3=true
      console.log(this.users)
    });
    //console.log(this.users);
    
  }

}
