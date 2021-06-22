import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageRoutingModule } from './student-routing.module';

import { StudentPage } from './student.page';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';
import { ProgressModalComponent } from '../progress-modal/progress-modal.component';
import { CompleteModalComponent } from '../complete-modal/complete-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPageRoutingModule
  ],
  declarations: [StudentPage, DepositModalComponent, ProgressModalComponent, CompleteModalComponent],
  entryComponents: [DepositModalComponent, ProgressModalComponent, CompleteModalComponent]
})
export class StudentPageModule {}
