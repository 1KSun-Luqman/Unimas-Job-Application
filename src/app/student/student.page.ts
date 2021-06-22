import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})

export class StudentPage implements OnInit {

 

  constructor(private modalCtrl: ModalController){}

  ngOnInit() {
  }

  async openModal(){
    const modal =await this.modalCtrl.create({
      component: DepositModalComponent
    });
    await modal.present();
  }


}
