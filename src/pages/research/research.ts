import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import {ResearchService} from '../../services/research.service';
import {ResearchdetailPage} from '../researchdetail/researchdetail';
@IonicPage()
@Component({
  selector: 'page-research',
  templateUrl: 'research.html',
})
export class ResearchPage {

  researchForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public researchService: ResearchService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResearchPage');
  }
  ionViewWillLoad() {
    this.researchForm = new FormGroup({
      whatBiz: new FormControl('', Validators.required),
      whereBiz: new FormControl('', Validators.required)
    })
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  onSubmit(value){
    console.log(value)
    this.researchService.createResearchRequest(value);
    this.navCtrl.push(ResearchdetailPage,value);
  }

}
