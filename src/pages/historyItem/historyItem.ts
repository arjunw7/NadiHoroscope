import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PouchService } from '../../services/pouchService'

@Component({
  selector: 'historyItem',
  templateUrl: 'historyItem.html'
})
export class HistoryItemPage {
  allData:any
  item:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public pouchService: PouchService){
    this.item= navParams.get('item');
  }

  showHomePage(){
    this.navCtrl.push(HomePage); 
  }
  goBack(){
    this.navCtrl.pop();
  }
}
