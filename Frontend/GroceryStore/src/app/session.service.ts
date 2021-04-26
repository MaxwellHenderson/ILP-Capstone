import { Injectable } from '@angular/core';
import { CartItem } from './shared/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  userId?: number;

  constructor() {}

  setUserId(userId: any) {
    this.userId = userId;
  }
  getUserId(): number {
    return <number>this.userId;
  }
}
