import { Component } from '@angular/core';
import { UserData } from 'src/interfaces/UserData';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
    loginData:UserData = {}

    constructor(private apiService: AuthService) { }

    post() {
        this.apiService.loginUser(this.loginData)
    }
}
