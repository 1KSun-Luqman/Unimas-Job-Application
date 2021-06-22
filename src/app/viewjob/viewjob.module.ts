import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewjobPageRoutingModule } from './viewjob-routing.module';

import { ViewjobPage } from './viewjob.page';
import { ViewJobModalComponent } from '../view-job-modal/view-job-modal.component';
import { ViewJobModal2Component } from '../view-job-modal2/view-job-modal2.component';
import { ViewJobModal3Component } from '../view-job-modal3/view-job-modal3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewjobPageRoutingModule
  ],
  declarations: [ViewjobPage, ViewJobModalComponent, ViewJobModal2Component, ViewJobModal3Component],
  entryComponents:[ViewJobModalComponent, ViewJobModal2Component, ViewJobModal3Component]
})
export class ViewjobPageModule {}
