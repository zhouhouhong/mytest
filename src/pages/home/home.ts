import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	   carpath;

  constructor(public navCtrl: NavController) {

  }
  
  require_module(){
	 require_test(this.carpath);
  }

}
