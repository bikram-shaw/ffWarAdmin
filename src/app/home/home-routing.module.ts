import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:
    [
      {
        path: 'create-game',
        loadChildren: () => import('../create-game/create-game.module').then( m => m.CreateGamePageModule)
      },
      
      {
        path: 'matches',
        loadChildren: () => import('../matches/matches.module').then( m => m.MatchesPageModule)
      },
      {
        path: 'result-entry',
        loadChildren: () => import('../result-entry/result-entry.module').then( m => m.ResultEntryPageModule)
      },
      {
        path: 'withdraw',
        loadChildren: () => import('../withdraw/withdraw.module').then( m => m.WithdrawPageModule)
      },
      {
        path: '',
        redirectTo: '/home/create-game',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home/create-game',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
