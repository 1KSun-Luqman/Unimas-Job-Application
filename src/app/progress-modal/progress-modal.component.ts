import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-progress-modal',
  templateUrl: './progress-modal.component.html',
  styleUrls: ['./progress-modal.component.scss'],
})
export class ProgressModalComponent implements OnInit {

   
  @Input() job: any;
  @Input() user: any;
  @Input() user$: any;
  
  selectedSegment: string = 'descriptionJob';
  

  constructor
  (
    private modalCtrl: ModalController, 
    private jobServe: JobService, 
    private auth: AuthService,
    private toastr: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.jobServe.job$.subscribe(job =>{
    this.job = job;
    });
    this.auth.user$.subscribe(user =>{
    this.user = user;
    });
  }

  async completejob(){
    const loading = await this.loadingCtrl.create({
      message: 'processing..',
      spinner: 'crescent',
      showBackdrop: true 
    });
    loading.present();

    loading.dismiss();
        this.modalCtrl.dismiss();
        this.toast('Job is completed!','Please wait for awhile')
        this.router.navigate(['/menu/statusjob']);
  }

  async toast(message,status)
  {
    const toast = await this.toastr.create({
      message:message,
      position: 'middle',
      duration: 3000
    });

    toast.present();
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  segmentChanged(event:any){
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }
}
