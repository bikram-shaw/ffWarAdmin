import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTransactionModelPage } from './user-transaction-model.page';

const routes: Routes = [
  {
    path: '',
    component: UserTransactionModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTransactionModelPageRoutingModule {}
