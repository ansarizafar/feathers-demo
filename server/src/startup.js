const userModel = require('./services/user/user-model');
const customerModel = require('./services/customer/customer-model');

const startup = function (app) {


    userModel.count({ role: 'Admin' }).then(function (count) {
        if (count === 0) {
            app.service('users').create({
                userName: 'Zafar Ansari',
                role: 'Admin',
                loginName: 'zafaransari',
                password: 'Billgates3'
            }).then(function (user) {
                console.log('Created user', user);
            }).catch(function(error){
                console.log(error);
            });
        }
    });

    /*customerModel.count().then(function (count) {
        if (count === 0) { */
            app.service('signup').create({
                companyName: 'City School',
                city: 'Karachi',
                areaName: '570cb2f770c5cecf14bf6f46',
                address: 'Unit no 10',
                phone: '4535345',
                email: 'abc@abc.com',
                userName: 'Jazil Khan',
                role: 'Customer',
                loginName: 'jazilkhan',
                password: 'billgates3'
            }).then(function (user) {
                console.log('Created user', user);
            })
                .catch(function (error) {
                    console.log(error);
                });

      /*  }
    }); */

}


module.exports = startup;