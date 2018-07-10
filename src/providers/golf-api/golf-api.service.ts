import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the GolfApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GolfApiService {

  constructor(public http: HttpClient) {
    console.log('Hello GolfApiProvider Provider');
  }
  //TODO look at fredos and see if he even uses this service at all.
  private apiUrl: "https://golf-scorecard-9cc53.firebaseio.com/";

  getCourses(): Observable<any>{
    return this.http.get(`${this.apiUrl}courses[0].city.json`);
  }
}
