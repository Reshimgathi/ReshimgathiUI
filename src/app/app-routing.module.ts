import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OTPComponent } from './otp/otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BridesComponent } from './brides/brides.component';
import { GroomsComponent } from './grooms/grooms.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'OTP', component: OTPComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Edit', component: EditprofileComponent },
  { path: 'ChangePassword', component: ChangepasswordComponent },
  { path: 'ContactUs', component: ContactusComponent },
  { path: 'Brides', component: BridesComponent },
  { path: 'Grooms', component: GroomsComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Account', component: AccountComponent },
  { path: 'Favourites', component: FavouritesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),      
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
