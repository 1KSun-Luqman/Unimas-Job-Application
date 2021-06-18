import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
              private toastr: ToastController,
              private auth: AuthService) { }

  ngOnInit() {
  }

  login(){
    if(this.email && this.password)
    {
      this.auth.signIn(this.email, this.password);
    }else{
      this.toast('Please enter your email & password!', 'warning');
    }
  }

  async toast(message,status)
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
