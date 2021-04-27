import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../shared/cart-item.model';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css'],
})
export class UserCartComponent implements OnInit {
  @Output()
  switchView = new EventEmitter<number>();
  cart: Map<number, CartItem> = new Map();
  dataLoaded: boolean = false;
  emptyCart: boolean = true;
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    if (this.cart.size > 0) this.emptyCart = false;
    this.dataLoaded = true;
  }
  proceedToCheckout() {
    this.switchView.emit(2);
  }
}
