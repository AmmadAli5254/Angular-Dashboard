import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterAuthService } from '../auth/router-auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private routerAuthService: RouterAuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.routerAuthService.isLoggedIn) {
      if (!request.url.endsWith('auth/signup') || !request.url.endsWith('auth/signin')) {
        let token = this.routerAuthService.getToken();
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });

        return next.handle(request);
      }
    }
    return next.handle(request);
  }
}
