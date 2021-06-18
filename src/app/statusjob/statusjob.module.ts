import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusjobPageRoutingModule } from './statusjob-routing.module';

import { StatusjobPage } from './statusjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusjobPageRoutingModule
  ],
  declarations: [StatusjobPage]
})
export class StatusjobPageModule {}
