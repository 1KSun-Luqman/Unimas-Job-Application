import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.page.html',
  styleUrls: ['./updatejob.page.scss'],
})
export class UpdatejobPage implements OnInit {
  
  skillset1: string;
  skillset2: string;
  skillset3: string;
  userId: string;

  constructor
  (
    private router: Router,
    private loadingCtrl: LoadingController, 
    private afs: AngularFirestore,
    private toastr: ToastController,    
  ) { }

  ngOnInit() {
  }
  
  async update(){
    if(this.skillset1 || this.skillset2 || this.skillset3)
    {
      const loading = await this.loadingCtrl.create({
        message: 'processing..',
        spinner: 'crescent',
        showBackdrop: true 
        
      });
      
      loading.present();
      
      this.afs.collection('job').doc(this.userId).set({
        'userSkill1': this.skillset1,
        'userSkill2': this.skillset2,
        'userSkill3': this.skillset3
      })
      .then(()=>{
        loading.dismiss();
        this.toast('Skill  Complete!','Please wait for awhile')
        this.router.navigate(['/menu/uploadjob']);
      })
      .catch(error =>{
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
   } else {
     this.toast('Please choose atleast one!','warning');
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
