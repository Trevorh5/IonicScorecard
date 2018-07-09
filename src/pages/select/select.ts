import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {CourseInfoProvider} from "../../providers/course-info/course-info";

/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  courseNames = [];
  apiData = [];
  selCourse: string;
  teeArr = [];
  selTee: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private AngularDb: AngularFireDatabase,
              public courseProvider: CourseInfoProvider)
  {
    AngularDb.list('courses').valueChanges().subscribe(data =>{
      this.apiData = data;
      for(let i = 0; i < this.apiData.length; i++){
        this.courseNames.push(this.apiData[i].name);
      }
      console.log(this.apiData);
    });
  }

  getTees(course){
    this.selCourse = course.value;
    this.courseProvider.courseTitle = this.selCourse;
    console.log(this.selCourse);
    for(let i = 0; i < this.courseNames.length; i++){
      if(this.courseNames[i] === this.selCourse){
        this.teeArr = [];
        for(let y = 0; y < this.apiData[i].holes[0].teeBoxes.length; y++){
          this.teeArr.push(this.apiData[i].holes[0].teeBoxes[y].teeType)
        }
      }
    }
  }

  getTeeInfo(tee){
    this.selTee = tee.value;
    this.courseProvider.tee = this.selTee;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

}
