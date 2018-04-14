import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isPresent } from 'ionic-angular/util/util';
import { StdBizService } from '../../services/stdbiz.service';
import { StdBizModel } from '../../services/stdbiz.model';


/**
 * Generated class for the StdtemplatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stdtemplate',
  templateUrl: 'stdtemplate.html',
})
export class StdtemplatePage {

  _query : string = 'all';
  stdbizs : Array<StdBizModel> = new Array<StdBizModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public stdbizService: StdBizService
  ) {
    let query_param = navParams.get('query');
    this._query = isPresent(query_param) ? query_param : 'all';
  }

  ionViewWillEnter() {
    this.stdbizService.getStdBizFeed()
    .subscribe(data => {
      this.stdbizs = data.categories
    });
  }

  /*openDetails(params) {
    this.navCtrl.push(StdbizDetails, params);
  }*/
}
