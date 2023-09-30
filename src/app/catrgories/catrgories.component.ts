import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catrgories',
  templateUrl: './catrgories.component.html',
  styleUrls: ['./catrgories.component.css']
})
export class CatrgoriesComponent implements OnInit{
  constructor(private _ProductsService:ProductsService){}
  categories:any
  ngOnInit(): void {
    this._ProductsService.getcategory().subscribe({
      next:(data)=>this.categories=data.data
    })
  
    
  
  }
}
