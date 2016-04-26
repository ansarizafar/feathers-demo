import {Page, Toast, Loading, NavController} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup} from 'angular2/common';

import {RestService} from '../../services/restservice.ts'
import {ControlMessages} from '../../components/control-messages';
import {ValidationService} from '../../services/validationservice';
import {LoginPage} from '../login/login';

@Page({
  templateUrl: 'build/pages/signup/signup.html',
  directives: [FORM_DIRECTIVES, ControlMessages]
})
export class SignupPage {
  private _signupService;
  private _areaService;
  public _areas;
  private _city;

  private signupForm: ControlGroup;
  constructor(private _fb: FormBuilder, public nav: NavController, private _restService: RestService) {
    this._areaService = _restService.getService('areas');
    this.nav = nav;
    this._signupService = _restService.getService('signup');

    this.signupForm = _fb.group({
      companyName: ["", Validators.compose([Validators.required, Validators.maxLength(40)])],
      city: ["Karachi", Validators.required],
      areaId: ["", Validators.required],
      address: ["", Validators.compose([Validators.required, Validators.maxLength(70)])],
      phone: ["", Validators.compose([Validators.required, Validators.maxLength(10)])],
      email: ["", Validators.compose([Validators.required, ValidationService.emailValidator])],
      userName: ["", Validators.compose([Validators.required, Validators.maxLength(25)])],
      loginName: ["", Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10), ValidationService.loginNameValidator])],
      password: ["", Validators.compose([Validators.required, ValidationService.passwordValidator])]
    });

    this._city = this.signupForm.controls['city'];
    this._city.valueChanges.subscribe(
      (value: string) => {
        let loading = Loading.create({
          content: 'Loading...'
        });
        this.nav.present(loading);
        this._areaService.find({ query: { city: value, $select: ['name'] } })
          .then(areas => {
            loading.dismiss();
            this._areas = areas.data;
          });
      }
    );
  }

  ngOnInit() {

    this._areaService.find({ query: { city: 'Karachi', $select: ['name'] } })
      .then(areas => {
        this._areas = areas.data;
      });

  }

  signup(value: any): void {
    if (this.signupForm.valid) {
      let loading = Loading.create({
        content: 'Creating account...'
      });
      loading.onDismiss(() => {
        console.log('Dismissed loading');
      });

      this.nav.present(loading);

      this._signupService.create(value).then(result => {
        console.log(result);
        loading.dismiss();
        let toast = Toast.create({
          message: 'Your free account has been created. Please Sign In.',
          duration: 6000
        });

        this.nav.present(toast);
        this.nav.pop();
      }).catch(error => {
        loading.dismiss();
        console.log(error);
        let toast = Toast.create({
          message: 'Unable to create your acount. Please try again.',
          duration: 6000
        });
        this.nav.present(toast);
      });

    }
  }


}
