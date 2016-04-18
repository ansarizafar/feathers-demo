'use strict';
const errors = require('feathers-errors');

const hooks = require('./hooks');
const userModel = require('../user/user-model');
const customerModel = require('../customer/customer-model');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return Promise.resolve([]);
  }

  get(id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create(data, params) {

    return new Promise(function (resolve, reject) {

      if (data.role === 'Customer') {
        let customer = new customerModel({
          companyName: data.companyName,
          city: data.city,
          area: data.areaName,
          address: data.address,
          phone: data.phone,
          email: data.email,
          user: null
        });

        customer.save().then(function (newCustomer) { //Customer user success
          let user = new userModel({
            userName: data.userName,
            role: "Customer",
            belongTo: customer._id,
            loginName: data.loginName,
            password: data.password

          });
          user.save().then(function (newUser) { //Customer user added
            newCustomer.user = newUser._id
            customerModel.update({ _id: newCustomer._id }, newCustomer).then(function (upCustomer) { //Customer update success
              console.log(`A user account for ${newCustomer.userName} is created.`);
              resolve(newCustomer);
            })
              .catch(function (error) { //Customer update failed
                reject(error);

              });

          })
            .catch(function (error) { // Customer user save error
              // Delete customer
              customerModel.remove({ _id: newCustomer._id }).then(function () { //Customer remove successful
                reject('Customer creation failed');
              })
                .catch(function (error) { // Customer removal failed
                  reject(error);
                });

            });

        })
          .catch(function (error) { //customer save error
            reject(error);
            //throw new errors.BadRequest({errors: error});
          });

      } else {  //If not Admin
        let user = new userModel({
          userName: data.userName,
          role: "Admin",
          loginName: data.loginName,
          password: data.password
        });
        user.save().then(function (newUser) { //Admin user success
          console.log(`A user account for ${newUser.userName} is created.`);
          resolve(newUser);
        })
          .catch(function (error) { // Admin user error
            reject(error);
            //throw new errors.BadRequest({errors: error});
          });
      }
    });

    /*
        if(Array.isArray(data)) {
          return Promise.all(data.map(current => this.create(current)));
        }
        return Promise.resolve(data);
        */

  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }


}

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/signup', new Service());

  // Get our initialize service to that we can bind hooks
  const signupService = app.service('/signup');

  // Set up our before hooks
  signupService.before(hooks.before);

  // Set up our after hooks
  signupService.after(hooks.after);
};

module.exports.Service = Service;
