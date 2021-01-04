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
