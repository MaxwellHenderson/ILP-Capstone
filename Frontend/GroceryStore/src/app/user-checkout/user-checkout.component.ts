import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';
import { SessionService } from '../session.service';
import { CartItem } from '../shared/cart-item.model';
import { Order } from '../shared/order.model';
import { Product } from '../shared/product.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css'],
})
export class UserCheckoutComponent implements OnInit {
  cart: Map<number, CartItem> = new Map();
  outOfStockItems: Product[] = [];
  outOfStock: boolean = false;
  dataLoaded: boolean = false;
  msg?: string;
  totalCartValue: number = 0;
  userFunds: number = 10000000;
  constructor(
    public cartService: CartService,
    public orderService: OrderService,
    public sessionService: SessionService,
    public userService: UserService,
    public productService: ProductService
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
    //Verify the user has funds
    this.userService
      .getFunds(this.sessionService.getUserId())
      .subscribe((result: any) => {
        if (result.funds >= this.totalCartValue) {
          //We now know they have enough money. Now check if there is enough product in stock
          //Create array of product ids to query backend
          console.log('Enough money');
          let cartItemIds: number[] = [];
          this.cart.forEach((item) => {
            cartItemIds.push(item.productId);
          });
          this.productService
            .getMultpileProducts(cartItemIds)
            .subscribe((result: any) => {
              //The products come back as an array
              let dbProducts = result.products;
              let enoughStock = true;

              //Verify that the number of items in the cart is not greater than what is available
              dbProducts.forEach((product: any) => {
                if (
                  product.quantity < this.cart.get(product._id)!.productQuantity
                ) {
                  this.outOfStockItems.push(product);
                  enoughStock = false;
                }
              });
              //Finally, if we know there is enough stock we will place the order
              if (enoughStock) {
                console.log('Placing order');
                let date = new Date();
                let timestamp: number = date.getTime();
                let order: Order = {
                  userName: this.sessionService.getUserName(),
                  orderDate: timestamp,
                  cart: this.cart,
                  orderStatus: 'Ordered',
                  totalPrice: this.totalCartValue,
                  userId: this.sessionService.getUserId(),
                };
                this.orderService.placeOrder(order);
                //Subtract the cost of cart from users funds
                this.userService.subtractFunds(
                  this.totalCartValue,
                  this.sessionService.getUserId()
                );

                //Reduce quantity of products ordered
                this.productService.reduceManyProductQuantity(this.cart);
              } else {
                //Show the user that items are out of stock
                this.outOfStock = true;
              }
            });
        } else {
          this.msg = "You don't have enough funds.";
          console.log('Insufficent funds');
        }
      });
  }

  //Confirm the user has enough money to make the purchase
  checkIfEnoughFunds(): boolean {
    return this.totalCartValue <= this.userFunds;
  }
}
