import { Component, OnInit } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import { SessionHelperService } from '../services/session-helper.service';

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
              private _AuthService : AuthService,
              private _SessionHelper : SessionHelperService,
              private _Injector:Injector) { }


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
  
  public LoginSubmit(form) : void {    
    if(this.loginForm.valid)
    {
      let loginCreds = { username : this.loginForm.value.username, password : this.loginForm.value.password};
      this._AuthService.LoginVerifyPostCall(loginCreds)
          .subscribe(response => {
            if(response.responseobj.loginstatus)
            {
                this._SessionHelper.SetSessionStorage(
                        this._SessionHelper.TokenKey, 
                        response.responseobj.token);

                this._SessionHelper.SetSessionStorage(
                  this._SessionHelper.UserProfileId, 
                  response.responseobj.userprofileid);
            }

          }, error => {
              console.log("Error "+error);
          });

          this.loginForm.reset();
    }
    else{
      Object.keys(this.loginForm.controls).forEach(field => { // {1}
        const control = this.loginForm.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });            // {3}
      });
    }  
  }//LoginSubmit ends here.

  /**
   * OnLoadCheckLoginStatus
   */
  public OnLoadCheckLoginStatus() : boolean {
    
    return false;
  }

}
