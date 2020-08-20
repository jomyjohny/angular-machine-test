import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorsService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxIiwiaWF0IjoxNTI4NzgyMzA5LCJleHAiOjE1Mjg3ODU5MDl9.lF0NQwxPrK47Lq_EkD_oYjFHO1sAPmAE0UdphOy5M9A';
    const token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI4MyIsInVuaXF1ZV9uYW1lIjoiam9teSIsIlJvbGVJZCI6IjMiLCJyb2xlIjoiU3R1ZGVudCIsIm5iZiI6MTU5NzMwMzUwMywiZXhwIjoxNTk3OTA4MzAzLCJpYXQiOjE1OTczMDM1MDN9.L-ZvNpX_6BKFNX6lLPbGR2DePaI77j3n3zLXDBPNbpY';

    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    return next.handle(req);
  }
}
