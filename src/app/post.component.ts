import { Component } from '@angular/core';
import { ApiService} from './api.service';

@Component({
  selector: 'post',
  templateUrl: 'post.component.html'
})
export class PostComponent {
  postMessage: string;
  constructor( private apiService: ApiService) {
    this.postMessage = ''
  }
  post(){
    console.log(this.postMessage);
    this.apiService.postMessage({ message: this.postMessage});
  }
}
