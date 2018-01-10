import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { InstructionsPage } from '../instructions/instructions';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  patient = {
    "name": "",
    "age": "",
    "height": "",
    "weight": "",
    "gender": ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }
  showInstructionsPage() {
    if(!this.patient || !this.patient.name || !this.patient.age || !this.patient.height || !this.patient.weight || !this.patient.gender){
      this.presentToast('Please enter all the fields.');
    }
    else
    this.navCtrl.push(InstructionsPage, {
      patient: this.patient
    });
    
  }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
    });
    toast.present();
  }
}
