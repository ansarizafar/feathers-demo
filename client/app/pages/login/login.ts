import {Page, NavController} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/common';

import {RestService} from '../../services/restservice.ts'


@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  mainForm: ControlGroup
  nav: NavController
  user: any
  err: any

  constructor(nav: NavController, fb: FormBuilder, private _restService: RestService) {
    this.nav = nav;
    this.mainForm = fb.group({
      username: [""],
      password: [""]
    });

   // console.log("isLoggedIn", authService.isLoggedIn())
  }

  onSubmit(value): void {
    console.log('you submitted value: ', value);

    /*if (value) {
      this.authService.login(value.username, value.password)
        .subscribe(
           data => {
             this.user = data;
             this.err = undefined;
             // here is where you navigate to next page
           },
           err => this.err = "ERROR " + JSON.parse(err._body).error,
           () => console.log('User Login Success')
        );
    } */
  }

  onCreateAccount(value): void {
   // this.nav.push(CreateAccountPage, {});
  }
}