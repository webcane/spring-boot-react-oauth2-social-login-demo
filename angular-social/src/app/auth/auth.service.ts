import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TOKEN_KEY: string = 'token';

  constructor() { }

  public setToken(token: string): void {
    if(token != null) {
      localStorage.setItem(this.TOKEN_KEY, token);
      // console.warn('TOKEN: %s', token);
    }
  }

  public logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public isAuthenticated(): boolean {
    return this.getToken() != null;
  }

  public isNotAuthenticated(): boolean {
    return !this.isAuthenticated();
  }
}
