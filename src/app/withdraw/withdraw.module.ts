import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawPageRoutingModule } from './withdraw-routing.module';

import { WithdrawPage } from './withdraw.page';
import { DataNotAvailableComponent } from '../data-not-available/data-not-available.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawPageRoutingModule
  ],
  declarations: [WithdrawPage,DataNotAvailableComponent]
})
export class WithdrawPageModule {}
