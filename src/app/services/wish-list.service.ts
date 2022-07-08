import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { wishListUrl } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private http: HttpClient) { }

  getWishList(){
    return this.http.get(wishListUrl).pipe(
      // @ts-ignore
      map((result: any[]) => {
        // @ts-ignore
        let productIds = []
        // @ts-ignore
        result.forEach(item => productIds.push(item.id))
        // @ts-ignore
        return productIds;
      })
    )
  }

  // @ts-ignore
  addToWishList(productId){
    return this.http.post(wishListUrl, {id: productId})
  }

  // @ts-ignore
  removeToWishList(productId){
    return this.http.delete(wishListUrl + '/' + productId)
  }
}
