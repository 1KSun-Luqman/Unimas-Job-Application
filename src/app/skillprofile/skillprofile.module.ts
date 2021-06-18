import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillprofilePageRoutingModule } from './skillprofile-routing.module';

import { SkillprofilePage } from './skillprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillprofilePageRoutingModule
  ],
  declarations: [SkillprofilePage]
})
export class SkillprofilePageModule {}
