'use strict';

require.config({
	baseUrl: 'app/',
	waitSeconds: 20,
	paths:{
		angular: "vendors/angular/angular.min",
		angularRoute:"vendors/angular/angular-route.min",
		application : "app",
		routeResolver:"components/common/services/routeResolver",

		homeController:"components/home/controllers/home-controller",
		customersController:"components/customers/controllers/customers-controller",
		dataService:"components/customers/services/data-service"
	},
	shim:{
		'application':{
			deps: ['angular','angularRoute']
		},
		'routeResolver':{
			deps: ['angular']
		},
		'angularRoute': {
			deps: ['angular']
		},
	}
});

//Load main module app.js and bootstrap Angular app
require(['application','routeResolver'],function(app){
	angular.bootstrap(document, ['app']);
}); 