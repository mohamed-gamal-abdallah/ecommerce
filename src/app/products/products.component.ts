import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private _ProductsService:ProductsService, private _CartService:CartService){}

  products:any

  ngOnInit(): void {
    this._ProductsService.getproducts().subscribe({
      next:(data)=>this.products=data.data
    })
  
  }



  addproduct(x:string){
    this._CartService.addTocart(x).subscribe({
  
      next:(response)=>{
        this._CartService.numberofcartitems.next(response.numOfCartItems)
        console.log(response)},
      error:(err)=>console.log(err)
    })
  }
}
