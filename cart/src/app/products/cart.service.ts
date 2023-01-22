import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cartarray:any=[]  //because more than one product go to cart from allproduct..so use array
cartlist= new BehaviorSubject([])  //for all data passing

  constructor() { }

  //add to cart
  addcart(product:any){
    this.cartarray.push(product);
    this.cartlist.next(this.cartarray)
    console.log(this.cartlist);
    
  }
}
