import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
 
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path:'student',
        loadChildren: () => import('../student/student.module').then( m => m.StudentPageModule)
      },
      {
        path: 'viewjob',
        loadChildren: () => import('../viewjob/viewjob.module').then( m => m.ViewjobPageModule)
      },
      {
      path: 'viewprofile',
      loadChildren: () => import('../viewprofile/viewprofile.module').then( m => m.ViewprofilePageModule)
      },
      {
        path: 'selectjob',
        loadChildren: () => import('../selectjob/selectjob.module').then( m => m.SelectjobPageModule)
      },
      {
        path: 'updatejob',
        loadChildren: () => import('../updatejob/updatejob.module').then( m => m.UpdatejobPageModule)
      },
      {
        path: 'uploadjob',
        loadChildren: () => import('../uploadjob/uploadjob.module').then( m => m.UploadjobPageModule)
      },
      {
        path: 'statusjob',
        loadChildren: () => import('../statusjob/statusjob.module').then( m => m.StatusjobPageModule)
      },
      {
        path: 'logout',
        loadChildren: () => import('../logout/logout.module').then( m => m.LogoutPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
