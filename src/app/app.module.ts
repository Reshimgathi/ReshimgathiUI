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
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreheaderComponent } from './preheader/preheader.component';
import { NextheaderComponent } from './nextheader/nextheader.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { PersonalComponent } from './editprofile/personal/personal.component';
import { HoroscopeComponent } from './editprofile/horoscope/horoscope.component';
import { EducationComponent } from './editprofile/education/education.component';
import { AddressComponent } from './editprofile/address/address.component';
import { FamilyComponent } from './editprofile/family/family.component';
import { ExpectationComponent } from './editprofile/expectation/expectation.component';
import { PhotosComponent } from './editprofile/photos/photos.component';
import { PaymentComponent } from './editprofile/payment/payment.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GroomsComponent } from './grooms/grooms.component';
import { BridesComponent } from './brides/brides.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { FavouritesComponent } from './favourites/favourites.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OTPComponent,
    DashboardComponent,
    PreheaderComponent,
    NextheaderComponent,
    EditprofileComponent,
    PersonalComponent,
    HoroscopeComponent,
    EducationComponent,
    AddressComponent,
    FamilyComponent,
    ExpectationComponent,
    PhotosComponent,
    PaymentComponent,
    ChangepasswordComponent,
    ContactusComponent,
    GroomsComponent,
    BridesComponent,
    SearchComponent,
    AccountComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    BrowserAnimationsModule, 
    DataTablesModule
  ],
  exports: [
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
