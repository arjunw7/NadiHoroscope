import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlantsPage } from '../plants/plants';


@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  showPlantsPage() {
      this.navCtrl.push(PlantsPage);
  }
}
