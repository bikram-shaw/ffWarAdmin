import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenInterceptor } from '../services/token.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mobile:any;
  password:any;
  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit() {
    this.authService.isLoggedIn();
  }

  login(){
    const data=new FormData();
    data.append("mobile",this.mobile)
    data.append("password",this.password)
    this.authService.login(data).subscribe(res=>{
      this.authService.presentToast("Login Success");
      this.authService.storeUserData(res);
   },error=>{
     this.authService.presentToast(error);
   })
  }

}
