import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CardsPage} from "../pages/cards/cards";
import {SelectPage} from "../pages/select/select";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { GolfApiService } from '../providers/golf-api/golf-api.service';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {AngularFireAuthModule} from "angularfire2/auth";
import { CourseInfoProvider } from '../providers/course-info/course-info';

var environment = {
  apiKey: "AIzaSyCCbDqU014_HhgWKViIME_lz6NVY8nSppg",
    authDomain: "golf-scorecard-9cc53.firebaseapp.com",
    databaseURL: "https://golf-scorecard-9cc53.firebaseio.com",
    projectId: "golf-scorecard-9cc53",
    storageBucket: "golf-scorecard-9cc53.appspot.com",
    messagingSenderId: "591715995691"
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CardsPage,
    SelectPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CardsPage,
    SelectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GolfApiService,
    CourseInfoProvider
  ]
})
export class AppModule {}
