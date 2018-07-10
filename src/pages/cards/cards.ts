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
  players = [];
  courseName = 'Thanksgiving Point';
  //scoreArr = [];
  teeIndex = 2;
  totalPar;
  totalHcp;
  totalYards;

  constructor(public http: HttpClient,
              private AngularDb: AngularFireDatabase,
              public courseProvider: CourseInfoProvider
  ) {
    AngularDb.list('courses').valueChanges().subscribe(data => {
      this.apiData = data;
    })
  }


  ionViewDidEnter() {

    //TODO uncomment these and change the variables at the top so they aren't hardcoded.
    //this.courseName = this.courseProvider.courseTitle;
    //this.teeIndex = this.courseProvider.tee;
    this.players = this.courseProvider.players;

    this.totalPar = 0;
    this.totalHcp = 0;
    this.totalYards = 0;
    for(let i = 0; i < this.apiData.length; i++){
      if(this.apiData[i].name === this.courseName){
        this.courseInfo = this.apiData[i];
        for(let j = 0; j < this.apiData[i].holes.length; j++){
          this.totalPar += this.apiData[i].holes[j].teeBoxes[this.teeIndex].par;
          this.totalHcp += this.apiData[i].holes[j].teeBoxes[this.teeIndex].hcp;
          this.totalYards += this.apiData[i].holes[j].teeBoxes[this.teeIndex].yards;
        }
      }
    }
    console.log(this.courseInfo);
  }

  getScore(score, index, player){
    //console.log(score.value, index, player);

    player.inScore = 0;
    player.outScore = 0;
    player.totScore = 0;
    player.scoreArr[index] = score.value;
    console.log(index, player.scoreArr, player.inScore);

    for(let i = 0; i < player.scoreArr.length; i++){
      if(i < 9) {
        player.inScore += (Number(player.scoreArr[i]) - this.courseInfo.holes[i].teeBoxes[this.teeIndex].par);
      }
      else if(i >= 9){
        player.outScore += (Number(player.scoreArr[i]) - this.courseInfo.holes[i].teeBoxes[this.teeIndex].par)
      }
      player.totScore += (Number(player.scoreArr[i]) - this.courseInfo.holes[i].teeBoxes[this.teeIndex].par);
    }

    console.log('after for loop' + player.inScore)


  }

}
