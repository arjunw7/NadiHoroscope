import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PouchService } from '../services/pouchService';
import { LandingPage } from '../pages/landing/landing'
import { HomePage } from '../pages/home/home';
import { InstructionsPage } from '../pages/instructions/instructions';
import { InputPage } from '../pages/input/input';
import { SurveyPage } from '../pages/survey/survey';
import { ResultPage } from '../pages/result/result';
import { HistoryPage } from '../pages/history/history';
import { HistoryItemPage } from '../pages/historyItem/historyItem'

import { FormsModule } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    HomePage,
    InstructionsPage,
    InputPage,
    SurveyPage,
    ResultPage,
    HistoryPage,
    HistoryItemPage
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    HomePage,
    InstructionsPage,
    InputPage,
    SurveyPage,
    ResultPage,
    HistoryPage,
    HistoryItemPage
  ],
  providers: [
    PouchService,
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
