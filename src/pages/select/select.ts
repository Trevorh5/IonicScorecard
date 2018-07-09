import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import {GolfApiService} from "../../providers/golf-api/golf-api.service";

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
  selTees = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public AngularDb: AngularFireDatabase,
              public provider: GolfApiService)
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
    console.log('im working');
    this.selCourse = course.value;

    for(let i = 0; i < this.courseNames.length; i++){
      if(this.courseNames[i] === this.selCourse){
        this.selTees = []
        for(let y = 0; y < this.apiData[i].holes[0].teeBoxes.length; y++){
          this.selTees.push(this.apiData[i].holes[0].teeBoxes[y].teeType)
        }
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

}
