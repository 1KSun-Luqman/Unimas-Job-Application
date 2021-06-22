import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss'],
})
export class StudentModalComponent implements OnInit {

  @Input() user: any;
  @Input() user$: any;

  constructor
  (
    private modalCtrl: ModalController,
    private auth: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() 
  {
    this.auth.user$.subscribe(user =>{
    this.user = user;
    })
  }

  async acceptstudent(){
    const loading = await this.loadingCtrl.create({
      message: 'processing..',
      spinner: 'crescent',
      showBackdrop: true 
    });
    loading.present();

    loading.dismiss();
        this.modalCtrl.dismiss();
        this.toast('Student Accepted!','Please wait for awhile')
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



}
