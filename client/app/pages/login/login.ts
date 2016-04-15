import {Page, NavController} from 'ionic-angular';
import {FORM_DIRECTIVES} from 'angular2/common';

import {RestService} from '../../services/restservice.ts'
import {HelloIonicPage} from '../hello-ionic/hello-ionic';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
   directives: [FORM_DIRECTIVES]
})
export class LoginPage {
  private _auth;
  constructor(public nav: NavController, private _restService: RestService) {
    this.nav = nav;
    this._auth = _restService.auth();
  }
  
   login(credentials) {
    this.nav.setRoot(HelloIonicPage);
  }
}
