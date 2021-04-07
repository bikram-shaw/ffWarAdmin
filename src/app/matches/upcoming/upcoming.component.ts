import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { EditMatchPage } from 'src/app/edit-match/edit-match.page';
import { AdminService } from 'src/app/services/admin.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
})
export class UpcomingComponent implements OnInit {
  noUpcomingMatch=false
  upcomingMatchData=[];
  spinner=false;
  constructor(private adminServices:AdminService,
    private alertController:AlertController,
    private modalController:ModalController,
    private commonService:CommonService) { 

      this.commonService.upcomingMatch.subscribe(res=>{
        //console.log(res["res"])
       
        this.upcomingMatchData[res["i"]]=res["res"]
      })

    }

  ngOnInit(
   
  ) { 
  
      
    }
  
    upcomingMatch(type){
      this.spinner=true;
      this.adminServices.upcomingMatches(type).subscribe(data=>{
        this.upcomingMatchData=data;
        console.log(data)
        this.spinner=false;
         if(data.length===0 )
         {
          this.spinner=false;
          this.noUpcomingMatch=true;
         }
       });
    }
    async rommDetailsAlert(game_id,i) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Enter Room Details',
        subHeader: 'Game Id :'+game_id,
        inputs: [
          {
            name: 'room_id',
            type: 'text',
            placeholder: 'Room ID'
          },
          {
            name: 'password',
            type: 'text',
            
           
            placeholder: 'Password'
          },
          
        
          
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'dark',
            handler: () => {
              
            }
          }, {
            text: 'Submit',
            handler: (data) => {
             
              this.onSubmitRoomDetails(data.room_id,data.password,game_id,i)
            }
          }
        ]
      });
  
      await alert.present();
    }
  onSubmitRoomDetails(room_id,password,game_id,i){
    let form =new FormData()
    form.append("room_id",room_id)
    form.append("game_id",game_id)
    form.append("room_pass",password)
    if(room_id!='' && password!='')
    {
this.adminServices.insertRoomDetails(form).subscribe(res=>{
  this.upcomingMatchData.splice(i,1)
  this.commonService.alertService(res)
},error=>{
  this.commonService.alertService("Failed !")
})
    }
    else
    {
      this.commonService.alertService("Invalid Details")
      
    }

  }
  async editMatch(data,i) {
    const modal = await this.modalController.create({
      component: EditMatchPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'gameData': data,
        'i':i
        
      }
    });
    return await modal.present();
  }
  }


