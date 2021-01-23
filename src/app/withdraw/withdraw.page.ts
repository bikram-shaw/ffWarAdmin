import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AdminService } from '../services/admin.service';
import { CommonService } from '../services/common.service';
import { UserTransactionModelPage } from '../user-transaction-model/user-transaction-model.page';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
  wth_data: [];
  dataNotAvailable: boolean=false;

  constructor(
    private adminServices:AdminService,
    private commonService:CommonService,
    private alertController:AlertController,
    private modalController:ModalController
  ) { }

  ngOnInit() {
    this.withdrawRequest()
  }
  ionViewWillEnter() {
    this.ngOnInit();
}
withdrawRequest()
{
this.adminServices.withdrawRequest().subscribe(res=>{
this.wth_data=res;

if(res.length===0)
{
  this.dataNotAvailable=true
}
})
}
async confirmAlert(id,i) {
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
         this.onConfirmWithdraw(id,i)
        }
      }
    ]
  });

  await alert.present();
}
onConfirmWithdraw(id,i)
{
this.adminServices.confirmWithdraw(id).subscribe(res=>{
  this.wth_data.splice(i,1)
  this.commonService.alertService(res)
},error=>{
  this.commonService.alertService('Bad Request !')
})
}
async refundAlert(id,i) {
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
         this.onRefundWithdraw(id,data.description,i)
        }
      }
    ]
  });

  await alert.present();
}
onRefundWithdraw(id,description,i){
  let form=new FormData()
  form.append("id",id)
  form.append("description",description)
  this.adminServices.refundWithdraw(form).subscribe(res=>{
    this.wth_data.splice(i,1)
    this.commonService.alertService(res)
  },error=>{
    this.commonService.alertService(error)
  })

}
async userTxnModal(id) {
  const modal = await this.modalController.create({
    component: UserTransactionModelPage,
    cssClass: 'my-custom-class',
    componentProps: {
      "id":id
    }
  });
  return await modal.present();
}

}
