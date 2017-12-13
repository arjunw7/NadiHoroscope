import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PlantsPage } from '../pages/plants/plants';
import { AssessmentsPage } from '../pages/assessments/assessments';
import { NewAssessmentPage } from '../pages/newAssessment/newAssessment';
import { FilesPage } from '../pages/files/files';

import { PouchService } from '../services/pouchService';

import { FormsModule } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { Camera } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from '@ionic-native/file-chooser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlantsPage,
    AssessmentsPage,
    NewAssessmentPage,
    FilesPage
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlantsPage,
    AssessmentsPage,
    NewAssessmentPage,
    FilesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PouchService,
    Transfer,
    Camera,
    FilePath,
    File,
    FileChooser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
