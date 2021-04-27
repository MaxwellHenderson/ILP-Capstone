import { Injectable } from '@angular/core';
import { CartItem } from './shared/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Map<number, CartItem> = new Map();

  constructor() {}
  addProductToCart(productInfo: any) {
    //If the item is already in the cart, increase the quantity of that item
    if (this.cart.has(productInfo.productId)) {
      let item: CartItem = <CartItem>this.cart.get(productInfo.productId);
      item.productQuantity = item.productQuantity + 1;
      this.cart.set(productInfo.productId, item);
    } else {
      //Otherwise, create the CartItem and add it to the cart
      let item: CartItem = {
        productId: productInfo.productId,
        productName: productInfo.productName,
        productPrice: productInfo.productPrice,
        productQuantity: 1,
      };
      this.cart.set(productInfo.productId, item);
    }
  }

  getCart() {
    return this.cart;
  }
}
