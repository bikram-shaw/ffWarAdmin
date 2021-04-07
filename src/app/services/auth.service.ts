import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = window["cfgApiBaseUrl"];

  constructor(private http: HttpClient,private router: Router,private toastController:ToastController) { }

  login(data):Observable<any>{
    return this.http.post(this.url+"/auth/login/", data);
  }

  storeUserData(userData) {

      localStorage.setItem("adminData", JSON.stringify(userData));
      this.router.navigate(["/home/create-game"]);

      
  }
  isLoggedIn() {
    
      let userData = JSON.parse(localStorage.getItem("adminData"));
      if (userData != null) {
        this.router.navigate(["/home/create-game"]);
      } else {
        this.router.navigate(["/"]);
      
    }
  }
  logOut() {
      localStorage.removeItem("adminData");
      this.router.navigate(["/"]);
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
