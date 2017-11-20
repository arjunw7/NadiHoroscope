import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AssessmentsPage } from '../assessments/assessments';

@Component({
  selector: 'plants',
  templateUrl: 'plants.html'
})
export class PlantsPage {

  constructor(public navCtrl: NavController) {

  }

  showAssessmentsPage(){
      this.navCtrl.push(AssessmentsPage);
  }

}
