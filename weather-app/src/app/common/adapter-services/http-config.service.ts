import { Injectable } from '@angular/core';
import { HttpClient,
         HttpInterceptor,
         HttpHeaders,
         HttpRequest,
         HttpHandler,
         HttpEvent,
         HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpConfigService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);
    const token = '8822b206bd95f032fa34951362e6e5b3';
    const newRequest = request.clone({headers: request.headers.set('Auterization', token)});
    return next.handle(newRequest);
  }
}
