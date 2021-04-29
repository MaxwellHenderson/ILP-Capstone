import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { SessionService } from '../session.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css'],
})
export class StorefrontComponent implements OnInit {
  products?: Array<Product>;
  dataLoaded: boolean = false;

  constructor(
    public productService: ProductService,
    public sessionService: SessionService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe((result: any) => {
      console.log(result);
      this.products = result.products;
      this.dataLoaded = true;
      console.log(this.products);
    });
  }

  addProductToCart(productInfo: any) {
    this.cartService.addProductToCart(productInfo);
  }
}
