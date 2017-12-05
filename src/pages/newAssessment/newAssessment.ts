import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

declare var cordova: any;

@Component({
  selector: 'newAssessment',
  templateUrl: 'newAssessment.html'
})
export class NewAssessmentPage {
  category:any;
  public folderStructure:any = [
    {
      "categoryName": "Boiler",
      "subCategory": [
        {
          "name":"Boiler",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Mills",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Fans",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"APH",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"SCR/SNCR",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Others",
          "subCategory":[]
        }
      ]
    },
    {
      "categoryName": "AQCS",
      "subCategory": [
        {
          "name":"FGD",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"ESP",
          "subCategory":["Drawings", "Design Data", "Others"]
        }
      ]
    },
    {
      "categoryName": "Material Handling",
      "subCategory": [
        {
          "name":"CHP",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"AHP",
          "subCategory":["Drawings", "Design Data", "Others"]
        }
      ]
    },
    {
      "categoryName": "Steam Turbine",
      "subCategory": [
        {
          "name":"ST Module",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Bypass System",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"CEP",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"BFP",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Feed Water Heaters",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Gland Steam Condensor",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Others",
          "subCategory":[]
        }
      ]
    },
    {
      "categoryName": "Cooling System",
      "subCategory": [
        {
          "name":"Condensor",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Cooling Towers",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"CW Pumps",
          "subCategory":["Drawings", "Design Data", "Others"]
        }
      ]
    },
    {
      "categoryName": "Water",
      "subCategory": [
        {
          "name":"Raw Water System",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Desalination",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"DM Plant",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Condensate Polishing Plant",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Chemical Treatment Plant",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"FGD Water Treatment",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Cooling Tower Water Treatment",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Others",
          "subCategory":[]
        }
      ]
    },
    {
      "categoryName": "Generator & Electrical",
      "subCategory": [
        {
          "name":"Generator",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Exitation System",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Transformers",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Switch Gear",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Battery",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"DG Set",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Others",
          "subCategory":[]
        }
      ]
    },
    {
      "categoryName": "Control System",
      "subCategory": [
        {
          "name":"Control System",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Instrumentation",
          "subCategory":["Drawings", "Design Data", "Others"]
        },
        {
          "name":"Others",
          "subCategory":[]
        }
      ]
    }
    ,
    {
      "categoryName": "Others",
      "subCategory": []
    }
  ]
  public folderSubCategory:any = [];
  public folderSubCategorySub:any = [];
  public base64Image: string;
  public selectedFile: string;
  selectedPlant:any;
  fileName:any;
  subCategory:any;
  description:any;
  lastImage: string = null;
  loading: Loading;
  correctPath:any;
  currentName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) {
    this.selectedPlant= navParams.get('currentPlant');
  }

  public getSubcategories(category_id){
    this.folderSubCategory = this.folderStructure[category_id].subCategory;
  }
  public getSubcategoriesSub(sub_category_id){
    this.folderSubCategorySub = this.folderStructure[this.category].subCategory[sub_category_id].subCategory;
  }
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        }
      ]
    });
    actionSheet.present();
  }


  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: true,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            this.correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            this.currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(this.correctPath, this.currentName, this.createFileName());
          }); 
      } else {
        this.currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        this.correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(this.correctPath, this.currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }

  // Create a new name for the image
  public createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }
  
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    // this.file.createDir(this.file.externalRootDirectory,'PlantData', true).then(success =>{
    //   this.presentToast('Directory Created.');
    // }, error => {
    //   this.presentToast('Directory not Created.');
    // })
    this.file.copyFile(namePath, currentName, this.file.externalRootDirectory+'PlantData', newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
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
  
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.file.externalRootDirectory+'Plantdata/' + img;
    }
  }
  goBack(){
    this.navCtrl.pop();
  }
  uploadData(){
    if(!this.fileName || !this.category || !this.subCategory || !this.lastImage){
      this.presentToast('Please fill all required fields.')
    }
    else{
    this.presentToast('File uploaded successfully.');
    delete this.fileName
    delete this.category 
    delete this.subCategory
    delete this.description
    delete this.lastImage
    }
  }

}
