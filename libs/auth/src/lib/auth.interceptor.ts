import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage && localStorage.getItem('token')) {
      const authReq = req.clone({
        headers: req.headers.set(
          'authorization',
          `Bearer ${localStorage.getItem('token')}`
        )
      });
      console.log(authReq);
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
