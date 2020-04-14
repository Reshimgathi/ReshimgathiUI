import { Component, OnInit } from '@angular/core';
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

  /**
   * OTPSubmit
   */
  public OTPSubmit(form) {
    if(this.otpForm.valid)
    {
      if(this._UserRegData != null)
      {
        //prepare verify otp data object.
        let data = this.PrepareVerifyOTPData(this.otpForm.value);

        //valid user. Place Api call for OTP verification.
        let resVerifyOTP = this.VerifyOTP(data);
        if(resVerifyOTP['responseobj'].isotpverified)
        {
          //Place api call for user registration.
          let resCreateUserProfile = this.CreateUserProfile(this._UserRegData);
          if(resCreateUserProfile['responseobj'].isprofilesaved)//user registration successful
          {
            this._Talk.Success(new TalkParam({
              Title: "User Profile Created", 
              Text:"Welcome to Reshimgathi Matrimony !!", 
              Icon: "success", 
              ConfirmButtonText:"Welcome!"}));
            console.log("profile created.");
            //redirect to dashboard page. 
          }
          else if(!resCreateUserProfile['responseobj'].isprofilesaved && resCreateUserProfile['responseobj'].isprofilealreadyreg)
          {
            this._Talk.Failure(new TalkParam({
              Title: "Profile Already There", 
              Text:"You can not use this mobile number. As this is been already registered.", 
              Icon: "error", 
              ConfirmButtonText:"Ok"}));
            console.log("//sweet alerts : Profile Already There.You can not use this mobile number. As this is been already registered.");    
          }
          else{
            this._Talk.Failure(new TalkParam({
              Title: "Server Error", 
              Text:"User Registration Failed.", 
              Icon: "error", 
              ConfirmButtonText:"Ok"}));
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
          console.log("//sweet alerts: OTP verification failed. Please try again registering with valid mobile number.");
        }
      }
      else{
        this._Talk.Failure(new TalkParam({
          Title: "OTP is not registered.", 
          Text:"First do User Profile Registration", 
          Icon: "error", 
          ConfirmButtonText:"Ok"}));
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

  private PrepareVerifyOTPData(otp : string) : any {
    let data = {
            mobile:this._UserRegData.registration.mobile,
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
