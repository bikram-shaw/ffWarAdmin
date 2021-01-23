import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTransactionModelPageRoutingModule } from './user-transaction-model-routing.module';

import { UserTransactionModelPage } from './user-transaction-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserTransactionModelPageRoutingModule
  ],
  declarations: [UserTransactionModelPage]
})
export class UserTransactionModelPageModule {}
