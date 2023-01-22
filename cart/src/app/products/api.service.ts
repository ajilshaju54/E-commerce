import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
searchkey= new BehaviorSubject('')
//to share the stream of data
  constructor(private http:HttpClient) { } 
    getAllProduct() {
    return this.http.get('http://localhost:3000/all-products')  //product json data
  }

  //add to wishlist
  addtowishlist(product:any){
    const body={
      id:product.id,
      title:product.title,
      price:product.price,
      description:product.description,
      image:product.image,
      
    }
    return this.http.post('http://localhost:3000/addtowishlist',body)  
  }


//get wishlist details
getwishlist(){
  return this.http.get('http://localhost:3000/getwishlist')  
}

//delete from wishlist
deletewish(id:any){
  return this.http.delete('http://localhost:3000/deletewish/'+id)  
}

}
