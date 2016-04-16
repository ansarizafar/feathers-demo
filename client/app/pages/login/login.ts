import {Page, NavController} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup} from 'angular2/common';

import {RestService} from '../../services/restservice.ts'
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import {SignupPage} from '../signup/signup';

import {ControlMessages} from '../../components/control-messages';
import {ValidationService} from '../../services/validationservice';

@Page({
  templateUrl: 'build/pages/login/login.html',
  directives: [FORM_DIRECTIVES, ControlMessages]
})
export class LoginPage {
  private _auth;
  loginForm: ControlGroup;

  constructor(private _fb: FormBuilder, public nav: NavController, private _restService: RestService) {

    this.loginForm = _fb.group({
      loginName: ["", Validators.required],
      password: ["", Validators.compose([Validators.required, ValidationService.passwordValidator])]
    });

    this.nav = nav;
    this._auth = _restService.auth();

  }


  login(value: string): void {
    this.nav.setRoot(HelloIonicPage);
  }

  signup() {
    this.nav.push(SignupPage);
  }
}
