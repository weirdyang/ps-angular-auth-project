import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/interfaces/UserData';
import { ApiService } from './api.service';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    profile: UserData = {};
    constructor(private apiService: ApiService, private route: ActivatedRoute) { }

    ngOnInit(){
        let id = this.route.snapshot.params.id;
        console.log(id);
        this.apiService
        .getProfile(id)
        .subscribe(profile => {
            this.profile = profile;
            console.log(profile);
        });
      }
}
