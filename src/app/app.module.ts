import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PlantsPage } from '../pages/plants/plants';
import { AssessmentsPage } from '../pages/assessments/assessments';
import { NewAssessmentPage } from '../pages/newAssessment/newAssessment';

import { PouchService } from '../services/pouchService';

import { FormsModule } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileChooser } from '@ionic-native/file-chooser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlantsPage,
    AssessmentsPage,
    NewAssessmentPage
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
    NewAssessmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    PouchService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
