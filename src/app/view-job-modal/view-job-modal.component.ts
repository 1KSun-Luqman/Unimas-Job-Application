import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-view-job-modal',
  templateUrl: './view-job-modal.component.html',
  styleUrls: ['./view-job-modal.component.scss'],
})
export class ViewJobModalComponent implements OnInit {

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
