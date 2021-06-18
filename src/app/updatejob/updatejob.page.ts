import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.page.html',
  styleUrls: ['./updatejob.page.scss'],
})
export class UpdatejobPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

update(){
  this.router.navigate(['/menu/uploadjob']);
}

}
