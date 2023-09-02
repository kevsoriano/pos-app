import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(token => {
        if(!token) {
          console.log("here2");
          return next.handle(request);
        };
        const modifiedRequest = request.clone(
          {
            headers: request.headers.set('Authorization', 'Bearer ' + token)
          }
        )
        return next.handle(modifiedRequest);
      })
    )
  }
}
