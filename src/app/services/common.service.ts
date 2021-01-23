import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private alertController:AlertController) { }
  async alertService(msg) {
    const alert = await this.alertController.create({
      
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  upcomingMatch=new Subject()
}
