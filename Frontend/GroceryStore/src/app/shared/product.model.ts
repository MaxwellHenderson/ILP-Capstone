export interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
}

export class ProductReport {
  constructor(
    public productName: string,
    public productPrice: number,
    public quantity: number
  ) {}
}
