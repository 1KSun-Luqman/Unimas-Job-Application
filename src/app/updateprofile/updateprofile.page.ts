import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss'],
})
export class UpdateprofilePage implements OnInit {

  user: any;


  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user =>{
      this.user = user;
    })

    
  }

  updateprofile(){
    this.router.navigate(['/menu/student']);
  }
}
