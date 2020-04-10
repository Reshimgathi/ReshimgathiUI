import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted : boolean = false;

  constructor(private _FormBuilder : FormBuilder,
              private _AuthService : AuthService) { }


  ngOnInit(): void {
    this.loginForm = this._FormBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)])
    },
    { updateOn: "blur" });
  }

  get f(){
    return this.loginForm.controls;
  }
  
  LoginSubmit(form){
    let loginCreds = { username : this.loginForm.value.username, password : this.loginForm.value.password};
    if(this.loginForm.valid)
    {
      this._AuthService.LoginVerifyPostCall(loginCreds)
          .subscribe(response => {
            console.log(response);
          }, error => {
              console.log("Error");
          });
    }  
  }
}
