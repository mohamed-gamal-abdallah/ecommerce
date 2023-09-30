import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private _CartService:CartService){}

cartdetails:any=null
 ngOnInit(): void {
   this._CartService.getusercart().subscribe({
    next:(response)=>{
      this.cartdetails=response.data
      },
    error:(err)=>console.log(err)
   })
 }
removeitem(id:string){
this._CartService.removeitem(id).subscribe({
  next:(response)=>{                     
    this.cartdetails=response.data
    console.log(response.data)},
  error:(err)=>console.log(err)
 })
}

updateitemCount(id:string,count:number){
  this._CartService.updatequantiyproduct(id,count).subscribe({
    next:(response)=>{                     
      this.cartdetails=response.data
      console.log(response.data)},
    error:(err)=>console.log(err)
   })
  }


}
