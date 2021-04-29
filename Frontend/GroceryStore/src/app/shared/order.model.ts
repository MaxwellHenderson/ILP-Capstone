import { CartItem } from './cart-item.model';

export interface Order {
  _id?: number;
  userName: string;
  orderDate: number;
  cart: Map<number, CartItem>;
  orderStatus: string;
  totalPrice: number;
  userId: number;
  reasonForCancellation?: string;
}

export class OrderReport {
  constructor(
    public _id: Number,
    public orderDate: Date,
    public orderStatus: string,
    public totalPrice: Number
  ) {}
}

export class User {
  constructor(
    public _id: number,
    public userName: string,
    public userLastName: string,
    public userDob: Date,
    public userAddress: string,
    public userEmail: string,
    public userPassword: string
  ) {}
}

export class Product {
  constructor(
    public productName: string,
    public productPrice: number,
    public quantity: number
  ) {}
}
