import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { JobService } from '../services/job.service';


@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

@Input() job: any;

selectedSegment: string = 'descriptionJob';

  constructor
  (
    private modalCtrl: ModalController, 
    private jobServe: JobService,
    
    ) { }

 dismissModal(){
  this.modalCtrl.dismiss();
 }

 ngOnInit()
 
 {
   this.jobServe.job$.subscribe(job =>{
   this.job = job;

   })
 }

    segmentChanged(event:any){
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }
}
