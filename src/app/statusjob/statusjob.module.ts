import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusjobPageRoutingModule } from './statusjob-routing.module';

import { StatusjobPage } from './statusjob.page';
import { StudentModalComponent } from '../student-modal/student-modal.component';
import { ProgressModalComponent } from '../progress-modal/progress-modal.component';
import { CompleteModalComponent } from '../complete-modal/complete-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusjobPageRoutingModule
  ],
  declarations: [StatusjobPage, StudentModalComponent, ProgressModalComponent, CompleteModalComponent],
  entryComponents: [StudentModalComponent, ProgressModalComponent, CompleteModalComponent]
})
export class StatusjobPageModule {}
