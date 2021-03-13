import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from 'src/interfaces/UserData';

@Injectable()
export class ApiService {
  messages: Array<any> = [];
  users: Array<UserData> = [];
  test: Array<string>;
  path: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {
    this.test = ['a', 'b', 'c'];
  }

  getMessages(userId: string) {
    this.http
      .get<Array<any>>(`${this.path}/posts/${userId}`)
      .subscribe((res) => {
        console.log(res);
        // res.forEach((ele) => this.messages.push(ele));
        //console.log(res.json());
        this.messages = res;
      });
  }

  postMessage(message: any) {
    this.http
      .post<Response>(`${this.path}/posts`, message)
      .subscribe((res) => {
        console.log(res);
        // res.forEach((ele) => this.messages.push(ele));
        //console.log(res.json());
      });
  }
  getUsers() {
    this.http
      .get<Array<UserData>>(`${this.path}/users`)
      .subscribe((res) => {
        console.log(res);
        // res.forEach((ele) => this.messages.push(ele));
        //console.log(res.json());
        this.users = res;
      });
  }
  getProfile(id: string) {
    return this.http
      .get<UserData>(`${this.path}/profile/${id}`);
  }
}
