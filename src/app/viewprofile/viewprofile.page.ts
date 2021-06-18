import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.page.html',
  styleUrls: ['./viewprofile.page.scss'],
})
export class ViewprofilePage implements OnInit {

  userId: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  campus: string;
  year: string;
  faculty: string;

  constructor
  (
    private router: Router, 
    private auth: AuthService, 
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() 
  { 
      this.auth.user$.subscribe(user =>{
      this.userId = user.userId;
      this.name = user.userName;
      this.email = user.userEmail;
      this.phone = user.userPhone;
      this.gender = user.userGender;
      this.campus = user.userCampus;
      this.year = user.userYear;
      this.faculty = user.userFaculty;
    })
  }

  async editprofile()
  {
    const loading = await this.loadingCtrl.create({
      message: 'Updating..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    this.afs.collection('user').doc(this.userId).set({
      'userName': this.name,
      'userEmail': this.email,
      'userPhone': this.phone,
      'userGender': this.gender,
      'userCampus': this.campus,
      'userYear': this.year,
      'userFaculty': this.faculty,
      'editAt': Date.now()
    },{merge : true})
    .then(()=> {
      loading.dismiss();
      this.toast('Update Success!','success');
      this.router.navigate(['/menu/viewprofile']);
    })
    .catch(error =>{
      loading.dismiss();
      this.toast(error.message,'danger');
    })
  }
  
  async toast(message,status)
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
