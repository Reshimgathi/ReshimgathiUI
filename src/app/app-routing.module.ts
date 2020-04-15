import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OTPComponent } from './otp/otp.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'OTP', component: OTPComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),      
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
