import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { SurveyPage } from '../survey/survey';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'inputPage',
  templateUrl: 'input.html'
})
export class InputPage {
  status:any
  patient: any;
  inputs = {
    "vatta_vatta": "",
    "vatta_pitta": "",
    "vatta_kapha": "",
    "pitta_vatta": "",
    "pitta_pitta": "",
    "pitta_kapha": "",
    "kapha_vatta": "",
    "kapha_pitta": "",
    "kapha_kapha": ""
  }
  inputData = [
    {
      "id": 1,
      "name":"vatta_vatta",
      "value": ""
    },
    {
      "id": 2,
      "name":"vatta_pitta",
      "value": ""
    },
    {
      "id": 3,
      "name":"vatta_kapha",
      "value": ""
    },
    {
      "id": 4,
      "name":"pitta_vatta",
      "value": ""
    },
    {
      "id": 5,
      "name":"pitta_pitta",
      "value": ""
    },
    {
      "id": 6,
      "name":"pitta_kapha",
      "value": ""
    },
    {
      "id": 7,
      "name":"kapha_vatta",
      "value": ""
    },
    {
      "id": 8,
      "name":"kapha_pitta",
      "value": ""
    },
    {
      "id": 9,
      "name":"kapha_kapha",
      "value": ""
    }
  ]
  ionViewWillEnter(){
    this.inputs = {
      "vatta_vatta": "",
      "vatta_pitta": "",
      "vatta_kapha": "",
      "pitta_vatta": "",
      "pitta_pitta": "",
      "pitta_kapha": "",
      "kapha_vatta": "",
      "kapha_pitta": "",
      "kapha_kapha": ""
    }
    this.inputData = [
      {
        "id": 1,
        "name":"vatta_vatta",
        "value": ""
      },
      {
        "id": 2,
        "name":"vatta_pitta",
        "value": ""
      },
      {
        "id": 3,
        "name":"vatta_kapha",
        "value": ""
      },
      {
        "id": 4,
        "name":"pitta_vatta",
        "value": ""
      },
      {
        "id": 5,
        "name":"pitta_pitta",
        "value": ""
      },
      {
        "id": 6,
        "name":"pitta_kapha",
        "value": ""
      },
      {
        "id": 7,
        "name":"kapha_vatta",
        "value": ""
      },
      {
        "id": 8,
        "name":"kapha_pitta",
        "value": ""
      },
      {
        "id": 9,
        "name":"kapha_kapha",
        "value": ""
      }
    ]
  }
  constructor(private bluetoothSerial: BluetoothSerial, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.patient= navParams.get('patient');
  }
  connectDevice(){
    this.bluetoothSerial.enable().then(success=>{
      console.log("on")
      this.status = "Bluetooth is turned on."
      //once bluetooth is turned on, use discoverUnpaired() method to find unpaired devices
      // and then connect(macAddress_or_uuid) method to connect to device you want to connect
      // afte that user read() method to read from the buffer
    }, error=>{
      console.log("off")
    })
  }

  showSurveyPage(){
    if(!this.inputs.vatta_vatta || !this.inputs.vatta_pitta || !this.inputs.vatta_kapha || !this.inputs.pitta_vatta || !this.inputs.pitta_pitta || !this.inputs.pitta_kapha || ! this.inputs.kapha_vatta || !this.inputs.kapha_pitta || !this.inputs.kapha_kapha){
      this.presentToast("Please enter all the fields")
    }
    else{
    this.inputData[0].value = this.inputs.vatta_vatta;
    this.inputData[1].value = this.inputs.vatta_pitta;
    this.inputData[2].value = this.inputs.vatta_kapha;
    this.inputData[3].value = this.inputs.pitta_vatta;
    this.inputData[4].value = this.inputs.pitta_pitta;
    this.inputData[5].value = this.inputs.pitta_kapha;
    this.inputData[6].value = this.inputs.kapha_vatta;
    this.inputData[7].value = this.inputs.kapha_pitta;
    this.inputData[8].value = this.inputs.kapha_kapha;
    this.navCtrl.push(SurveyPage,{
      patient: this.patient,
      inputData: this.inputData,
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
}
