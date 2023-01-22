import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductComponent implements OnInit{    //oninit is the lifecycle of angular..it shows the 1st stage
 searchterm: string='';                                                          //of a components we created
  allproducts:any=[]
  constructor(private api:ApiService,private cart:CartService
    
    ) { }                                 

  ngOnInit(): void {
    this.api.getAllProduct().subscribe(
      (data:any)=>{
        this.allproducts=data.products
        console.log(this.allproducts);
             //products s the array name we got in thunder
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }

  addtowishlist(product:any){
    this.api.addtowishlist(product).subscribe(
      (result:any)=>{
        alert(result.message) //product added successfully
      },
      (result:any)=>{
        alert(result.error.message);  //already exist
      },
        )
      }
    
addcart(product:any){
  this.cart.addcart(product)
}

  }


