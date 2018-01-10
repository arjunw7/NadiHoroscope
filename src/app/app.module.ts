import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LandingPage } from '../pages/landing/landing'
import { HomePage } from '../pages/home/home';
import { InstructionsPage } from '../pages/instructions/instructions';
import { InputPage } from '../pages/input/input';
import { SurveyPage } from '../pages/survey/survey';
import { ResultPage } from '../pages/result/result';

import { FormsModule } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    HomePage,
    InstructionsPage,
    InputPage,
    SurveyPage,
    ResultPage
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
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
