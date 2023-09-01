import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfirmPasswordValidator } from '../CustomValidation/ConfirmPassword';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  RegisterForm:FormGroup;
  errorMessage:string=""
  fileToUpload: File | null = null;
  image:any
  bty:any
  registertion: any;

  constructor(private fb:FormBuilder,private sanitizer: DomSanitizer,private router:Router){
    this.RegisterForm=this.fb.group({
      UserName:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      Email:['',[Validators.required,Validators.pattern('^[A-Za-z0-9.]+@[A-Za-z]+\.[A-Za-z]+$')]],
      Password:['',[Validators.required]],
      ConfirmPassword  :['',[Validators.required]],
      PhoneNumber:['',[Validators.required,Validators.pattern("[0-9]+")
      ]],
       Image:['',[Validators.required]],
    },{validator:[ConfirmPasswordValidator]});

    
  }
 get Username(){
    return this.RegisterForm.get('UserName');
  }
  get Image(){
    return this.RegisterForm.get('Image');
  }
  get PhoneNumber(){
    return this.RegisterForm.get('PhoneNumber');
  }
  get Email(){
    return this.RegisterForm.get('Email');
  }
  get Password(){
    return this.RegisterForm.get('Password');
  }
  get Confirmpassword(){
    return this.RegisterForm.get('ConfirmPassword');
  }
  registerData(){
    localStorage.setItem("username",this.Username?.value);
    localStorage.setItem("password",this.Password?.value);
    this.router.navigate(['/login'])
  }
  
  
}
