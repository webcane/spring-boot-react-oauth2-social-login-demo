import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {ApiService} from '../services/api.service';
import {distinctUntilChanged} from 'rxjs/operators';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser$ = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUser$.asObservable().pipe(distinctUntilChanged());

  constructor(private api: ApiService) {
  }

  login(email:string, password:string ) {
    return this.api.post<User>('/auth/login', {email, password});
      // this is just the HTTP call,
      // we still need to handle the reception of the token
     // .shareReplay();
  }

  public getCurrentUser(): Observable<User> {
    this.api.get('/user/me').subscribe(
      (usr) => {
        console.log(usr);
        this.currentUser$.next(usr);
      }, (error) => {
        console.log(error);
      }
    );
    return this.currentUser;
  }
}
