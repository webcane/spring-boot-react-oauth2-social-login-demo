import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    // resolve: {
    //   isAuthenticated: LoginAuthResolver
    // }
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  // otherwise redirect to home
  { path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
