import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatejobPage } from './updatejob.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatejobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatejobPageRoutingModule {}
