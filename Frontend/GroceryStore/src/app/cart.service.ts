import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartItem } from './shared/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Map<number, CartItem> = new Map();
  cartSize: Observable<number>;
  private cartSizeSubject: Subject<number>;

  constructor() {
    this.cartSizeSubject = new Subject<number>();
    this.cartSize = this.cartSizeSubject.asObservable();
  }
  addProductToCart(productInfo: any) {
    //If the item is already in the cart, increase the quantity of that item
    if (this.cart.has(productInfo._id)) {
      let item: CartItem = <CartItem>this.cart.get(productInfo._id);
      item.productQuantity = item.productQuantity + 1;
      this.cart.set(productInfo._id, item);
    } else {
      //Otherwise, create the CartItem and add it to the cart
      let item: CartItem = {
        productId: productInfo._id,
        productName: productInfo.productName,
        productPrice: productInfo.productPrice,
        productQuantity: 1,
      };
      this.cart.set(productInfo._id, item);
      this.cartSizeSubject.next(this.cart.size);
    }
  }

  getCart() {
    return this.cart;
  }
}
