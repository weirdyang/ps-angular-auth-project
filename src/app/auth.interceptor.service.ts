import { HttpClientModule, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { FunctionCall } from '@angular/compiler';
import { Injectable, Injector } from '@angular/core';
import { UserData } from 'src/interfaces/UserData';
import { AuthService} from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    // use injector instead of inject directly
    // to avoid cyclical dependency
    constructor(private injector: Injector){

    }
    intercept(req: HttpRequest<any>, next: any) {
        const token = this.injector.get(AuthService).token;
        console.log(req);

        const authRequest = req.clone({
            headers: req.headers.set('Authorization', `token ${token}`),
        })
        return next.handle(authRequest);

    }
}