import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ILogin } from '../Models/login';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  loginuser: ILogin = {} as ILogin;
  errorMessage: string = "";
  Token: any = {};
  public jwtHelper: JwtHelperService = new JwtHelperService();
  Username: string = "";
  password: string = "";
  image: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.LoginForm = fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // Check if username and password exist in local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      // Set the form values to the stored values
      this.LoginForm.setValue({
        userName: storedUsername,
        password: storedPassword,
      });
    }
  }

  get UserName() {
    return this.LoginForm.get('userName');
  }

  get Password() {
    return this.LoginForm.get('password');
  }

  loginData() {
    // Get the form values
    const enteredUsername = this.UserName?.value;
    const enteredPassword = this.Password?.value;

    // Check if the entered username and password match what's in local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
      // Successful login
      // You can redirect the user or perform other actions here
      console.log('Login successful');
      this.router.navigate(['/']);
    } else {
      // Invalid login
      this.errorMessage = 'Invalid username or password';
    }
  }
}