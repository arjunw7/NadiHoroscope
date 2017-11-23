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
  constructor(public navCtrl: NavController, public pouchService: PouchService) {
    
    this.pouchService.getData().then((data) => {
      this.allData = data;
    });
  }

 

  showPlantsPage() {
      this.navCtrl.push(PlantsPage);
  }
}
