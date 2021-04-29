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
    public cart:Map<number,CartItem>,
    public totalPrice: Number
  ) {}
}



