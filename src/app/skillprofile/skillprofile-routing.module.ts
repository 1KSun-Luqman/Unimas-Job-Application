import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillprofilePage } from './skillprofile.page';

const routes: Routes = [
  {
    path: '',
    component: SkillprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillprofilePageRoutingModule {}
