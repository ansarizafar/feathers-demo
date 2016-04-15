import {Page} from 'ionic-angular';
import {RestService} from '../../services/restservice.ts'

@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
    })
export class HelloIonicPage {
  private _customerService;
private _customer;
  constructor( private _restService: RestService) {
this._customerService = _restService.getService('customers');
   }

   ngOnInit() {
   this._customerService.find({query: { _id: '570e865e181048f80e87164d',  $populate: ['area'], $select: ['name','email','area']}}).then(customer => {
      this._customer = customer;
      console.log(customer);
   });
 }
}
