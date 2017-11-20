import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';
import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'newAssessment',
  templateUrl: 'newAssessment.html'
})
export class NewAssessmentPage {
  public base64Image: string;
  constructor(public navCtrl: NavController, private fileChooser: FileChooser) {

  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

  uploadFile(){
  this.fileChooser.open()
  .then(uri => console.log(uri))
  .catch(e => console.log(e));
  }

}
