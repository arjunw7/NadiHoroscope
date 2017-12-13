import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';

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
  selectedProject:any;
  fileName:any;
  subCategory:any;
  subCategory1:any;
  lastImage: string = null;
  loading: Loading;
  correctPath:any;
  currentName:any;
  currentProject_id:any;
  fullPath:any;
  currentProjectName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, private fileChooser: FileChooser) {
    this.selectedPlant= navParams.get('currentPlant');
    this.currentProject_id=navParams.get('currentProject_id');
    this.currentProject_id= this.currentProject_id-1;
    this.currentProjectName = this.selectedPlant.assessments[this.currentProject_id].assessment_name;
    console.log(this.currentProjectName)
    //Directory setup in phone memory
    this.createInnerDirectories()
    

     

  }

  createInnerDirectories(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait while the directories are being initialised.'
    }); 
    loading.present();

    for(var i = 0; i < this.folderStructure.length; i++){
      this.file.createDir(this.file.externalRootDirectory+'PlantData/'+this.selectedPlant.plant_name+ '/'+this.selectedPlant.assessments[this.currentProject_id].assessment_name+'/',this.folderStructure[i].categoryName, false).then(success =>{
        for(var l=0; l<this.folderStructure.length; l++){
            for(var j=0; j < this.folderStructure[l].subCategory.length; j++){
              this.file.createDir(this.file.externalRootDirectory+'PlantData/'+this.selectedPlant.plant_name+ '/'+this.selectedPlant.assessments[this.currentProject_id].assessment_name+'/' + this.folderStructure[l].categoryName + '/', this.folderStructure[l].subCategory[j].name, false).then(success=>{
                for(var i=0; i<this.folderStructure.length; i++){
                  for(var j=0; j<this.folderStructure[i].subCategory.length; j++){
                    for(var k=0; k<this.folderStructure[i].subCategory[j].subCategory.length; k++){
                      console.log(this.file.externalRootDirectory+'PlantData/'+this.selectedPlant.plant_name+ '/'+this.selectedPlant.assessments[this.currentProject_id].assessment_name+'/' + this.folderStructure[i].categoryName + '/' + this.folderStructure[i].subCategory[j].name + '/', this.folderStructure[i].subCategory[j].subCategory[k])
                    this.file.createDir(this.file.externalRootDirectory+'PlantData/'+this.selectedPlant.plant_name+ '/'+this.selectedPlant.assessments[this.currentProject_id].assessment_name+'/' + this.folderStructure[i].categoryName + '/' + this.folderStructure[i].subCategory[j].name + '/', this.folderStructure[i].subCategory[j].subCategory[k], false).then(success=>{
                      console.log('done')
                    }, error =>{
                      console.log('Second subcategory initialisation failed.');
                    })
                  }
                  }
                }
              }, error=>{
                console.log('First subcategory initialisation failed.');
              })
            }
        }
      }, error =>{
        console.log('Main initialisation failed.');
      })
   }
   loading.dismiss();
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
            this.fullPath = this.correctPath+this.currentName;
          }); 
      } else {
        this.currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        this.correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.fullPath = this.correctPath+this.currentName;
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }

  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }
  
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    console.log(namePath)
    console.log(currentName)
    console.log(newFileName)
    console.log(this.category)
    console.log(this.subCategory)
    console.log(this.subCategory1)
    console.log(this.file.externalRootDirectory+'PlantData/'+this.selectedPlant.plant_name+ '/'+this.selectedPlant.assessments[this.currentProject_id].assessment_name+'/'+ this.folderStructure[this.category].categoryName+'/'+ this.folderStructure[this.category].subCategory[this.subCategory].name + '/' + this.subCategory1)

    if(this.category && !this.subCategory && !this.subCategory1){
      this.file.copyFile(namePath, currentName, this.file.externalRootDirectory+'Plantdata/'+ this.folderStructure[this.category].categoryName, newFileName + '.jpg').then(success => {
        this.lastImage = newFileName + '.jpg';
      }, error => {
        this.presentToast('Error while storing file.');
      });
    }
    else if(this.category && this.subCategory && !this.subCategory1){
      this.file.copyFile(namePath, currentName, this.file.externalRootDirectory+'PlantData/'+this.selectedPlant.plant_name+ '/'+this.selectedPlant.assessments[this.currentProject_id].assessment_name+'/'+ this.folderStructure[this.category].categoryName+'/'+ this.folderStructure[this.category].subCategory[this.subCategory].name + '/' , this.fileName + '.jpg').then(success => {
        this.lastImage = this.fileName + '.jpg';
      }, error => {
        this.presentToast('Error while storing file.');
      });
    }
    else if(this.category && this.subCategory && this.subCategory1){
      this.file.copyFile(namePath, currentName, this.file.externalRootDirectory+'PlantData/'+this.selectedPlant.plant_name+ '/'+this.selectedPlant.assessments[this.currentProject_id].assessment_name+'/'+ this.folderStructure[this.category].categoryName+'/'+ this.folderStructure[this.category].subCategory[this.subCategory].name + '/' + this.subCategory1, this.fileName + '.jpg').then(success => {
        this.lastImage = this.fileName + '.jpg';
      }, error => {
        this.presentToast('Error while storing file.');
      });
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
  
// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}
  goBack(){
    this.navCtrl.pop();
  }
  uploadData(){
    if(!this.fileName || !this.category || !this.subCategory || !this.fullPath){
      this.presentToast('Please fill all required fields.')
    }
    else{
    this.copyFileToLocalDir(this.correctPath, this.currentName, this.createFileName());
    this.presentToast('File uploaded successfully.');
    delete this.fileName
    delete this.category 
    delete this.subCategory
    delete this.subCategory1
    delete this.lastImage
    this.folderSubCategory = []
    this.folderSubCategorySub = []
    delete this.fullPath
    }
  }

}
