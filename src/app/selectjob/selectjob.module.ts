import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectjobPageRoutingModule } from './selectjob-routing.module';

import { SelectjobPage } from './selectjob.page';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectjobPageRoutingModule
  ],
  declarations: [SelectjobPage, CartModalPage],
  entryComponents: [CartModalPage]
})
export class SelectjobPageModule {}
