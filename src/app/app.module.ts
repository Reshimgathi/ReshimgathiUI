import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OTPComponent } from './otp/otp.component';

import { AuthService } from './services/auth.service';
import { UserProfileService } from './services/user-profile.service';
import {TokenInterceptorService} from './services/token-interceptor.service';

import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OTPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule    
  ],
  providers: [AuthService, UserProfileService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
