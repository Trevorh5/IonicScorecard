import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CourseInfoProvider} from "../../providers/course-info/course-info";
import {AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  apiData = [];
  courseInfo = [];
  courseName: string;
  courseTee: string;

  constructor(public http: HttpClient,
              private AngularDb: AngularFireDatabase,
              public courseProvider: CourseInfoProvider
  ) {
    AngularDb.list('courses').valueChanges().subscribe(data => {
      this.apiData = data;
    })
  }



  ionViewDidEnter() {
    this.courseName = this.courseProvider.courseTitle;
    this.courseTee = this.courseProvider.tee;
    for(let i = 0; i < this.apiData.length; i++){
      if(this.apiData[i].name === this.courseName){
        this.courseInfo = this.apiData[i];
      }
    }
  }

}
