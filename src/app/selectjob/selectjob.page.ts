import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectjob',
  templateUrl: './selectjob.page.html',
  styleUrls: ['./selectjob.page.scss'],
})
export class SelectjobPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  upload(){
    this.router.navigate(['/menu/updatejob']);
  }


}
