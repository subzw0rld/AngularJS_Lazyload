'use strict';

define(['application'], function (app) {

    var injectParams = ['$scope'],
    homeController = function ($scope) {
     //Add Your Controller code here
     $scope.loginName = "Sanjeev";
    };

    homeController.$inject = injectParams;

    //Dynamically loading and registering controller via app.register.controller
    app.register.controller('homeController', homeController);

});