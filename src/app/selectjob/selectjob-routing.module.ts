import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectjobPage } from './selectjob.page';

const routes: Routes = [
  {
    path: '',
    component: SelectjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectjobPageRoutingModule {}
