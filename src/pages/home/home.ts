import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlantsPage } from '../plants/plants';
import { PouchService } from '../../services/pouchService';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  allData:any;
  dbInit:any = {
      "_id": "212601219",
      "plants":[
        {
          "id":1, 
          "plant_name": "Satpura Thermal Power Station", 
          "plant_address":"Sarni, Madhya Pradesh, India",
          "assessments":[
          {"id":1, "plant_id":1, "assessment_name": "Field Visit", "assessment_date":"2017-02-10", "user_name":"Mohit Rai"},
          {"id":2, "plant_id":1, "assessment_name": "Mock Assessment", "assessment_date":"2017-03-10", "user_name":"Mohit Rai"}]
        },
        {
          "id":2, 
          "plant_name": "ONGC Tripura Power Company", 
          "plant_address":"Palatana, Udaipur, India",
          "assessments": []
          
        },
        {
          "id":3, 
          "plant_name": "Yelahanka Diesel Power Station", 
        "plant_address":"Yelahanka, Bangalore, India",
          "assessments": []
        },
        {
          "id":4, 
          "plant_name": "Gangtok Diesel Power Station", 
          "plant_address":"Gangtok, Sikkim, India",
          "assessments": []
        }]
    }
  constructor(public navCtrl: NavController, public pouchService: PouchService) {
    this.pouchService.updatePlants(this.dbInit)
    this.pouchService.getData().then((data) => {
      this.allData = data;
    });
  }

 

  showPlantsPage() {
      this.navCtrl.push(PlantsPage);
  }
}
