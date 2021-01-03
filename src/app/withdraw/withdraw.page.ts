import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
  wth_data: [];

  constructor(
    private adminServices:AdminService
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
onConfirmWithdraw(id)
{
alert(id)
}
onRefundWithdraw(id){

}
userTransaction(id){

}
}
