import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-updateproducts',
  templateUrl: './admin-updateproducts.component.html',
  styleUrls: ['./admin-updateproducts.component.css']
})
export class AdminUpdateproductsComponent implements OnInit {

  updateMsg?:string;
  constructor(public adminSer:AdminService) { }

  ngOnInit(): void {
  }

  updatePrice(productRef:any){
    console.log(productRef);
    this.adminSer.updateProducts(productRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
}
