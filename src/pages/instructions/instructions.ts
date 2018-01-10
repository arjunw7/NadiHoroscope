import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { InputPage } from '../input/input';

@Component({
  selector: 'instructions',
  templateUrl: 'instructions.html'
})
export class InstructionsPage {
  patient:any;
  constructor(public navCtrl: NavController,public navParams: NavParams, public toastCtrl: ToastController) {
    this.patient= navParams.get('patient');
  }
  showInputPage(){
      this.navCtrl.push(InputPage,{
        patient: this.patient
      })
  }

  goBack(){
    this.navCtrl.pop();
  }
}
