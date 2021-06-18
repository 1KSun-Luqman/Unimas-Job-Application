import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadjobPage } from './uploadjob.page';

const routes: Routes = [
  {
    path: '',
    component: UploadjobPage,
    children: [
      {
        path:'tab3',
        loadChildren: () => import('../tab3/tab3.module').then( m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then( m => m.Tab5PageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadjobPageRoutingModule {}
