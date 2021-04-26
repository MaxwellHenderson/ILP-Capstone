import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../shared/cart-item.model';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css'],
})
export class UserCartComponent implements OnInit {
  cart: Map<number, CartItem> = new Map();
  dataLoaded: boolean = false;
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log('Cart');
    console.log(this.cart);
    this.dataLoaded = true;
  }
}
