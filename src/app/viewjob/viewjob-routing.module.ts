import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewjobPage } from './viewjob.page';

const routes: Routes = [
  {
    path: '',
    component: ViewjobPage,
    children: [
      {
        path:'tab',
        loadChildren: () => import('../tab/tab.module').then( m => m.TabPageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then( m => m.Tab2PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewjobPageRoutingModule {}
