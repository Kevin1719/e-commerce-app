import {Component, Input, OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart-service.service';
import {Product} from "../../../../models/product";
import { LinkService } from "../../../../services/link.service";
import {WishListService} from "../../../../services/wish-list.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  // @ts-ignore
  @Input() productItem: Product;
  // @ts-ignore
  @Input() addedToWishList: boolean = false;

  constructor(private link: LinkService,
              private cartService: CartService,
              private wishListService: WishListService) { }

  ngOnInit(): void {
  }
  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.link.sendMsg(this.productItem)
    })
  }

  handleAddToWishList(){
  this.wishListService.addToWishList(this.productItem.id).subscribe(()=>{
    this.addedToWishList = true
  })
  }
  handleToRemoveWishList(){
    this.wishListService.removeToWishList(this.productItem.id).subscribe(()=>{
      this.addedToWishList = false
    })
  }
}
