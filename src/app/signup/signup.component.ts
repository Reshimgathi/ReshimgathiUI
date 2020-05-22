import { Component, OnInit, ɵConsole, ViewChild, ElementRef } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UserProfileService} from '../services/user-profile.service';
import { SessionHelperService } from '../services/session-helper.service';
import {OTPService} from '../services/otp.service';
import { TalkService, TalkParam } from '../services/talk.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public signupForm : FormGroup;
  public submitted : boolean = false;
  @ViewChild('mobilenumber') mobilenumber: ElementRef;

  constructor(private _FormBuilder : FormBuilder,
    private _Router : Router,
    private _UserProfileService : UserProfileService,
    private _OTPService : OTPService,
    private _SessionHelper : SessionHelperService,
    private _Talk : TalkService,
    private _Injector:Injector) { }

  ngOnInit(): void {
    this.signupForm = this._FormBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),
      gender: new FormControl('', [Validators.required]),
      termsandconditions: new FormControl('', [Validators.required])
    },
    { updateOn: "blur" });
  }
  
  get f(){
    return this.signupForm.controls;
  }

  get mobile(): any { return this.signupForm.get('mobile'); }

  public async SignupSubmit(form) 
  {  
    if(this.signupForm.valid)
    {
      let userRegData = await this.CreateUserProfileData(this.signupForm.value);
      this._OTPService.UserRegData = userRegData 
      console.log("Signup: "+this._OTPService.UserRegData);
      
      //call Generate OTP api.
      let resSendOTP = await this.SendOTP(this.signupForm.value.mobile);
      console.log(this._OTPService.UserRegData);
      if(resSendOTP['responseobj'].isotpsent)
      {
        //send data to OTP form.
        this._Talk.Success(new TalkParam({
          Title: "OTP sent successfully", 
          Text:"Please check your device.", 
          Icon: "success", 
          ConfirmButtonText:"Ok"}));

        this._Router.navigateByUrl('OTP');      
        this.signupForm.reset();
      }
      else if(!resSendOTP['responseobj'].isotpsent && resSendOTP['responseobj'].isprofilealreadyreg)
      {
        this._Talk.Failure(new TalkParam({
          Title: "Mobile number already used.", 
          Text:"This mobile number has already been linked to other profile. Please use other mobile number.", 
          Icon: "error", 
          ConfirmButtonText:"Change Mobile No"}));

          this.mobile.reset();
          this.mobilenumber.nativeElement.focus();
        console.log("//sweet alerts : Profile Already There.You can not use this mobile number. As this is been already registered.");
      }
      else
      {
        this._Talk.Failure(new TalkParam({
          Title: "OTP Generation issue.", 
          Text:"Try after some time.", 
          Icon: "error", 
          ConfirmButtonText:"Ok"}));
        console.log("//sweet alerts : Issues while generating OTP. Try after some time. ");
      } 
    }
    else{
      Object.keys(this.signupForm.controls).forEach(field => { // {1}
        const control = this.signupForm.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });             // {3}
      });
    }  
  }//SignupSubmit ends here.

  /**
   private SendOTP : boolean
   */
  private async SendOTP(channel : string) : Promise<any> 
  {  
    let response = await this._OTPService.SendOTP(channel, true).toPromise();

    return response;
  }

  /**
   * CreateUserProfileData
   */
  private async CreateUserProfileData(formValues) {
        let registration = { 
          FirstName : formValues.firstName, 
          LastName : formValues.lastName,
          MobileNumber : formValues.mobile,
          Gender : formValues.gender,
        }; 
        let loginreq = { 
          Username : formValues.mobile, 
          Password : formValues.password,
          IsVerified : 1,
        };
        
        let userProfileReg = {'registration' : registration,
                          'loginreq' : loginreq };

        return userProfileReg;
  }
}
