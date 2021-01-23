import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AdminService } from '../services/admin.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.page.html',
  styleUrls: ['./edit-match.page.scss'],
})
export class EditMatchPage implements OnInit {
  updateGameForm: FormGroup;

  constructor(private modalController:ModalController,
    private adminServices:AdminService,
    private commonService:CommonService


    ) { }

  ngOnInit() {
    this.gameForm()
  }
  @Input() gameData;
  @Input() i;
dismiss()
{
  this.modalController.dismiss()
  //alert(this.gameData.date)
}
gameForm() {
  this.updateGameForm = new FormGroup({
    'status':new FormControl('active'),
    'type': new FormControl(this.gameData.type, Validators.required),
    'map': new FormControl(this.gameData.map, Validators.required),
    'date': new FormControl(this.gameData.date, Validators.required),
    'time': new FormControl(this.gameData.time, Validators.required),
    'spots': new FormControl(this.gameData.spots, Validators.required),
    'entry_fee': new FormControl(this.gameData.entry_fee, Validators.required),
    'per_kill': new FormControl(this.gameData.per_kill, Validators.required),
    'win_prize': new FormControl(this.gameData.win_prize, Validators.required)
  })
}
onSubmitUpdateGameForm()
{
  let updateGameData=new FormData()
  updateGameData.append('id',this.gameData.id)
this.adminServices.updateGame(this.updateGameForm.value,this.gameData.id).subscribe(res=>{
  this.commonService.alertService("Match Update Success")
  let data={
    "res":res,
    "i":this.i
  }
  this.commonService.upcomingMatch.next(data)
  this.modalController.dismiss()
},error=>{
  this.commonService.alertService("Failed !")
  this.modalController.dismiss()
})
}
}
