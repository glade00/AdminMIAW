import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { request } from 'http';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService: TokenStorageService) {
    if (this.tokenStorageService.hasToken()) {
      let newHeaders = request.headers;
      newHeaders = newHeaders
        .set('Authorization', 'Bearer ' +
          this.tokenStorageService.getToken());
      request = request.clone({ headers: newHeaders });
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
