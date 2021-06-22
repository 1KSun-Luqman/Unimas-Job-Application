import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss'],
})
export class DepositModalComponent implements OnInit {

  
  @Input() job: any;
  
  selectedSegment: string = 'descriptionJob';
  

  constructor
  (
    private modalCtrl: ModalController, 
    private jobServe: JobService, 
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.jobServe.job$.subscribe(job =>{
    this.job = job;
    
  });
  }

  async applyjob(){
    const loading = await this.loadingCtrl.create({
      message: 'processing..',
      spinner: 'crescent',
      showBackdrop: true 
    });
    loading.present();

    loading.dismiss();
        this.modalCtrl.dismiss();
        this.toast('Job Applied!','Please wait for awhile')
        this.router.navigate(['/menu/student']);
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  segmentChanged(event:any){
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }

  async toast(message,status)
  {
    const toast = await this.toastr.create({
      message:message,
      color: status,
      position: 'middle',
      duration: 4000
    });

    toast.present();
  }
}
