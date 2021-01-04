import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {AuthResolver} from './auth/auth-resolver.service';
import {ProfileComponent} from './profile/profile.component';
import {UserResolver} from './profile/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      isAuthenticated: AuthResolver
    }
  },
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
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: {
      currentUser: UserResolver
    }
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
