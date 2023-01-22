import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishlist:any
  emsg:string=''
  
       
  constructor(private api:ApiService,private router:Router,private cart:CartService) {}

  ngOnInit(): void {
   this.api.getwishlist().subscribe(
    //data
    (data:any)=>{
      this.wishlist = data.products
      if(this.wishlist.length==0){

        this.emsg='empty wishlist'
      }

    },

    //client error
    (data:any)=>{
      this.emsg =data.error.message
    },
   )
  }


  deletewish(product:any){
  this.api.deletewish(product.id).subscribe(
    (result:any)=>{
      alert(result.message)
      window.location.reload()
      // this.router.navigateByUrl('wish-list')
      
    },
    (result:any)=>{
      alert(result.error.message)
    }
  )
  }
addcart(product:any){
  this.cart.addcart(product)
}

}
