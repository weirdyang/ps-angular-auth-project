import { Component } from '@angular/core';
import { AuthService} from './auth.service';
import { UserData } from '../interfaces/UserData';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
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
        this.apiService.registerUser(this.registerData);
  }
}
