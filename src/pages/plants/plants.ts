import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { PouchService } from '../../services/pouchService';
import { AssessmentsPage } from '../assessments/assessments';

@Component({
  selector: 'plants',
  templateUrl: 'plants.html'
})
export class PlantsPage {
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
  plantsList:any;
  plant_id:any;
  constructor(public navCtrl: NavController, private file: File, public pouchService: PouchService, public toastCtrl: ToastController) {
    this.pouchService.updatePlants(this.dbInit)
    this.pouchService.getData().then((data) => {
      this.plantsList = data[0].plants;
      this.createPlantDirectories(this.plantsList)
    });
  }

  createPlantDirectories(plantsList){
    this.file.createDir(this.file.externalRootDirectory,'PlantData', false).then(success =>{
      for(var i = 0; i < this.plantsList.length; i++){
        this.file.createDir(this.file.externalRootDirectory+'PlantData/',this.plantsList[i].plant_name, false).then(success =>{
         console.log("Plants Directories initialised.")
        }, error => {
          console.log('Plants Directories initialisation falied.');
        })
     }
    }, error => {
      for(var i = 0; i < this.plantsList.length; i++){
        this.file.createDir(this.file.externalRootDirectory+'PlantData/',this.plantsList[i].plant_name, false).then(success =>{
         console.log("Plants Directories initialised.")
        }, error => {
          console.log('Plants Directories initialisation falied.');
        })
     }
    })
  }

  showAssessmentsPage(id){
    if(!this.plant_id){
      this.presentToast('Please select a plant.');
    }
    else{
      this.navCtrl.push(AssessmentsPage, {
        plant_id: id
      })
    }
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
