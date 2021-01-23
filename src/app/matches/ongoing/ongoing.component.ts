import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResultEntryPage } from 'src/app/result-entry/result-entry.page';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrls: ['./ongoing.component.scss'],
})
export class OngoingComponent implements OnInit {
  ongoingMatchData: any;
  noOngoingMatch: boolean=false;

  constructor(private adminService:AdminService,
    private modalController:ModalController,) { }

  ngOnInit() {
    this.adminService.ongoingMatches().subscribe(data => {
      this.ongoingMatchData = data;
     
      if (data.length === 0) {
        this.noOngoingMatch = true;
      }
    });
      
  }

  async resultModel(game_id,i) {
    const modal = await this.modalController.create({
      component: ResultEntryPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'game_id': game_id,
        'i':i
        
      }
    });
    return await modal.present();
  }
}
