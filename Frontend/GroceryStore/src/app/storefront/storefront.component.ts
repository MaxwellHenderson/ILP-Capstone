import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css'],
})
export class StorefrontComponent implements OnInit {
  products?: Array<Product>;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getAllProductDetails()
      .subscribe((result) => (this.products = result));
    console.log(this.products);
  }
}
