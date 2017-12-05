import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlantsPage } from '../plants/plants';
import { FilesPage } from '../files/files';
import { PouchService } from '../../services/pouchService';
import { NewAssessmentPage } from '../newAssessment/newAssessment';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentPlant:any;
  constructor(public navCtrl: NavController,public navParams: NavParams, public pouchService: PouchService) {
    this.currentPlant= navParams.get('currentPlant');
  }
  showPlantsPage() {
      this.navCtrl.push(NewAssessmentPage, {
        currentPlant: this.currentPlant
      });
  }
  showFilesPage() {
    this.navCtrl.push(FilesPage);
  }
  goBack(){
    this.navCtrl.pop();
  }
}
