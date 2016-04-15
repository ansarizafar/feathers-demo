import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {LoginPage} from './pages/login/login';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {RestService} from './services/restservice.ts'

@App({
  templateUrl: 'build/app.html',
  providers: [RestService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  // make HelloIonicPage the root (or first) page
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;
  private _auth;
  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController,
    private _restService: RestService
  ) {
    this.initializeApp();
    this._auth = _restService.auth();

    // set our app's pages
    this.pages = [
      { title: 'Subscriptions', component: HelloIonicPage },
      { title: 'Products', component: ListPage },
      { title: 'Log out', component: ''}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    if(page.title == 'Log out') {
   nav.setRoot(LoginPage);
  /* this._auth.logout(). then(function(result){
    nav.setRoot(LoginPage); 
   }).catch(function(err){
     
   });
   */   
    } else {
    nav.setRoot(page.component);
    }
  }
}
