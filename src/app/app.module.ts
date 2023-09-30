import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component'; 
import{BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CatrgoriesComponent } from './catrgories/catrgories.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    ProductdetailsComponent,
    CatrgoriesComponent,
    BrandsComponent,
    ProductsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
