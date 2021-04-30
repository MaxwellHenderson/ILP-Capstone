import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-updateproducts',
  templateUrl: './admin-updateproducts.component.html',
  styleUrls: ['./admin-updateproducts.component.css'],
})
export class AdminUpdateproductsComponent implements OnInit {
  @Output()
  switchView = new EventEmitter<number>();

  updateMsg?: string;
  constructor(public adminSer: AdminService) {}

  ngOnInit(): void {}

  updatePrice(productRef: any) {
    console.log(productRef);
    this.adminSer.updateProducts(productRef).subscribe((result: string) => {
      this.updateMsg = result;
    });
    alert('Product Updated');
    this.switchView.emit(1);
  }
}
