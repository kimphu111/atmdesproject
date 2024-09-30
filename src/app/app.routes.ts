import { Routes } from '@angular/router';
import  {CreateCardComponent} from './create-card/create-card.component';
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {LoginComponent} from "./login/login.component";
import {TopupWithdrawComponent} from "./topup-withdraw/topup-withdraw.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path:'login',
    component: LoginComponent
  },

  {
    path:'forgot-password',
    component: ForgotPasswordComponent
  },

  {
    path:'transaction',
    component: TopupWithdrawComponent
  },

  {
    path:'create-card',
    component: CreateCardComponent
  }



];
