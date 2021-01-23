import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-user-transaction-model',
  templateUrl: './user-transaction-model.page.html',
  styleUrls: ['./user-transaction-model.page.scss'],
})
export class UserTransactionModelPage implements OnInit {
@Input() id:any
  TxnData: any;
  constructor(
   
    private adminServices:AdminService,
    private modalController:ModalController
  ) { }

  ngOnInit() {
    this.userTransaction()
  }
  userTransaction(){
    let form=new FormData()
    form.append("id",this.id)
  this.adminServices.userTxnHistory(form).subscribe(res=>{
    this.TxnData=res
    console.log(res)
  })
  }
  dismiss()
  {
    this.modalController.dismiss()
  }
}
