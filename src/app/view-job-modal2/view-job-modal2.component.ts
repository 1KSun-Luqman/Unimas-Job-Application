import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-view-job-modal2',
  templateUrl: './view-job-modal2.component.html',
  styleUrls: ['./view-job-modal2.component.scss'],
})
export class ViewJobModal2Component implements OnInit {

  @Input() job: any;
  
  selectedSegment: string = 'descriptionJob';
  

  constructor(private modalCtrl: ModalController, private jobServe: JobService) { }

  ngOnInit() {
    this.jobServe.job$.subscribe(job =>{
    this.job = job;
    
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
