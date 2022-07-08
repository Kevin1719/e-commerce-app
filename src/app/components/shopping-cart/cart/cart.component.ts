import { Component, OnInit } from '@angular/core';
import { LinkService } from "src/app/services/link.service";
import { Product } from "../../../models/product";
import {CartService} from "../../../services/cart-service.service";
import {CartItem} from "../../../models/cart-item";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // @ts-ignore
  cartItems = [];
  cartTotal = 0;

  constructor(private link: LinkService, private  carteService: CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadItems();
  }

  handleSubscription(){
    // @ts-ignore
    this.link.getMsg().subscribe((product: Product) => {
      this.loadItems();
    })
  }

  loadItems(){
    this.carteService.getCartItems().subscribe((items: CartItem[])=>{
      // @ts-ignore
      this.cartItems = items;
      this.calculateItemsTotal()
    })
  }

  calculateItemsTotal(){
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      // @ts-ignore
      this.cartTotal += (item.price*item.qte)
    })
  }
}
