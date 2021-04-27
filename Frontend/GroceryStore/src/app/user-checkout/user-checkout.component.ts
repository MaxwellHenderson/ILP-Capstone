import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import { SessionService } from '../session.service';
import { CartItem } from '../shared/cart-item.model';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css'],
})
export class UserCheckoutComponent implements OnInit {
  cart: Map<number, CartItem> = new Map();
  dataLoaded: boolean = false;
  totalCartValue: number = 0;
  userFunds: number = 10000000;
  constructor(
    public cartService: CartService,
    public orderService: OrderService,
    public sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cart.forEach((item) => {
      this.totalCartValue =
        this.totalCartValue + item.productPrice * item.productQuantity;
    });
    console.log(`Total cart value is ${this.totalCartValue}`);

    this.dataLoaded = true;
  }

  placeOrder() {
    if (this.checkIfEnoughFunds()) {
      console.log('Plaicing order');
      let date = new Date();
      let timestamp: number = date.getTime();
      let order: Order = {
        _id: 10,
        userName: this.sessionService.getUserName(),
        orderDate: timestamp,
        cart: this.cart,
        orderStatus: 'Ordered',
        totalPrice: this.totalCartValue,
        userId: this.sessionService.getUserId(),
      };
      this.orderService.placeOrder(order);
    } else {
      console.log('Insufficent funds');
    }
  }

  //Confirm the user has enough money to make the purchase
  checkIfEnoughFunds(): boolean {
    return this.totalCartValue <= this.userFunds;
  }
}
