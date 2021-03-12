import { Component } from '@angular/core';
import { AuthService} from './auth.service';
import { UserData } from '../interfaces/UserData';

@Component({
  selector: 'register',
  template: `
  <form>
  <mat-form-field>
      <input [(ngModel)]="registerData.email" name="email" matInput placeholder="email" type="email">
  </mat-form-field>
  <mat-form-field>
      <input [(ngModel)]="registerData.password" name="password" matInput placeholder="password" type="password">
  </mat-form-field>
  <br>
  <mat-form-field>
      <input [(ngModel)]="registerData.name" name="name" matInput placeholder="name">
  </mat-form-field>
  <br>
  <mat-form-field style="width: 100%">
      <textarea [(ngModel)]="registerData.description" name="description" matInput placeholder="description"></textarea>
  </mat-form-field>
  <br>
  <button (click)="post()" mat-raised-button color="primary">Register</button>
</form>`,
})

export class RegisterComponent {
  title = 'angular project project project';
  registerData:UserData = {
      email: '',
      password: '',
      name: '',
      description: '',
  };

  constructor(public apiService: AuthService){}

    post(){
        console.log(this.registerData);
        this.apiService.registerUser(this.registerData);

  }
}
