import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token'); // auth is provided via constructor.
    req = req.clone({
      headers: req.headers.append('Content-Type', 'application/json')
    })
    if (token) {
      // Logged in. Add Bearer token.
      return next.handle(
        req.clone({
          headers: req.headers.append('Authorization', 'Bearer ' + token)
        })
      );
    }
    // Not logged in. Continue without modification.
    return next.handle(req);
  }
}