'use strict';

define(['application'], function (app) {

    var injectParams = ['$scope','dataService'],
    customersController = function ($scope, dataService) {
        
     //Add Your Controller code here

    
     $scope.customersList = dataService.customerList;
    };

    customersController.$inject = injectParams;

    //Dynamically loading and registering controller via app.register.controller
    app.register.controller('customersController', customersController);

});