import { Injectable } from '@angular/core';
import { Cart } from './shared/cart.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  userId?: number;
  userCart?: Cart;
  constructor() {}

  setUserCart(cart: Cart) {
    this.userCart = cart;
  }
  getUserCart(): Cart {
    return <Cart>this.userCart;
  }
  setUserId(userId: any) {
    this.userId = userId;
  }
  getUserId(): number {
    return <number>this.userId;
  }
}
