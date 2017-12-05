import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController} from 'ionic-angular';

import { NewAssessmentPage } from '../newAssessment/newAssessment';
import { HomePage } from '../home/home';
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
  newAssessment: any;
  selectedPlantIndex: any;
  allData: any;
  newAssessmentID: any;
  assessment_id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pouchService: PouchService, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.selectedPlantId= navParams.get('plant_id');
    this.pouchService.getData().then((data) => {
      this.allData = data;
      this.plantsList = data[0].plants;
      for(let i=0; i<this.plantsList.length; i++){
        if(this.plantsList[i].id==this.selectedPlantId){
          this.selectedPlant = this.plantsList[i]
          this.selectedPlantIndex = i
        }
      }
      this.assessmentList=this.selectedPlant.assessments;
    });
  }
  
  newAssessmentsPage(){
    if(!this.assessment_id){
      this.presentToast('Please select an existing project or create new.')
    }
    else{
    this.navCtrl.push(HomePage, {
      currentPlant: this.selectedPlant
    }) 
  } 
  }
  createNewAssessment(){
    let prompt = this.alertCtrl.create({
      title: 'New project',
      message: '*all fields are mandatory',
      inputs: [
        {
          name: 'title',
          placeholder:'Project title'
        },
        {
          name: 'sso',
          placeholder:"SSO"
        },
        {
          name: 'date',
          placeholder:'Date'
        }

      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.addAssessment({assessment_name: data.title, assessment_date: data.date, user_name: data.sso});
          }
        }
      ]
    });
 
    prompt.present();
  }

  addAssessment(data){
    this.newAssessmentID = this.allData[0].plants[this.selectedPlantIndex].assessments.length;
    console.log(data)
    this.allData[0].plants[this.selectedPlantIndex].assessments.push({
      id: this.newAssessmentID+1,
      plant_id: parseInt(this.selectedPlantId),
      assessment_name: data.assessment_name,
      assessment_date: data.assessment_date,
      user_name: data.user_name
    })
    console.log(this.allData)
    this.pouchService.updatePlants(this.allData[0])

  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  goBack(){
    this.navCtrl.pop();
  }
}
