import { Component } from '@angular/core';
import { ApiService} from './api.service';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular project project project';

  constructor(public authService: AuthService, private router: Router){
    if (!authService.isAuthenticated) {
      router.navigate(['register']);
    }
  }
}
