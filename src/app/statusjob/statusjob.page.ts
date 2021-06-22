import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CompleteModalComponent } from '../complete-modal/complete-modal.component';
import { ProgressModalComponent } from '../progress-modal/progress-modal.component';
import { StudentModalComponent } from '../student-modal/student-modal.component';


@Component({
  selector: 'app-statusjob',
  templateUrl: './statusjob.page.html',
  styleUrls: ['./statusjob.page.scss'],
})
export class StatusjobPage implements OnInit {

  selectedSegment: string = 'onStanby';


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
   
  }
 
  async openModal1(){
    const modal =await this.modalCtrl.create({
      component: StudentModalComponent
    });
    await modal.present();
  }

  async openModal2(){
    const modal =await this.modalCtrl.create({
      component: ProgressModalComponent
    });
    await modal.present();
  }

  async openModal3(){
    const modal =await this.modalCtrl.create({
      component: CompleteModalComponent
    });
    await modal.present();
  }

  segmentChanged(event:any){
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }
}
