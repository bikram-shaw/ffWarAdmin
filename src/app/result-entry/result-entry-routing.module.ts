import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultEntryPage } from './result-entry.page';

const routes: Routes = [
  {
    path: '',
    component: ResultEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultEntryPageRoutingModule {}
