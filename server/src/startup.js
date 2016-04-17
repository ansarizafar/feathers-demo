const userModel = require('./services/user/user-model');

const startup = function (app) {

userModel.count({role: 'Admin'}).then(function(count){
    if (count === 0) {
    app.service('signup').create({
        userName: 'Zafar Ansari',
        role: 'Admin',
        loginName: 'zafaransari',
        password: 'billgates3'
        }).then(function (user) {
        console.log('Created user', user);
    });    
    }
});
    
}


module.exports = startup;