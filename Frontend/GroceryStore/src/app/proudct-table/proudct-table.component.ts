import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-proudct-table',
  templateUrl: './proudct-table.component.html',
  styleUrls: ['./proudct-table.component.css'],
})
export class ProudctTableComponent implements OnInit {
  products?: Array<any>;
  dataLoaded: boolean = false;
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe((result: any) => {
      console.log(result);
      this.products = result.products;
      this.dataLoaded = true;
      console.log('product table');
      console.log(this.products);
    });
  }
}
