import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  constructor(private _ProductsService:ProductsService){}
  brands:any
  ngOnInit(): void {
    this._ProductsService.getbrands().subscribe({
      next:(data)=>this.brands=data.data
    })
  
    
  
  }
}
