define(["routeResolver"], function(){

	var app = angular.module("app", ["ngRoute","routeResolverServices"]);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', 
                '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, routeResolverProvider, $controllerProvider, 
                  $compileProvider, $filterProvider, $provide) {

       		/*
	       		Attach angular  services to app module for dyanmic registering of 
	       		controllers, directives, services, factory, filters with main module
       		*/
            app.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            //Define route resolver to dynamic load dependecies of any route
            var routeResolver = routeResolverProvider.routeDependencyResolver();

            $routeProvider
                .when('/home',{
		            templateUrl: '/app/components/home/templates/home-view.html',
		            controller: 'homeController',
		            resolve: {
                        load: ["$q", "$rootScope", function($q, $rootScope){
                            /*
                                Add dependencies to be loaded dyanmically for this route like
                                its controller,services,directives
                            */
                            var dependency = ["homeController"];

                            return routeResolver.resolveDependencies($q, $rootScope, dependency);
                        }]
                    }
			    })
                .when('/customers',{
                    templateUrl: '/app/components/customers/templates/customers-view.html',
                    controller: 'customersController',
                     resolve: {
                        load: ["$q", "$rootScope", function($q, $rootScope){
                            /*
                                Add dependencies to be loaded dyanmically for this route like
                                its controller,services,directives
                            */
                            var dependency = ["customersController","dataService"];

                            return routeResolver.resolveDependencies($q, $rootScope, dependency);
                        }]
                    }
                })
                .otherwise({ redirectTo: '/home' });
    	}
	]);

	return app;

});