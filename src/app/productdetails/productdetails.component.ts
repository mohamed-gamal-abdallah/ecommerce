import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService){

}
protectid:any
protectdetails:any
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
this.protectid=params.get('id')
  })
   this._ProductsService.getproductsdetails(this.protectid).subscribe({
    next:(response)=>this.protectdetails=response.data
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
      items: 1
    }
  },
  nav: true
}
}
