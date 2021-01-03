import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultEntryPageRoutingModule } from './result-entry-routing.module';

import { ResultEntryPage } from './result-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultEntryPageRoutingModule
  ],
  declarations: [ResultEntryPage]
})
export class ResultEntryPageModule {}
