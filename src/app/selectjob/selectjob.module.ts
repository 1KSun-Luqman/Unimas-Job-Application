import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectjobPageRoutingModule } from './selectjob-routing.module';

import { SelectjobPage } from './selectjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectjobPageRoutingModule
  ],
  declarations: [SelectjobPage]
})
export class SelectjobPageModule {}
