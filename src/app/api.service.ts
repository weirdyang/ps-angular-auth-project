import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from 'src/interfaces/UserData';

@Injectable()
export class ApiService {
  messages: Array<any> = [];
  test: Array<string>;
  constructor(private http: HttpClient) {
    this.test = ['a', 'b', 'c'];
  }

  getMessages() {
    this.http
      .get<Array<any>>('http://localhost:3000/posts')
      .subscribe((res) => {
        console.log(res);
        // res.forEach((ele) => this.messages.push(ele));
        //console.log(res.json());
        this.messages = res;
      });
  }

  sendUserRegistration(registerData: UserData) {
    this.http
      .post(`http://localhost:3000/register`, registerData)
      .subscribe((res) => {
        console.log(res);
      });
  }

  loginUser(registerData: UserData) {
    this.http
      .post(`http://localhost:3000/login`, registerData)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
