'use strict';

define(['application'], function (app) {
    var dataService = function () {
    	 var self = this;
//In Real Scenario this list will come from back-end through Ajax Service
    	 self.customerList = [
     {
        name:"Ram Kumar",
        number:"9333444444",
        email:"ramKumar@gmail.com"
     },
     {
        name:"Manoj Gupta",
        number:"9333456444",
        email:"manojgupta@gmail.com"
     },
     {
        name:"Saurabh Dhingra",
        number:"8933444444",
        email:"saurabhdhingra@gmail.com"
     }
     ];
  
    };

    
    app.register.service('dataService',dataService);

});

