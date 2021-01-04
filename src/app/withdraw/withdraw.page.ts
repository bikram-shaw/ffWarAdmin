import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdminService } from '../services/admin.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
  wth_data: [];

  constructor(
    private adminServices:AdminService,
    private commonService:CommonService,
    private alertController:AlertController
  ) { }

  ngOnInit() {
    this.withdrawRequest()
  }
withdrawRequest()
{
this.adminServices.withdrawRequest().subscribe(res=>{
console.log(res)
this.wth_data=res;
})
}
async confirmAlert(id) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Are you sure ?',
    
   
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        
      }, {
        text: 'Okay',
        handler: () => {
         this.onConfirmWithdraw(id)
        }
      }
    ]
  });

  await alert.present();
}
onConfirmWithdraw(id)
{
this.adminServices.confirmWithdraw(id).subscribe(res=>{
  this.commonService.alertService(res)
},error=>{
  this.commonService.alertService('Bad Request !')
})
}
async refundAlert(id) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Are you sure ?',
    inputs: [
      {
        name: 'description',
        type: 'text',
        placeholder: 'Refund Reason'
      }
    ],
   
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        
      }, {
        text: 'Okay',
        handler: (data) => {
         this.onRefundWithdraw(id,data.description)
        }
      }
    ]
  });

  await alert.present();
}
onRefundWithdraw(id,description){
  let form=new FormData()
  form.append("id",id)
  form.append("description",description)
  this.adminServices.refundWithdraw(form).subscribe(res=>{
    this.commonService.alertService(res)
  },error=>{
    this.commonService.alertService(error)
  })

}
userTransaction(id){

}
}
