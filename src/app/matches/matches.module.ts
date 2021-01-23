import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchesPageRoutingModule } from './matches-routing.module';

import { MatchesPage } from './matches.page';
import { WithdrawPageModule } from '../withdraw/withdraw.module';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { OngoingComponent } from './ongoing/ongoing.component';
import { DataNotAvailableComponent } from '../data-not-available/data-not-available.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchesPageRoutingModule,
    
    
   
  ],
  declarations: [MatchesPage,UpcomingComponent,OngoingComponent,DataNotAvailableComponent]
})
export class MatchesPageModule {}
