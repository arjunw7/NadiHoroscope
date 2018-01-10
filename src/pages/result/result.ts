import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LandingPage} from '../landing/landing'

@Component({
  selector: 'result',
  templateUrl: 'result.html'
})
export class ResultPage {
  patient:any;
  inputData:any;
  score:any;
  maxScore:any;
  status:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.score= navParams.get('score');
    this.maxScore= navParams.get('maxScore');
    this.status = navParams.get('status')
  }

  
  private presentToast(text) {
    let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
    });
    toast.present();
  }
  goBack(){
    this.navCtrl.pop();
  }
  returnHome(){
    this.navCtrl.push(LandingPage)
  }
}
