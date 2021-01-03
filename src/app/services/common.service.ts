import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
}
