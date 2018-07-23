import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare let require_test: any;
declare let cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	   carpath = "libElastos.HelloCarDemo.so";

  constructor(public navCtrl: NavController) {

  }
  
  require_module(){
	 require_test(this.carpath);
  }

  
  require_wallet(){
	  //console.log('Error: zhh ', "DATE require_wallet" );
	  cordova.plugins.appmanager.StartApp("wallet/www/index.html" + "?timestamp=" + new Date().getTime(), 
	  function (data) { }, 
	  function (error) { });
  }
}
