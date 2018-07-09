import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClientModule} from "@angular/common/http";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClientModule
  ) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
