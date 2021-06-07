import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/interfaces/UserData';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
    loginData:UserData = {}

    constructor(private apiService: AuthService, private router: Router) { }

    post() {
        this.apiService.loginUser(this.loginData, (result: boolean) => {
          result ? this.router.navigate(['users']) : this.router.navigate(['register'])
        })
    }
}
