import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

getcategory():Observable<any>{
return  this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')

}


getproducts():Observable<any>{
  return  this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  
  }

  getproductsdetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getbrands():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }



}

