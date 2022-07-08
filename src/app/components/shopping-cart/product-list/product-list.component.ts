import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product";
import {WishListService} from "../../../services/wish-list.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList: Product[] = [];
  wishList: number[] = []

  constructor(private productService: ProductService,
              private  wishListService: WishListService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishList();
  }
  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{
      this.productsList = products;
    })
  }

  loadWishList(){
    this.wishListService.getWishList().subscribe(productIds => {
      console.log(productIds)
      this.wishList = productIds
    })

  }
}
