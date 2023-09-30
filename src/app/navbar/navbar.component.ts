import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


islogin:boolean=false

cartNumber:number=0;

logout(){
  this.islogin=false
  this._AuthService.logout()
}

constructor(private _AuthService:AuthService,private _CartService:CartService){
_CartService.numberofcartitems.subscribe({
  next:(data)=> this.cartNumber=data
})

  _AuthService.userData.subscribe({
    next:()=>{
      if(_AuthService.userData.getValue()!==null){
        this.islogin=true
      }else{
        this.islogin=false
      }
    }
  })
}
}
