import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private _CartService:CartService)
  {}

  cartid:any
shippingaderr:FormGroup=new FormGroup({
  details:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null)
})


ngOnInit(): void {
  this._CartService.getusercart().subscribe({
   next:(response)=>{
     this.cartid=response.data._id

     console.log(this.cartid)},
   error:(err)=>console.log(err)
  })
}




handlesubmit(shippingaderr:FormGroup){

  this._CartService.onlinepayment(`${this.cartid}`,shippingaderr.value).subscribe ({
    next:(response)=>{                     
    window.location.href=response.session.url 
    },
  error:(err)=>console.log(err)
})  
}
}
