import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';

@Component({
  selector: 'files',
  templateUrl: 'files.html'
})
export class FilesPage {
  downloads:any = 0;

  constructor(public navCtrl: NavController, public file: File) {
    this.file.listDir(this.file.externalRootDirectory, 'Download').then((data)=>{
      this.downloads = data
    })
  }
}
