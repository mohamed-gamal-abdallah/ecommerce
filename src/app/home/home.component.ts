import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private _ProductsService:ProductsService, private _CartService:CartService){}

categories:any
products:any
ngOnInit(): void {
  this._ProductsService.getcategory().subscribe({
    next:(data)=>this.categories=data.data
  })

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




customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items:6
    }
  },
  nav: true
}

customOptions1: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items:1
    }
  },
  nav: true
}

}

