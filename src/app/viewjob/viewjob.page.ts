import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewJobModalComponent } from '../view-job-modal/view-job-modal.component';
import { ViewJobModal2Component } from '../view-job-modal2/view-job-modal2.component';
import { ViewJobModal3Component } from '../view-job-modal3/view-job-modal3.component';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.page.html',
  styleUrls: ['./viewjob.page.scss'],
})
export class ViewjobPage implements OnInit {

  selectedSegment: string = 'inProgress';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal1(){
    const modal =await this.modalCtrl.create({
      component: ViewJobModalComponent
    });
    await modal.present();
  }
  async openModal2(){
    const modal =await this.modalCtrl.create({
      component: ViewJobModal2Component
    });
    await modal.present();
  }
  async openModal3(){
    const modal =await this.modalCtrl.create({
      component: ViewJobModal3Component
    });
    await modal.present();
  }

  segmentChanged(event:any){
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }
}
