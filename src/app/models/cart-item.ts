import { Product } from "./product";

export class CartItem {
  id: number = 0;
  productId: number = 0;
  productName: string = '';
  qte: number = 0;
  price: number = 0;

  constructor(id: number, product:Product,qte: number = 1){
    this.id = id;
    this.productId = product.id;
    this.productName = product.name;
    this.price = product.price
    this.qte = qte;
  }
}
