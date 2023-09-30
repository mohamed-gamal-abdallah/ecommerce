import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private _AuthService:AuthService,private toastr: ToastrService,private _router:Router ){}
isloading:boolean=false;
  apierror:string=''
registerform:FormGroup=new FormGroup({
  name: new FormControl(null,[Validators.required,Validators.minLength(3)]) ,
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
},{validators:this.repasswordMatch})


repasswordMatch(registerform:any){
  let passwordcotrol=registerform.get('password')
  let repasswordcotrol=registerform.get('rePassword')

  if(passwordcotrol.value===repasswordcotrol.value){
    return null
  }
  else {
    repasswordcotrol.setErrors({password:'password and repassword not match'})
    return {password:'password and repassword not match'}
  }
}

handleRegister(registerform:FormGroup){
  this.isloading=true;
  if(registerform.valid){
    this._AuthService.register(registerform.value).subscribe({
      next:(response)=>{
         this.isloading=false
        if(response.message==="success"){
          this._router.navigate(['/login'])
        }
      },error:(err)=>{
        this.isloading=false
      this.apierror=err.error.errors.msg; 
      
      }
    })
  }
}
}




