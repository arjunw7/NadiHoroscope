import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Camera} from 'ionic-native';
import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'newAssessment',
  templateUrl: 'newAssessment.html'
})
export class NewAssessmentPage {
  public base64Image: string;
  public selectedFile: string;
  selectedPlant:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser) {
    this.selectedPlant= navParams.get('currentPlant');
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.selectedFile = '';
    }, (err) => {
        console.log(err);
    });
  }

  uploadFile(){
  this.fileChooser.open()
  .then(function(uri){
    this.selectedFile = uri;
    this.base64Image = '';
  })
  .catch(e => console.log(e));
  }

}
