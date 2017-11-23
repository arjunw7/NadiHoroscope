import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NewAssessmentPage } from '../newAssessment/newAssessment';
import { PouchService } from '../../services/pouchService';

@Component({
  selector: 'assessments',
  templateUrl: 'assessments.html'
})
export class AssessmentsPage {
  selectedPlantId:any;
  selectedPlant:any;
  assessmentList:any;
  plantsList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pouchService: PouchService) {
    this.selectedPlantId= navParams.get('plant_id');
    this.pouchService.getData().then((data) => {
      this.plantsList = data[0].plants;
      for(let i=0; i<this.plantsList.length; i++){
        if(this.plantsList[i].id==this.selectedPlantId){
          this.selectedPlant = this.plantsList[i]
        }
      }
      this.assessmentList=this.selectedPlant.assessments;
    });
  }
  
  newAssessmentsPage(){
    this.navCtrl.push(NewAssessmentPage, {
      currentPlant: this.selectedPlant
    });    
  }

}
