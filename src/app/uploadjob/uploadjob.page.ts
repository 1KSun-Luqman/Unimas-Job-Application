import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-uploadjob',
  templateUrl: './uploadjob.page.html',
  styleUrls: ['./uploadjob.page.scss'],
})
export class UploadjobPage implements OnInit 
{

  userId: string;
  name: string;
  email: string;
  title: string;
  phone: string;

  constructor
  (
    private router: Router, 
    private auth: AuthService, 
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }

  async uploadjob(){
    if(this.name && this.email && this.phone && this.title )
    {
      const loading = await this.loadingCtrl.create({
        message: 'processing..',
        spinner: 'crescent',
        showBackdrop: true 
      });
      loading.present();

      this.afs.collection('job').doc(this.userId).set({
        'userName': this.name,
        'userEmail': this.email,
        'userPhone': this.phone,
        'userTitle': this.title,
        'editAt': Date.now()
      })
      .then(()=>{
        loading.dismiss();
        this.toast('Upload Job Complete!','Please wait for awhile')
        this.router.navigate(['/menu/selectjob']);
      })
      .catch(error =>{
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
   } else {
     this.toast('Please fill the form!','warning');
   }
  }
  async toast(message,status)
  {
    const toast = await this.toastr.create({
      message:message,
      color: status,
      position: 'top',
      duration: 2000
    });

    toast.present();
  }

}