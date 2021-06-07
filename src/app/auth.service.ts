// http has been deprecated, so only httpclient avail
import { HttpClient } from '@angular/common/http';
import { FunctionExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { UserData } from 'src/interfaces/UserData';
import { environment } from '../environments/environment';
@Injectable()
export class AuthService {
  path = `${environment.path}/auth`;

  TOKEN_KEY = 'token';

  loggedIn: boolean;
  constructor(private http: HttpClient) {
    this.loggedIn = false;
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get isLoggeddIn(){
    return this.loggedIn;
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  registerUser(registerData: UserData, callBack: Function) {
    this.http
      .post<any>(`${this.path}/register`, registerData)
      .subscribe((res) => {
        if (res.token) {
          this.saveToken(res.token);
          this.loggedIn = true;
          console.log(this.loggedIn, 'log');
        } else {
          console.log(res);
          this.loggedIn = false;

        }
        if(callBack){
          callBack(this.loggedIn);
        }
        console.log(callBack);
      });
  }

  loginUser(loginData: UserData, callBack: Function) {
    this.http.post<any>(`${this.path}/login`, loginData).subscribe(
      (res) => {
      if (res.token) {
        this.loggedIn = true;
        this.saveToken(res.token);
      } else {
        this.loggedIn = false;
      }
      console.log(res.token);
    },
    (err) => console.error(err),
    () => callBack ? callBack(this.loggedIn): console.log('completed'));
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}
