import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-complete-modal',
  templateUrl: './complete-modal.component.html',
  styleUrls: ['./complete-modal.component.scss'],
})
export class CompleteModalComponent implements OnInit {

  @Input() user: any;
  @Input() job: any;
  
  selectedSegment: string = 'descriptionJob';
  

  constructor(private modalCtrl: ModalController, private jobServe: JobService, private auth: AuthService) { }

  ngOnInit() {
    this.jobServe.job$.subscribe(job =>{
    this.job = job;
    this.auth.user$.subscribe(user =>{
    this.user = user;
    });
  });
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  segmentChanged(event:any){
    console.log(event.target.value);
    this.selectedSegment=event.target.value
  }
}