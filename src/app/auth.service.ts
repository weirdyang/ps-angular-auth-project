// http has been deprecated, so only httpclient avail
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from 'src/interfaces/UserData';

@Injectable()
export class AuthService {
  path = 'http://localhost:3000/auth';

  TOKEN_KEY = 'token';

  constructor(private http: HttpClient) {}

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  registerUser(registerData: UserData) {
    this.http
      .post<any>(`${this.path}/register`, registerData)
      .subscribe((res) => {
        this.saveToken(res.token);
        console.log(res);
      });
  }

  loginUser(loginData: UserData) {
    this.http.post<any>(`${this.path}/login`, loginData).subscribe((res) => {
      this.saveToken(res.token);
      console.log(res.token);
    });
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}
