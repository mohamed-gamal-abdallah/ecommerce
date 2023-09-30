import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {




numberofcartitems=new BehaviorSubject(0)

  constructor(private _HttpClient:HttpClient) { 
    this.getusercart().subscribe({
      next:(data)=>{
         this.numberofcartitems.next(data.numOfCartItems)
        console.log(data.numOfCartItems
          )},
      error:(error)=>console.log(error)
    })

    
  }
headers:any={
  token:localStorage.getItem('userToken')
}

  addTocart(productId:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {
    productId:productId},{
      headers:this.headers
    }
    ) 
      
  }


  getusercart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
    {
      headers:this.headers
    }
    ) 
      
  }


  removeitem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      headers:this.headers
    }
    ) 
      
  }


  updatequantiyproduct(id:string,count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      count:count},{
        headers:this.headers
      }
    ) 
      
  }


  onlinepayment(cartid:string,shipingadderss:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=http//:localhost:4200/home`,
    {
      shippingaderr:shipingadderss
      
      },{
        headers:this.headers
      }
    ) 
      
  }
}
