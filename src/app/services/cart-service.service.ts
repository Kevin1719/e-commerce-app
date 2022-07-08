import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { HttpClient } from '@angular/common/http';
import { cartUrl } from 'src/config/api';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = []

        for(let item of result){
          let productExists = false;

        for(let i in cartItems) {
          // @ts-ignore
          if (cartItems[i].productId === item.product.id) {
            // @ts-ignore
            cartItems[i].qte++;
            productExists = true
            break;
          }
        }
        if(!productExists){
          // @ts-ignore
          cartItems.push(new CartItem(item.id, item.product))
        }
        }
        return cartItems
      })
    )
  }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl,{product})
  }
}
