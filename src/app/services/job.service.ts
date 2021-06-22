import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Job } from '../models/job';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  job$: Observable<Job>;
  job: Job;

  constructor
  (
    public  afs: AngularFirestore,
    private router: Router, 
    private LoadingCtrl: LoadingController,
    private toastr: ToastController,
    private afauth: AngularFireAuth
  )
  {  
    this.job$ = this.afauth.authState
    .pipe(
      switchMap( job => {

      if(job)
      {
        return this.afs.doc<Job>(`job/${job.uid}`).valueChanges();
      } else{
        return of(null);
      }
      
      })
    )
  }
  

}
