import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewAssessmentPage } from '../newAssessment/newAssessment';

@Component({
  selector: 'assessments',
  templateUrl: 'assessments.html'
})
export class AssessmentsPage {

  constructor(public navCtrl: NavController) {

  }
  newAssessmentsPage(){
    this.navCtrl.push(NewAssessmentPage);    
  }

}
