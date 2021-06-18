import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatejobPageRoutingModule } from './updatejob-routing.module';

import { UpdatejobPage } from './updatejob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatejobPageRoutingModule
  ],
  declarations: [UpdatejobPage]
})
export class UpdatejobPageModule {}
