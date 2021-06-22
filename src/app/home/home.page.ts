import { Component } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastr: ToastController, private loadingCtrl: LoadingController, private router: Router) {}

  ngOnInit() {
  }

}
