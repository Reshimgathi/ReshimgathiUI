import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserProfileService} from '../services/user-profile.service';
import {OTPService} from '../services/otp.service';
import { SessionHelperService } from '../services/session-helper.service';
import { TalkService, TalkParam } from '../services/talk.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OTPComponent implements OnInit {

  public otpForm : FormGroup;
  public submitted : boolean = false;
  public SentSignUpFormValues : FormBuilder = null;
  private _UserRegData : any = null;
  @ViewChild('otp') otp: ElementRef;

  constructor(private _FormBuilder : FormBuilder,
    private _UserProfileService : UserProfileService,
    private _OTPService : OTPService,
    private _Talk : TalkService,
    private _SessionHelper : SessionHelperService,
    private _Injector:Injector) { }

  ngOnInit(): void {
    //Receive SignupForm post data here. 
    if(this._OTPService.UserRegData != null)
    {
      this._UserRegData = this._OTPService.UserRegData;
    }
    
    this.otpForm = this._FormBuilder.group({
      otp: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]), //Validators.pattern('^[0-9]$')
    },
    { updateOn: "blur" });
  }

  get f(){
    return this.otpForm.controls;
  }

  get otpControl(): any { return this.otpForm.get('otp'); }

  /**
   * OTPSubmit
   */
  public async OTPSubmit(form) {
    if(this.otpForm.valid)
    {
      if(this._UserRegData != null)
      {
        //prepare verify otp data object.
        let data = await this.PrepareVerifyOTPData(this.otpForm.value.otp);
        console.log(data);

        //valid user. Place Api call for OTP verification.
        let resVerifyOTP = await this.VerifyOTP(data);
        if(resVerifyOTP['responseobj'].isotpverified)
        {
          //Place api call for user registration.
          let resCreateUserProfile = await this.CreateUserProfile(this._UserRegData);
          if(resCreateUserProfile['responseobj'].isprofilesaved)//user registration successful
          {
            this._Talk.Success(new TalkParam({
              Title: "User Profile Created", 
              Text:"Welcome to Reshimgathi Matrimony !!", 
              Icon: "success", 
              ConfirmButtonText:"Welcome!"}));

            this.otpControl.reset();
            console.log("profile created.");
            //redirect to dashboard page. 
          }
          else{
            this._Talk.Failure(new TalkParam({
              Title: "Server Error", 
              Text:"User Registration Failed.", 
              Icon: "error", 
              ConfirmButtonText:"Ok"}));
            
            this.otpControl.reset();
            console.log("//sweet alerts: Server error while registering the user profile. Try agian."); 
          }
        }
        else
        {
          this._Talk.Failure(new TalkParam({
            Title: "OTP verification failed.", 
            Text:"Please, provide correct OTP.", 
            Icon: "error", 
            ConfirmButtonText:"Ok"}));

          this.otpControl.reset();
          console.log("//sweet alerts: OTP verification failed. Please try again registering with valid mobile number.");
        }
      }
      else{
        this._Talk.Failure(new TalkParam({
          Title: "OTP is not registered.", 
          Text:"First do User Profile Registration", 
          Icon: "error", 
          ConfirmButtonText:"Ok"}));
        
        this.otpControl.reset();
        console.log("//Sweet alerts: First do User Profile Registration and then come here."); 
      }
    }
    else
    {
      Object.keys(this.otpForm.controls).forEach(field => { 
        const control = this.otpForm.get(field);            
        control.markAsTouched({ onlySelf: true });          
      });
    }  
  }

  private async PrepareVerifyOTPData(otp : string) {
    let data = {
            mobile:this._UserRegData['registration'].MobileNumber,
            email:"",
            otp:otp      
    }
    return data;
  }

  /**
   private VerifyOTP : boolean
   */
  private async VerifyOTP(data : any) : Promise<any> 
  {
    let response = await this._OTPService.VerifyOTP(data).toPromise();

    return response;
  }

  /**
   * CreateUserProfilePostMobileOrEmailVerification
   */
  private async CreateUserProfile(userProfileReg) : Promise<any> {
    let response = this._UserProfileService.UserRegistrationPhaseI(userProfileReg).toPromise();
    
    return response;
  }
}
