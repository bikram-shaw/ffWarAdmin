import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AdminService } from '../services/admin.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-result-entry',
  templateUrl: './result-entry.page.html',
  styleUrls: ['./result-entry.page.scss'],
})
export class ResultEntryPage implements OnInit {
@Input() game_id:any
    iIndex=0;
  joinPlayerList=[{"player_name":"loading...","id":"loading..."}];
  
  resultData=[];
  kill=0;
  amount=0;
  finalSubmit: boolean=false;
  constructor(
    private modalController:ModalController,
    private adminServices:AdminService,
    private commonService:CommonService,
    private alertController:AlertController
    ) {this.joinPlayerList.length}

  ngOnInit() {
    this.fetchJoinPlayer()
  }
  dismiss()
  {
    this.modalController.dismiss()
  }
  fetchJoinPlayer()
  {
    this.adminServices.fetchJoinPlayer(this.game_id).subscribe(res=>{
      if(res!=''){
      this.joinPlayerList=res
      console.log(res);}
      else{
      setTimeout(() => {
        this.modalController.dismiss()
      }, 100);
      this.commonService.alertService("Empty Player List")
    }
      
    })
  }
  resultEntryData(){
    
    let data={
      "kill":this.kill,
      "wining_amount":this.amount,
      //"player_id":this.joinPlayerList[this.i].user,
      //"player_name":this.joinPlayerList[this.iIndex].player_name,
      "id":this.joinPlayerList[this.iIndex].id,
    }
    
      this.resultData.push(data)
      
      this.kill=0
      this.amount=0
      
      
    
    if(this.resultData.length>=this.joinPlayerList.length)
      {
        
      this.finalSubmit=true
      }
      else{
        this.iIndex++
      }
  }
  async editResultDataAlert(i) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
         
          name: 'kill',
          type: 'text',
          placeholder: 'Kill'
        },
        {
          name: 'amount',
          type: 'text',
          placeholder: 'Amount'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.resultData[i].kill=data.kill
            this.resultData[i].amount=data.amount
          }
        }
      ]
    });

    await alert.present();
  }
  editResultData(i){
   
    this.editResultDataAlert(i)
    
  }
  onSubmitFinalResult()
  {
    let finalResultData={
      "game_id":this.game_id,
      "data":this.resultData
    }
    console.log(finalResultData)
  this.adminServices.submitResult(this.resultData).subscribe(res=>{
    this.modalController.dismiss()
    this.commonService.alertService("Success")
  },error=>{
    this.modalController.dismiss()
    this.commonService.alertService("Failed Try Again !")
  })
  }
    
  }

