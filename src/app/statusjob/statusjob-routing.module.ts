import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusjobPage } from './statusjob.page';

const routes: Routes = [
  {
    path: '',
    component: StatusjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusjobPageRoutingModule {}
