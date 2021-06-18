import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skillprofile',
  templateUrl: './skillprofile.page.html',
  styleUrls: ['./skillprofile.page.scss'],
})
export class SkillprofilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  skillprofile(){
    this.router.navigate(['/updateprofile']);
  }
}
