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
  currentProject:any;
  currentProjectName:any;
  constructor(public navCtrl: NavController,public navParams: NavParams, public pouchService: PouchService) {
    this.currentPlant= navParams.get('currentPlant');
    this.currentProject = navParams.get('currentProject')
    this.currentProjectName = this.currentPlant.assessments[this.currentProject-1].assessment_name

  }
  showPlantsPage() {
      this.navCtrl.push(NewAssessmentPage, {
        currentPlant: this.currentPlant,
        currentProject_id:this.currentProject
      });
  }
  showFilesPage() {
    this.navCtrl.push(FilesPage);
  }
  goBack(){
    this.navCtrl.pop();
  }
}
