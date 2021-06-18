import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Find Jobs',
      url: '/menu/student'
    },
    {
      title: 'View Jobs',
      url: '/menu/viewjob'
    },
    {
      title: 'View Profile',
      url: '/menu/viewprofile'
    },
    {
      title: 'Select Job',
      url: '/menu/selectjob'
    },
    {
      title: 'Update Job',
      url: '/menu/updatejob'
    },
    {
      title: 'Upload Job',
      url: '/menu/uploadjob'
    },
    {
      title: 'View Job Status',
      url: '/menu/statusjob'
    },
    {
      title: 'Log Out',
      url: '/menu/logout'
    }
  ];

  selectedPath ='';
  constructor(private router: Router){
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
 }


  ngOnInit() {
  }

}
