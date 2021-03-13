import { Component } from '@angular/core';
import { ApiService} from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'messages',
  template: `
  <div *ngFor="let message of apiService.messages">
    <mat-card>{{ message.message }}</mat-card>
  </div>
`,
})
export class MessagesComponent {
  messages: Array<any> = [];

  constructor( public apiService: ApiService, private route: ActivatedRoute) {}
  ngOnInit(){
    const id  = this.route.snapshot.params.id;
    this.apiService.getMessages(id);
    this.messages = this.apiService.messages;
  }
}
