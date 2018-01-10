import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'landing',
  templateUrl: 'landing.html'
})
export class LandingPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  showHomePage(){
    this.navCtrl.push(HomePage); 
  }
}
