import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PouchService } from '../../services/pouchService';
import { AssessmentsPage } from '../assessments/assessments';

@Component({
  selector: 'plants',
  templateUrl: 'plants.html'
})
export class PlantsPage {
  plantsList:any;
  constructor(public navCtrl: NavController, public pouchService: PouchService) {
    this.pouchService.getData().then((data) => {
      this.plantsList = data[0].plants;
      console.log(this.plantsList)
    });
  }

  showAssessmentsPage(id){
      this.navCtrl.push(AssessmentsPage, {
        plant_id: id
      });
  }

}
