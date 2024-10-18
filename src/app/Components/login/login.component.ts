import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  invalidLogin:boolean = false;
  constructor(private authSer: UserAuthService,
   
  ){

  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  get getUsername(){
    return this.loginForm.controls.username;
  }

  get getPassword(){
    return this.loginForm.controls.password;
  }

  get getUsernameValue(){
    return this.loginForm.value.username;
  }
  get getPasswordValue(){
    return this.loginForm.value.password;
  }



  
  onLogin(){
    if(!this.loginForm.valid){
      return;
    }
    if(this.loginForm.controls.username.valid && this.loginForm.controls.password.valid){
        this.authSer.login(this.getUsernameValue!,this.getPasswordValue!);
      }
      this.invalidLogin = true;
  }
}
