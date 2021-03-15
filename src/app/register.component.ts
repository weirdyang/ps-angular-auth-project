import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './auth.service';
import { UserData } from '../interfaces/UserData';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  title = 'angular project project project';
  registerData: UserData = {
    email: '',
    password: '',
    name: '',
    description: '',
  };
  loggedIn: boolean;
  constructor(
    public apiService: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.loggedIn = false;
  }

  post() {
    this.apiService.registerUser(this.registerData, (result: boolean) => {
      if (result) {
        this.loggedIn = true;
      }
      console.log('my callback');
      this.changeDetectorRef.detectChanges();
      console.log(this.loggedIn);
      if(this.loggedIn){
        this.router.navigate(['users']);
      }
    });
  }
}
