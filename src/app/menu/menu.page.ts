import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  role : string[];
  pages = [];

  selectedPath ='';
  
  constructor
  (
    private router: Router, 
    private auth: AuthService
  )
  {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
  }

  ngOnInit() {
    this.auth.user$.subscribe(user =>{
      this.role = user.role;
    })

    if(this.role === ['user']){
      this.pages = [
        { title: 'Find Jobs', url: '/menu/student'},
        { title: 'View Jobs', url: '/menu/viewjob'},
        { title: 'View Profile', url: '/menu/viewprofile'},
        { title: 'Log Out', url: '/menu/logout'}
      ];
    } else{
      this.pages = [
        { title: 'Student Interface'},
        { title: 'Find Jobs', url: '/menu/student'},
        { title: 'View Jobs', url: '/menu/viewjob'},
        { title: 'View Profile', url: '/menu/viewprofile'},
        { title: 'Log Out', url: '/menu/logout'},
        { title: 'Staff Interface'},
        { title: 'Select Job', url: '/menu/selectjob'},
        { title: 'View Job Status', url: '/menu/statusjob'} ,
        { title: 'Log Out', url: '/menu/logout'}    
      ];
    }
  
  }

}
