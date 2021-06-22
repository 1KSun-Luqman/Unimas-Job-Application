import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-selectjob',
  templateUrl: './selectjob.page.html',
  styleUrls: ['./selectjob.page.scss'],
})
export class SelectjobPage implements OnInit {

  job: any;
  
  constructor
  (
    private router: Router,  
    private modalCtrl: ModalController,
    private jobServe: JobService
  ) { }
  
  ngOnInit() 
  { 
      this.jobServe.job$.subscribe(job =>{
      this.job = job;
    });
  }


  async openModal(){
   const modal = await this.modalCtrl.create({
      component: CartModalPage
    });

    await modal.present();

  }

  upload(){
    this.router.navigate(['/menu/uploadjob']);
  }


}
