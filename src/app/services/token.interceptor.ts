import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: any;
  loaderToShow: any = null;
  isLoading: boolean = false;
  loaderTimeout: any;

  constructor(
    private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var user = JSON.parse(localStorage.getItem("adminData"));
    
    if (user) {
      request = request.clone({
        setHeaders: {
          Authorization: "JWT " + user["token"],
         
        },
      });
      console.log(user["token"]);
    }

    /*if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }*/

    request = request.clone({
      headers: request.headers.set("Accept", "application/json"),
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          if (error.error.success === false) {
            this.presentToast("Login failed");
          }
          return throwError(error);
        } else if (error.status === 400) {
          let error_message = error.error.message;
          

          return throwError(error_message);
        } else {
          return throwError(error);
        }
      })
    );
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }
}