import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class LoadingInterceptorService implements HttpInterceptor {

    constructor(private loader: LoadingService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        this.loader.startLoading();

        return next.handle(request).pipe(
            finalize(() => {
                this.loader.stopLoading();
            }))
    };
}