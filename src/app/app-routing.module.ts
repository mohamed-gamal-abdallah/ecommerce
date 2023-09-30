import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CatrgoriesComponent } from './catrgories/catrgories.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:"",component:RegisterComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"cart",component:CartComponent},
  {path:"productdetails/:id",component:ProductdetailsComponent},
  {path:"Catrgories",component:CatrgoriesComponent},
  {path:"brands",component:BrandsComponent},
  {path:"products",component:ProductsComponent},
  {path:"checkout",component:CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
