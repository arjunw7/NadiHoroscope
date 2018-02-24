import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LandingPage} from '../landing/landing';
import { PouchService } from '../../services/pouchService';

@Component({
  selector: 'result',
  templateUrl: 'result.html'
})
export class ResultPage {
  patient:any;
  inputData:any;
  score:any;
  maxScore:any;
  status:any;
  allData:any;
  newReading = {
    "id":"", 
    "patientName": "", 
    "patientAge":"",
    "patientHeight": "",
    "patientWeight": "",
    "patientGender": "",
    "value1": "",
    "value2": "",
    "value3": "",
    "value4": "",
    "value5": "",
    "value6": "",
    "value7": "",
    "value8": "",
    "value9": "",
    "score": "",
    "dignosis": ""   
  };
  bmi:any
  bodyWeight:any
  constructor(public navCtrl: NavController, public pouchService: PouchService, public navParams: NavParams, public toastCtrl: ToastController) {
    this.score= navParams.get('score');
    this.maxScore= navParams.get('maxScore');
    this.status = navParams.get('status');
    this.patient = navParams.get('patient');
    this.inputData = navParams.get('inputData');
    console.log(this.score)
    console.log(this.maxScore)
    console.log(this.status)
    console.log(this.patient)
    console.log(this.inputData)
    this.bmi = (parseFloat(this.patient.weight)/(parseFloat(this.patient.height)*0.305))/(parseFloat(this.patient.height)*0.305)
    if(this.bmi>=25.0) this.bodyWeight = "Kapha Body"
    else if(this.bmi>=18.50 && this.bmi<25.0) this.bodyWeight = "Pitta Body"
    else this.bodyWeight = "Vatta Body" 
    console.log(this.bodyWeight)
    this.pouchService.getData().then((data) => {
      this.allData = data[0].readings
      console.log(this.allData)
      this.newReading.id = this.allData.length+1
      this.newReading.patientName = this.patient.name
      this.newReading.patientAge = this.patient.age
      this.newReading.patientHeight = this.patient.height
      this.newReading.patientWeight = this.patient.weight
      this.newReading.patientGender = this.patient.gender
      for(var i=0; i<this.inputData.length; i++){
        if(this.inputData[i].id==1) this.newReading.value1= this.inputData[i].value
        else if(this.inputData[i].id==2) this.newReading.value2= this.inputData[i].value
        else if(this.inputData[i].id==3) this.newReading.value3= this.inputData[i].value
        else if(this.inputData[i].id==4) this.newReading.value4= this.inputData[i].value
        else if(this.inputData[i].id==5) this.newReading.value5= this.inputData[i].value
        else if(this.inputData[i].id==6) this.newReading.value6= this.inputData[i].value
        else if(this.inputData[i].id==7) this.newReading.value7= this.inputData[i].value
        else if(this.inputData[i].id==8) this.newReading.value8= this.inputData[i].value
        else if(this.inputData[i].id==9) this.newReading.value9= this.inputData[i].value
      }
      this.newReading.score = this.score + '/' +this.maxScore
      this.newReading.dignosis = this.status
      this.allData.push(this.newReading)
      this.pouchService.updatePlants(this.allData)
    });
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
  returnHome(){
    this.navCtrl.push(LandingPage)
  }
}
