import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'room-details',
    loadChildren: () => import('./room-details/room-details.module').then( m => m.RoomDetailsPageModule)
  },
    path: 'edit-match',
    loadChildren: () => import('./edit-match/edit-match.module').then( m => m.EditMatchPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }