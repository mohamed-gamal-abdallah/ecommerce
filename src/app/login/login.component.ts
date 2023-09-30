import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators}from'@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _router:Router){}
  isloading:boolean=false;
  apierror:string=''
 loginForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
 })

handlelogin(loginForm:FormGroup){
  this.isloading=true;
  if(loginForm.valid){
    this._AuthService.login(loginForm.value).subscribe({
      next:(response)=>{
        if(response.message==="success"){
          localStorage.setItem('userToken',response.token)
          this._AuthService.decodeuserData();
          this.isloading=false
          this._router.navigate(['/home'])
        }
      },error:(err)=>{
        this.isloading=false
      this.apierror=err.error.errors.msg; 
      
      }
    })
  }
}

}
