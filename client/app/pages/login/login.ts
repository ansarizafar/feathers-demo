import {Page, NavController} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup} from 'angular2/common';

import {RestService} from '../../services/restservice.ts'
import {HelloIonicPage} from '../hello-ionic/hello-ionic';

import {ControlMessages} from '../../components/control-messages';
import {ValidationService} from '../../services/validationservice';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/login/login.html',
   directives: [FORM_DIRECTIVES, ControlMessages]
})
export class LoginPage {
  private _auth;
   loginForm: ControlGroup;  
   
  constructor(private fb: FormBuilder, public nav: NavController, private _restService: RestService) {

     this.loginForm = fb.group({
            loginName: ["", Validators.required],
            password: ["", Validators.compose([Validators.required, ValidationService.passwordValidator])]
        });
    
    this.nav = nav;
    this._auth = _restService.auth();
    
  }
  

  login(value: string): void {  
    console.log('you submitted value: ', value);
    this.nav.setRoot(HelloIonicPage);
  }
}
