import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.page.html',
  styleUrls: ['./createprofile.page.scss'],
})
export class CreateprofilePage implements OnInit {

  name: string;
  email: string;
  phone: string;
  password: string;
  gender: string;
  campus: string;
  year: string;
  faculty: string;

  constructor
  (
    private router: Router,
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private toastr: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async createprofile(){
    if(this.name && this.email && this.phone && this.password && this.gender && this.campus && this.year && this.faculty)
    {
      const loading = await this.loadingCtrl.create({
        message: 'processing..',
        spinner: 'crescent',
        showBackdrop: true 
      });

      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password)
      .then((data)=>{
        data.user.sendEmailVerification();
        this.afs.collection('user').doc(data.user.uid).set({
          'userId': data.user.uid,
          'userName': this.name,
          'userEmail': this.email,
          'userPhone': this.phone,
          'userGender': this.gender,
          'userCampus': this.campus,
          'userYear': this.year,
          'userFaculty': this.faculty,
          'createAt': Date.now()
        })
        .then(()=>{
          loading.dismiss();
          this.toast('Create Profile Complete! Check your email for verification ', 'success')
          this.router.navigate(['/login']);
        })
        .catch(error => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        })
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message,'danger');
      })
    } else {
      this.toast('Please fill the form!','warning');
    }
  }

  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });

    toast.present();
  }

}
