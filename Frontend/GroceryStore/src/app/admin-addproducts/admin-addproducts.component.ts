import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-addproducts',
  templateUrl: './admin-addproducts.component.html',
  styleUrls: ['./admin-addproducts.component.css']
})
export class AdminAddproductsComponent implements OnInit {

  constructor(public adminSer:AdminService) { }

  ngOnInit(): void {
  }

  storeProduct(productRef:any)
  {
    console.log(productRef);
    this.adminSer.addProductDetails(productRef);
    alert("Product Added");
  }
}
