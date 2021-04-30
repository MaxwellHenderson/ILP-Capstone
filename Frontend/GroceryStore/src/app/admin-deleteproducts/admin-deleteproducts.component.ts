import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminService } from '../admin.service';
import { ProductService } from '../product.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-admin-deleteproducts',
  templateUrl: './admin-deleteproducts.component.html',
  styleUrls: ['./admin-deleteproducts.component.css'],
})
export class AdminDeleteproductsComponent implements OnInit {
  @Output()
  switchView = new EventEmitter<number>();

  deleteMsg?: string;
  products?: Array<Product>;
  dataLoaded: boolean = false;
  constructor(
    public adminSer: AdminService,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe((result: any) => {
      console.log(result);
      this.products = result.products;
      this.dataLoaded = true;
      console.log(this.products);
    });
  }

  deleteById(id: any) {
    console.log('id is ' + id);
    this.adminSer.deleteProducts(id).subscribe((result: string) => {
      this.deleteMsg = result;
    });
    alert('Product Deleted');
    this.switchView.emit(2);
  }
}
