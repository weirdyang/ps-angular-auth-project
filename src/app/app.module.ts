import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { MessagesComponent } from './messages.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './auth.interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes = [
  {
    path: '',
    component: PostComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatListModule,
  ],
  providers: [
    ApiService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
