import {Injectable} from '@angular/core';
import {Resolve, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable()
export class UserResolver implements Resolve<Observable<User>> {

  constructor(private userService: UserService) {
  }

  resolve(): Observable<User> {
    return this.userService.getCurrentUser();
  }
}
