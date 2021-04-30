import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-addproducts',
  templateUrl: './admin-addproducts.component.html',
  styleUrls: ['./admin-addproducts.component.css'],
})
export class AdminAddproductsComponent implements OnInit {
  @Output()
  switchView = new EventEmitter<number>();

  constructor(public adminSer: AdminService) {}

  ngOnInit(): void {}

  storeProduct(productRef: any) {
    console.log(productRef);
    this.adminSer.addProductDetails(productRef);
    alert('Product Added');
    this.switchView.emit(0);
  }
}
