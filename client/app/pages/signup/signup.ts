import {Page, Alert, NavController} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup} from 'angular2/common';

import {RestService} from '../../services/restservice.ts'
import {ControlMessages} from '../../components/control-messages';
import {ValidationService} from '../../services/validationservice';

@Page({
  templateUrl: 'build/pages/signup/signup.html',
   directives: [FORM_DIRECTIVES, ControlMessages]
})
export class SignupPage {
   private _auth;
  signupForm: ControlGroup;
  constructor(private _fb: FormBuilder, public nav: NavController, private _restService: RestService) {
   this.signupForm = _fb.group({
      companyName: ["",  Validators.compose([Validators.required, Validators.maxLength(40)])],
      city: ["Karachi",  Validators.required],
      area: ["",  Validators.required],
      address: ["",  Validators.compose([Validators.required, Validators.maxLength(50)])],
      phone: ["",  Validators.compose([Validators.required, Validators.maxLength(10)])],
      email: ["",  Validators.compose([Validators.required, ValidationService.emailValidator])],
      userName: ["",  Validators.compose([Validators.required, Validators.maxLength(25)])],
      loginName: ["",  Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10), ValidationService.loginNameValidator])],
      password: ["", Validators.compose([Validators.required, ValidationService.passwordValidator])]
    });

    this.nav = nav;
    this._auth = _restService.auth();
  }
  
    signup(value: string): void {
      let alert = Alert.create({
      title: 'Account Created!',
      subTitle: 'Your free account has been created.',
      buttons: ['OK']
    });
    this.nav.present(alert);
  }
}
