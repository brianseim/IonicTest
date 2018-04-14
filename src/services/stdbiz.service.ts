import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class StdBizService {
  constructor(public http: Http){}

  getStdBizFeed(){
    return this.http.get("./assets/standard-biz/biz.json")
      .map((res) => res.json());
  }
}