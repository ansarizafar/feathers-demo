declare  function require(path: string) : any;

const feathers = require('feathers/client');
const localstorage = require('feathers-localstorage');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest/client');
const authentication = require('feathers-authentication/client');
const superagent = require('superagent');

import { Injectable } from 'angular2/core';

const HOST = 'http://localhost:3030'; // Your base server URL here
@Injectable()
export class RestService {
  private _app: any;
  constructor() {
    this._app = feathers()
    .configure(rest(HOST)
    .superagent(superagent))
    .configure(hooks()) // Configure feathers-hooks
    .configure(authentication({ storage: localStorage }));
  }

  getService(service: string) {
  return this._app.service(service);
}

auth() {
  return this._app;
}

}
