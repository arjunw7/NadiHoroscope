import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PouchService } from '../../services/pouchService'
import { HistoryItemPage } from '../historyItem/historyItem';
import { LandingPage } from '../landing/landing'
@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  allData:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public pouchService: PouchService){
    this.pouchService.getData().then((data) => {
      this.allData = data[0].readings
    })
  }

  showHomePage(){
    this.navCtrl.push(LandingPage); 
  }
  openItem(item){
    this.navCtrl.push(HistoryItemPage, {
      item: item
    })
  }
}
