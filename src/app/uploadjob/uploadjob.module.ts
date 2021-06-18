import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadjobPageRoutingModule } from './uploadjob-routing.module';

import { UploadjobPage } from './uploadjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadjobPageRoutingModule
  ],
  declarations: [UploadjobPage]
})
export class UploadjobPageModule {}
