import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PouchService } from '../../services/pouchService'
import { HistoryPage } from '../history/history';

@Component({
  selector: 'landing',
  templateUrl: 'landing.html'
})
export class LandingPage {
  dbInit:any = {
    "_id": "212601219",
    "readings":[ 
      {
        "id":1, 
        "patientName": "Arjun Wadhwa", 
        "patientAge":"23",
        "patientHeight": "5.7",
        "patientWeight": "63",
        "patientGender": "male",
        "value1": "6",
        "value2": "7",
        "value3": "6",
        "value4": "8",
        "value5": "6.7",
        "value6": "6.8",
        "value7": "6",
        "value8": "5",
        "value9": "5",
        "score": "10/12",
        "dignosis": "No Chances of Ulcer"   
      }]
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public pouchService: PouchService) {
    this.pouchService.updatePlants(this.dbInit)
  }

  showHomePage(){
    this.navCtrl.push(HomePage); 
  }
  showHistoryPage(){
    this.navCtrl.push(HistoryPage)
  }
}
