import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  private _getMessageFromStatus(initialMessage: string, status: number): string {
    if (status < 100 || status >= 600) {
      return `${initialMessage} ${status} status. I don't what it means!`;
    }

    if (status < 200) {
      return `${initialMessage} ${status} status. It's a web socket!`;
    }
    if (status < 300) {
      return `${initialMessage} ${status} status. It's a success message!`;
    }
    else if (status < 400) {
      return `${initialMessage} ${status} status. It's a redirect!`;
    }
    else if (status < 500) {
      return `${initialMessage} ${status} status. It's a client-side error!`;
    }
    else {
      return `${initialMessage} ${status} status. It's a error-side error!`;
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const initialMessage = 'Hello, I\'m the Interceptor, and I\m getting a ';
    alert(this._getMessageFromStatus(initialMessage, +request.params.get('status')));

    return next.handle(request);
  }


}
