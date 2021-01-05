import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthResolver implements Resolve<boolean> {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let token = route.queryParams['token'];

    if (token != null) {
      this.authService.setToken(token);
      console.log('Obtained Access token');

      // not logged in so redirect to login page with the return url
      // this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      this.router.navigate(['/profile']);
    }

    return this.authService.isAuthenticated();
  }
}
